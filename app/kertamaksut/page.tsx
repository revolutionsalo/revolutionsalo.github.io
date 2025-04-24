import Image from "next/image"

export default function KertamaksutPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Kertamaksut</h1>
        
        <div className="max-w-md mx-auto text-center">
          <p className="text-slate-600 mb-8">
            Voit maksaa kertamaksun kätevästi MobilePay-sovelluksella skannaamalla alla olevan QR-koodin.
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-md inline-block">
            <Image 
              src="/mobilepay.jpg" 
              alt="MobilePay QR-koodi"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          
          <p className="mt-8 text-slate-600">
            Kertamaksu: <span className="font-semibold text-[#379fdc]">9€</span>
          </p>
          <p className="mt-2 text-slate-600">
            Ota kuitti tai kuvakaappaus maksusta ja näytä se kassalla.
          </p>
        </div>
      </div>
    </div>
  )
}
