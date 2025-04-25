'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDynamicData } from './useDynamicData';

export default function PricesDisplay() {
  const { data, isLoading, error } = useDynamicData();
  const prices = data?.prices || [];

  // Group prices by customer group and category
  const renderPriceCards = () => {
    if (prices.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-slate-600 text-lg">
            Hinnasto ei tällä hetkellä saatavilla. Tarkista hinnat suoraan salilta.
          </p>
        </div>
      );
    }

    // Get unique customer groups
    const customerGroups = [...new Set(prices.map(price => price.customerGroup))];
    
    return customerGroups.map(group => {
      // Get unique categories for this customer group
      const categories = [...new Set(
        prices
          .filter(price => price.customerGroup === group)
          .map(price => price.category)
      )];
      
      return (
        <div key={group} className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <h3 className="text-xl font-semibold text-center">
              {group}
            </h3>
            {group === "Lapset ja Nuoret" && (
              <Link 
                href="/junnutoiminta" 
                className="text-[#379fdc] hover:underline ml-4 flex items-center text-sm"
              >
                Lue lisää junnutoiminnasta →
              </Link>
            )}
          </div>
          
          {/* Use flex for better centering of cards */}
          <div className={`flex flex-wrap gap-8 max-w-5xl mx-auto ${categories.length === 1 ? 'justify-center' : 'justify-between'}`}>
            {categories.map(category => {
              const categoryPrices = prices.filter(
                price => price.customerGroup === group && price.category === category
              );
              
              return (
                <Card 
                  key={category} 
                  className="border-t-4 border-t-[#379fdc] shadow-md hover:shadow-lg transition-shadow flex-grow md:flex-grow-0 md:w-[30%]"
                >
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {categoryPrices.map((price, index) => (
                        <div 
                          key={index} 
                          className={index > 0 ? "pt-2 border-t border-slate-200" : ""}
                        >
                          <p className="text-2xl font-bold text-[#379fdc] mb-1">
                            {price.price}
                          </p>
                          <p className="text-slate-600 font-medium">
                            {price.name}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {price.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {isLoading && (
        <div className="text-center mb-6 text-slate-500">
          <p>Päivitetään hintatietoja...</p>
        </div>
      )}

      {error && (
        <div className="text-center mb-6 text-amber-600">
          <p>{error}</p>
        </div>
      )}

      {renderPriceCards()}

      <p className="text-center mt-8 mb-16 text-slate-600 max-w-2xl mx-auto">
        Hinnat ovat kausimaksuja (kevät/syksy). Kysy lisätietoja
        ajankohtaisista tarjouksista paikan päältä.
      </p>
    </>
  );
} 