/**
 * Client-side API services for fetching data
 */
import { transformGoogleSheetsData } from './scheduleUtils';

/**
 * URL for the Cloudflare Worker that fetches Google Sheets data
 */
const SHEETS_API_URL = 'https://google-sheets-worker.tapio123.workers.dev/';

/**
 * Fetches schedule, prices, and reservations data from Google Sheets via Cloudflare Worker
 * This is a client-side version of the API call
 */
export async function fetchScheduleData() {
  try {
    const response = await fetch(SHEETS_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Don't cache this request to always get fresh data
      cache: 'no-store',
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