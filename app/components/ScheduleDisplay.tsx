'use client';

import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDynamicData } from './useDynamicData';
import Link from 'next/link';

export default function ScheduleDisplay() {
  const { data, isLoading, error } = useDynamicData();
  const schedule = data?.schedule || [];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Harjoitusajat
      </h2>

      {isLoading && (
        <div className="text-center mb-6 text-slate-500">
          <p>Päivitetään aikatauluja...</p>
        </div>
      )}

      {error && (
        <div className="text-center mb-6 text-amber-600">
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {schedule.map((day, index) => (
          <Card
            key={`${day.day}-${index}`}
            className="border-l-4 border-l-[#379fdc] shadow-md"
          >
            <CardHeader>
              <CardTitle>{day.day}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {day.classes.map((classItem, classIndex) => (
                  <li key={`${classItem.name}-${classIndex}`} className="flex items-start">
                    <Clock className="h-5 w-5 text-[#379fdc] mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">{classItem.time}</span>
                      <p className="text-slate-600">{classItem.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-center mt-8 text-slate-600 max-w-2xl mx-auto">
        Huom! Aikatauluihin voi tulla muutoksia lomakausien ja juhlapyhien
        aikana. Tarkista ajankohtaiset tiedot sosiaalisen median kanavilta.
        Tulevat aikataulut löytyvät <Link className="text-blue-500" href="/kalenteri">kalenterinäkymästä</Link>.
      </p>
    </div>
  );
} 