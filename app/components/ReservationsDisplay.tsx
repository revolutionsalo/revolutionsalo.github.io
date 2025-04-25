'use client';

import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDynamicData } from './useDynamicData';

export default function ReservationsDisplay() {
  const { data, isLoading, error } = useDynamicData();
  const reservations = data?.reservations || [];

  // Don't render anything if there are no reservations
  if (reservations.length === 0 && !isLoading && !error) {
    return null;
  }

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <h3 className="text-xl font-semibold text-center mb-6">
        Salin varaukset
      </h3>
      
      {isLoading && (
        <div className="text-center mb-6 text-slate-500">
          <p>Päivitetään varauksia...</p>
        </div>
      )}

      {error && (
        <div className="text-center mb-6 text-amber-600">
          <p>{error}</p>
        </div>
      )}
      
      <Card className="border-l-4 border-l-[#f59e0b] shadow-md">
        <CardHeader>
          <CardTitle>Tulevat varaukset</CardTitle>
        </CardHeader>
        <CardContent>
          {reservations.length > 0 ? (
            <ul className="space-y-2">
              {reservations.map((reservation, index) => (
                <li key={`${reservation.reserver}-${index}`} className="flex items-start">
                  <Clock className="h-5 w-5 text-[#f59e0b] mr-2 mt-0.5" />
                  <div>
                    <span className="font-medium">
                      {reservation.reserver}
                    </span>
                    <p className="text-slate-600">{reservation.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-600 text-center py-4">
              Ei tulevia varauksia tällä hetkellä.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 