/**
 * Utilities for transforming Google Sheets data into application formats
 */

interface ScheduleClass {
  time: string;
  name: string;
}

interface ScheduleDay {
  day: string;
  classes: ScheduleClass[];
}

interface Price {
  name: string;
  description: string;
  customerGroup: string;
  category: string;
  price: string;
}

interface Reservation {
  reserver: string;
  time: string;
}

interface Announcement {
  title: string;
  content: string;
  validUntil: Date;
}

// Defining a type for Google Sheets data
interface GoogleSheetsData {
  values: string[][];
}

/**
 * Helper function to check if a value is empty (null, undefined, or empty string)
 */
function isEmpty(value: unknown): boolean {
  return value === null || value === undefined || (typeof value === 'string' && value.trim() === "");
}

/**
 * Transforms Google Sheets API response into schedule format needed by the app
 */
export function transformGoogleSheetsData(data: GoogleSheetsData) {
  const rows = data.values || [];
  
  // Schedule transformation
  const schedule = transformSchedule(rows);
  
  // Prices transformation
  const prices = transformPrices(rows);
  
  // Reservations transformation
  const reservations = transformReservations(rows);
  
  // Announcements transformation
  const announcements = transformAnnouncements(rows);
  
  return {
    schedule,
    prices,
    reservations,
    announcements
  };
}

/**
 * Transforms schedule data from Google Sheets format to app format
 */
function transformSchedule(rows: string[][]): ScheduleDay[] {
  // Find schedule rows (skip header row)
  const scheduleRows = rows.filter((row, index) => 
    index > 1 && 
    row.length >= 3 && 
    ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"].includes(row[0])
  );
  
  // Group by day
  const dayMap = new Map<string, ScheduleClass[]>();
  
  for (const row of scheduleRows) {
    const day = row[0]; // päivä
    const className = row[1]; // laji
    const time = row[2]; // kellonaika
    
    if (!dayMap.has(day)) {
      dayMap.set(day, []);
    }
    
    dayMap.get(day)?.push({
      time,
      name: className
    });
  }
  
  // Convert to array format
  return Array.from(dayMap.entries()).map(([day, classes]) => ({
    day,
    classes
  }));
}

/**
 * Transforms price data from Google Sheets format
 */
function transformPrices(rows: string[][]): Price[] {
  // Find start of price section
  const priceHeaderIndex = rows.findIndex(row => 
    row.length >= 5 && 
    row[0] === "Tuotteen Nimi" && 
    row[1] === "Tuotteen kuvaus" &&
    row[2] === "Asiakasryhmä" && 
    row[3] === "Kategoria" && 
    row[4] === "Hinta"
  );
  
  if (priceHeaderIndex === -1) {
    return [];
  }
  
  const prices: Price[] = [];
  
  // Extract prices (starting after header)
  for (let i = priceHeaderIndex + 1; i < rows.length; i++) {
    const row = rows[i];
    
    // Stop when we hit an empty row or insufficient columns
    if (!row || row.length < 5 || !row[0] || !row[4]) {
      break;
    }
    
    prices.push({
      name: row[0],
      description: row[1] || "",
      customerGroup: row[2] || "",
      category: row[3] || "",
      price: row[4]
    });
  }
  
  return prices;
}

/**
 * Transforms reservation data from Google Sheets format
 */
function transformReservations(rows: string[][]): Reservation[] {
  // Find start of reservations section
  const reservationHeaderIndex = rows.findIndex(row => 
    row.length >= 3 && row[0] === "Varaaja" && row[1] === "Päivä" && row[2] === "Aloitus"
  );
  
  if (reservationHeaderIndex === -1) {
    return [];
  }
  
  const reservations: Reservation[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to beginning of day for proper comparison
  
  // Extract reservations (starting after header)
  for (let i = reservationHeaderIndex + 1; i < rows.length; i++) {
    const row = rows[i];
    
    // Stop when we hit an empty row or less than 3 columns
    if (!row || row.length < 3 || !row[0] || !row[1] || !row[2]) {
      break;
    }
    
    // Parse date from the Finnish format (expected format: "26.3.2025")
    try {
      const datePart = row[1];
      const timePart = row[2];
      
      // Parse Finnish date format (dd.mm.yyyy)
      const dateMatch = datePart.match(/(\d+)\.(\d+)\.(\d+)/);
      if (!dateMatch) continue;
      
      const day = parseInt(dateMatch[1], 10);
      const month = parseInt(dateMatch[2], 10) - 1; // Month is 0-indexed in JavaScript Date
      const year = parseInt(dateMatch[3], 10);
      
      const reservationDate = new Date(year, month, day);
      
      // Only add future reservations
      if (reservationDate >= today) {
        // Format the time in a more readable format
        const formattedTime = `${datePart} klo ${timePart}`;
        
        reservations.push({
          reserver: row[0],
          time: formattedTime
        });
      }
    } catch (error) {
      console.error('Error parsing reservation date:', error);
      // If date parsing fails, include the reservation anyway
      reservations.push({
        reserver: row[0],
        time: `${row[1]} ${row[2]}`
      });
    }
  }
  
  // Fall back to old format if no reservations were found with the new format
  if (reservations.length === 0) {
    // Try the old format
    const oldFormatHeaderIndex = rows.findIndex(row => 
      row.length >= 2 && row[0] === "Varaaja" && row[1] === "Aika"
    );
    
    if (oldFormatHeaderIndex !== -1) {
      // Process old format
      for (let i = oldFormatHeaderIndex + 1; i < rows.length; i++) {
        const row = rows[i];
        
        // Stop when we hit an empty row or less than 2 columns
        if (!row || row.length < 2 || !row[0] || !row[1]) {
          break;
        }
        
        // Try to parse the date from the old format
        try {
          const dateTimeParts = row[1].split('·');
          if (dateTimeParts.length < 2) continue;
          
          const datePart = dateTimeParts[0].trim();
          const dateMatch = datePart.match(/(\d+)\.\s+(\w+)/);
          if (!dateMatch) continue;
          
          const day = parseInt(dateMatch[1], 10);
          const monthName = dateMatch[2].toLowerCase();
          
          const monthMap: Record<string, number> = {
            'tammikuuta': 0, 'helmikuuta': 1, 'maaliskuuta': 2,
            'huhtikuuta': 3, 'toukokuuta': 4, 'kesäkuuta': 5,
            'heinäkuuta': 6, 'elokuuta': 7, 'syyskuuta': 8,
            'lokakuuta': 9, 'marraskuuta': 10, 'joulukuuta': 11
          };
          
          const month = monthMap[monthName];
          if (month === undefined) continue;
          
          const currentYear = new Date().getFullYear();
          const reservationDate = new Date(currentYear, month, day);
          
          if (reservationDate < today && today.getMonth() < 6 && month > 6) {
            reservationDate.setFullYear(currentYear - 1);
          } else if (reservationDate > today && today.getMonth() > 6 && month < 6) {
            reservationDate.setFullYear(currentYear + 1);
          }
          
          // Only add future reservations
          if (reservationDate >= today) {
            reservations.push({
              reserver: row[0],
              time: row[1]
            });
          }
        } catch (error) {
          console.error('Error parsing old format reservation date:', error);
          // If date parsing fails, include the reservation anyway
          reservations.push({
            reserver: row[0],
            time: row[1]
          });
        }
      }
    }
  }
  
  return reservations;
}

/**
 * Transforms announcements data from Google Sheets format
 */
function transformAnnouncements(rows: string[][]): Announcement[] {
  // Find start of announcements section
  const announcementHeaderIndex = rows.findIndex(row => 
    row.length >= 3 && 
    row[0] === "Tiedotteen Otsikko" && 
    row[1] === "Sisältö" && 
    row[2] === "Voimassa Kunnes"
  );
  
  if (announcementHeaderIndex === -1) {
    return [];
  }
  
  const announcements: Announcement[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to beginning of day for proper comparison
  
  // Extract announcements (starting after header)
  for (let i = announcementHeaderIndex + 1; i < rows.length; i++) {
    const row = rows[i];
    
    // Stop when we hit an empty row or less than 3 columns
    if (!row || row.length < 3 || isEmpty(row[0]) || isEmpty(row[1]) || isEmpty(row[2])) {
      break;
    }
    
    try {
      const title = row[0];
      const content = row[1];
      const validUntilStr = row[2];
      
      // Parse Finnish date format (dd.mm.yyyy)
      const dateMatch = validUntilStr.match(/(\d+)\.(\d+)\.(\d+)/);
      if (!dateMatch) continue;
      
      const day = parseInt(dateMatch[1], 10);
      const month = parseInt(dateMatch[2], 10) - 1; // Month is 0-indexed in JavaScript Date
      const year = parseInt(dateMatch[3], 10);
      
      const validUntil = new Date(year, month, day);
      validUntil.setHours(23, 59, 59, 999); // Set to end of day
      
      // Only add announcements that are still valid
      if (validUntil >= today) {
        announcements.push({
          title,
          content,
          validUntil
        });
      }
    } catch (error) {
      console.error('Error parsing announcement date:', error);
      // Skip invalid announcements
    }
  }
  
  return announcements;
} 