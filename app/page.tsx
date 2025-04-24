import { Clock, MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CopyButton } from "@/components/ui/copy-button"
import scheduleData from "./schedule.json"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Salon monipuolisin kamppailuseura</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          REvolution Fight tarjoaa laadukasta kamppailulajien opetusta kaikentasoisille harrastajille. Meillä voit harjoitella
            brasilialaista jiu-jitsua, Krav Magaa ja vapaaottelua ammattitaitoisten ohjaajien johdolla.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/revolutionfightsalo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#379fdc] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/revolutionfight/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#379fdc] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
              href="https://www.tiktok.com/@revolutionfight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#379fdc] transition-colors"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a
              href="mailto:revolutionsalo@gmail.com"
              className="text-white hover:text-[#379fdc] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Harjoitusajat (Training Schedule) Section */}
      <section id="harjoitusajat" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Harjoitusajat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {scheduleData.map((day, index) => (
              <Card key={index} className="border-l-4 border-l-[#379fdc] shadow-md">
                <CardHeader>
                  <CardTitle>{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {day.classes.map((classItem, classIndex) => (
                      <li key={classIndex} className="flex items-start">
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
            Huom! Aikatauluihin voi tulla muutoksia lomakausien ja juhlapyhien aikana. Tarkista ajankohtaiset tiedot
            sosiaalisen median kanavilta.
          </p>
        </div>
      </section>

      {/* Lajit (Martial Arts Types) Section */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Lajit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* BJJ */}
            <a 
              href="https://fi.wikipedia.org/wiki/Brasilialainen_jujutsu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="hover:text-[#379fdc] transition-colors">
                    Brasilialainen Jiu-jitsu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Brasilialainen jiu-jitsu on kamppailulaji, joka keskittyy maassa kamppailuun ja erilaisiin lukkoihin
                    ja kuristuksiin. Laji sopii kaikenkokoisille harrastajille.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Krav Maga */}
            <a 
              href="https://fi.wikipedia.org/wiki/Krav_Maga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="hover:text-[#379fdc] transition-colors">
                    Krav Maga
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Krav Maga on Israelissa kehitetty itsepuolustuslaji, joka keskittyy käytännöllisiin ja tehokkaisiin
                    itsepuolustustekniikoihin todellisia tilanteita varten.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Vapaaottelu */}
            <a 
              href="https://fi.wikipedia.org/wiki/Vapaaottelu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="hover:text-[#379fdc] transition-colors">
                    Vapaaottelu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Mixed Martial Arts (MMA), eli suomeksi vapaaottelu, yhdistää eri kamppailulajien tekniikoita 
                    kokonaisvaltaiseksi kamppailulajiksi, jossa harjoitellaan sekä pysty- että mattotekniikoita.
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Hinnasto (Pricing) Section */}
      <section id="hinnasto" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Hinnasto</h2>
          
          {/* Adult pricing */}
          <h3 className="text-xl font-semibold text-center mb-8">Harjoitusmaksut, Aikuiset</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Kertamaksu & 10-kortti */}
            <Card className="border-t-4 border-t-[#379fdc] shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Kertakäynnit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-[#379fdc] mb-1">9€</p>
                    <p className="text-slate-600 font-medium">Kertamaksu</p>
                    <p className="text-slate-600 text-sm">Yksittäinen harjoituskerta</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-2xl font-bold text-[#379fdc] mb-1">85€</p>
                    <p className="text-slate-600 font-medium">10-kortti</p>
                    <p className="text-slate-600 text-sm">Kymmenen harjoituskertaa, voimassa 3 kuukautta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kausikortit */}
            <Card className="border-t-4 border-t-[#379fdc] shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Kausikortti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-[#379fdc] mb-1">190€</p>
                    <p className="text-slate-600 font-medium">1 laji - kausi</p>
                    <p className="text-slate-600 text-sm">Yhden lajin harjoitukset koko kauden ajan (kevät/syksy)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kaikki lajit */}
            <Card className="border-t-4 border-t-[#379fdc] shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Kaikki lajit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-[#379fdc] mb-1">290€</p>
                    <p className="text-slate-600 font-medium">6 kuukautta</p>
                    <p className="text-slate-600 text-sm">Kaikki harjoitukset 6 kuukauden ajan</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-2xl font-bold text-[#379fdc] mb-1">490€</p>
                    <p className="text-slate-600 font-medium">12 kuukautta</p>
                    <p className="text-slate-600 text-sm">Kaikki harjoitukset koko vuoden ajan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Junior pricing */}
          <h3 className="text-xl font-semibold text-center mb-8">Lapset ja Nuoret</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto mb-16">
            {/* Junior BJJ */}
            <Card className="border-t-4 border-t-[#379fdc] shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Junnu BJJ (8-15v)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-[#379fdc] mb-4">150€</p>
                <p className="text-slate-600">
                  Treenit 2x viikossa, koko kauden ajan (kevät/syksy)
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <Link href="/junnutoiminta" className="text-[#379fdc] hover:underline flex items-center">
                    Lue lisää junnutoiminnasta →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center mt-8 mb-16 text-slate-600 max-w-2xl mx-auto">
            Hinnat ovat kausimaksuja (kevät/syksy). Kysy lisätietoja ajankohtaisista tarjouksista paikan päältä.
          </p>
          
          {/* Payment information */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-8">Maksaminen</h3>
            <p className="text-slate-600 mb-4">
              Maksuvälineenä toimii kortti, käteinen, tilisiirto tai liikuntasetelit (Smartum, Eazybreak, Edenred, ePassi). 
              <span className="font-medium text-[#379fdc]"> Kaksi ensimmäistä kertaa saa käydä ilmaiseksi kokeilemassa.</span>
            </p>
            <p className="text-slate-600 mb-6">
              Ensisijaisena maksuvaihtoehtona suosittelemme tilisiirtoa (Esitä kuitti maksusta kassalla).
            </p>
            
            <div className="bg-slate-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Tilisiirtotiedot:</h4>
              <ul className="space-y-2 text-slate-600">
                <li><span className="inline-block w-28 font-medium">Tilinumero:</span> FI8217773000004286
                  <CopyButton text="FI8217773000004286" label="account number" />
                </li>
                <li><span className="inline-block w-28 font-medium">Saaja:</span> REvolution fight ry
                  <CopyButton text="REvolution fight ry" label="recipient" />
                </li>
                <li><span className="inline-block w-28 font-medium">Summa:</span> hinnaston mukaan</li>
                <li>
                  <span className="inline-block w-28 font-medium">Viesti:</span> 
                  <span>harrastajan etunimi ja sukunimi ja mitä on maksanut</span>
                  <p className="text-sm italic mt-1 ml-28">(esimerkki: Matti Meikäläinen Junnu maga + bjj kevät 2020)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Yhteystiedot (Contact) Section */}
      <section id="yhteystiedot" className="py-16 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Yhteystiedot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <Card className="shadow-md">
              <CardHeader className="border-b border-[#379fdc]/20">
                <CardTitle>Ota yhteyttä</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-[#379fdc] mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Sähköposti</p>
                      <a href="mailto:revolutionsalo@gmail.com" className="text-[#379fdc] hover:underline">
                        revolutionsalo@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-[#379fdc] mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Puhelin</p>
                      <p className="text-slate-600">Joni Heinonen</p>
                      <a href="tel:+358400757377" className="text-[#379fdc] hover:underline">
                        0400 757 377
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#379fdc] mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Osoite</p>
                      <p className="text-slate-600">Helsingintie 22</p>
                      <p className="text-slate-600">24100 Salo</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-md">
              <CardHeader className="border-b border-[#379fdc]/20">
                <CardTitle>Sijainti</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border border-[#379fdc]/10">
                  <a
                    href="https://maps.google.com/?q=Helsingintie+22,+24100+Salo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#379fdc] hover:underline flex items-center"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Avaa Google Maps
                  </a>
                </div>
                <p className="mt-4 text-slate-600">
                  Sisäänkäynti on rakennuksen takapuolella.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
