'use client';

import { Info } from 'lucide-react';
import { useDynamicData } from './useDynamicData';

export default function AnnouncementsDisplay() {
  const { data, isLoading, error } = useDynamicData();
  const announcements = data?.announcements || [];

  // Don't render anything if there are no announcements
  if (announcements.length === 0 && !isLoading && !error) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
          Ajankohtaista
        </h2>
        
        {isLoading && (
          <div className="text-center mb-6 text-slate-500">
            <p>Päivitetään tiedotteita...</p>
          </div>
        )}

        {error && (
          <div className="text-center mb-6 text-amber-600">
            <p>{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {announcements.map((announcement, index) => (
            <div
              key={`${announcement.title}-${index}`}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-l-[#379fdc]"
            >
              <div className="flex items-start">
                <Info className="h-5 w-5 text-[#379fdc] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {announcement.title}
                  </h3>
                  <p className="text-slate-600">{announcement.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 