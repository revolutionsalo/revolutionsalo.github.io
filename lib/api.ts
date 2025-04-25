/**
 * API services for fetching data
 */
import { transformGoogleSheetsData } from './scheduleUtils';

/**
 * URL for the Cloudflare Worker that fetches Google Sheets data
 */
const SHEETS_API_URL = 'https://google-sheets-worker.tapio123.workers.dev/';

/**
 * Fetches schedule, prices, and reservations data from Google Sheets via Cloudflare Worker
 */
export async function fetchScheduleData() {
  try {
    const response = await fetch(SHEETS_API_URL, {
      cache: 'no-store', // Don't cache this request to always get fresh data
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch schedule data: ${response.status}`);
    }
    
    const data = await response.json();
    return transformGoogleSheetsData(data);
  } catch (error) {
    console.error('Error fetching schedule data:', error);
    throw error;
  }
}

/**
 * Helper function to get a fallback data (use the static JSON if API fails)
 */
export async function getScheduleWithFallback() {
  try {
    return await fetchScheduleData();
  } catch (error) {
    console.error('Falling back to static schedule data:', error);
    
    // Dynamically import the static JSON file as fallback
    const staticSchedule = (await import('../app/schedule.json')).default;
    
    return {
      schedule: staticSchedule,
      prices: [],
      reservations: [],
      announcements: []
    };
  }
} 