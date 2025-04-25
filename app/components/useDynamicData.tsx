'use client';

import { useContext } from 'react';
import { DataContext } from './DynamicDataProvider';

// Custom hook to use the dynamic data
export function useDynamicData() {
  const context = useContext(DataContext);
  
  if (!context) {
    throw new Error('useDynamicData must be used within a DynamicDataProvider');
  }
  
  return context;
} 