'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';
import { fetchScheduleData } from '@/lib/clientApi';

// Define types
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
  validUntil: string | Date;
}

interface DynamicData {
  schedule: ScheduleDay[];
  prices: Price[];
  reservations: Reservation[];
  announcements: Announcement[];
}

interface DataContextType {
  data: DynamicData;
  isLoading: boolean;
  error: string | null;
}

// Create context for the data
export const DataContext = createContext<DataContextType>({
  data: {
    schedule: [],
    prices: [],
    reservations: [],
    announcements: []
  },
  isLoading: false,
  error: null
});

interface DynamicDataProviderProps {
  initialData: {
    schedule: ScheduleDay[];
    prices: Price[];
    reservations: Reservation[];
    announcements: Announcement[];
  };
  children: ReactNode;
}

// This component doesn't render UI, it just provides data to its children
export default function DynamicDataProvider({ initialData, children }: DynamicDataProviderProps) {
  // Initialize with initialData but with empty reservations and announcements
  const [data, setData] = useState<DynamicData>({
    ...initialData,
    reservations: [],
    announcements: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch fresh data on component mount
  useEffect(() => {
    const fetchFreshData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const freshData = await fetchScheduleData();
        setData(freshData);
      } catch (err) {
        console.error('Error fetching dynamic data:', err);
        
        // For schedule and prices, fallback to initial data
        // For reservations and announcements, keep empty arrays
        setData({
          schedule: initialData.schedule,
          prices: initialData.prices,
          reservations: [],
          announcements: []
        });
        
        // Don't show error message for schedule/prices since we use fallback
        setError(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFreshData();
  }, [initialData]);

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
} 