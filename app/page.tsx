import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, MapPin, Mail, Phone, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto py-6 px-4 flex flex-col items-center">
        <div className="w-full max-w-[40%]">
          <Image
            src="/logo-clean.jpg"
            alt="Revolution Fight Logo"
            width={400}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-8 text-lg">
            <li>
              <Link href="#hinnasto" className="text-gray-800 hover:text-[#379fdc] transition-colors">
                Hinnasto
              </Link>
            </li>
            <li>
              <Link href="#harjoitusajat" className="text-gray-800 hover:text-[#379fdc] transition-colors">
                Harjoitusajat
              </Link>
            </li>
            <li>
              <Link href="#yhteystiedot" className="text-gray-800 hover:text-[#379fdc] transition-colors">
                Yhteystiedot
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section - Updated with gradient background instead of solid red */}
        <section className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Tervetuloa Revolution Fight Saloon!</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Tarjoamme laadukasta kamppailulajien opetusta kaikentasoisille harrastajille. Meillä voit harjoitella
              brasilialaista jiu-jitsua, Krav Magaa ja MMA:ta ammattitaitoisten ohjaajien johdolla.
            </p>
          </div>
        </section>

        {/* Hinnasto (Pricing) Section - Using shadcn Card components */}
        <section id="hinnasto" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Hinnasto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Kuukausikortti */}
              <Card className="border-t-4 border-t-red-500">
                <CardHeader>
                  <CardTitle>Kuukausikortti</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-red-500 mb-4">
                    65€<span className="text-base text-gray-600">/kk</span>
                  </p>
                  <p className="text-gray-600">
                    Rajaton määrä harjoituksia kuukauden ajan. Sopii aktiiviselle harjoittelijalle.
                  </p>
                </CardContent>
              </Card>

              {/* 10-kerran kortti */}
              <Card className="border-t-4 border-t-red-500">
                <CardHeader>
                  <CardTitle>10-kerran kortti</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-red-500 mb-4">120€</p>
                  <p className="text-gray-600">Kymmenen harjoituskertaa, voimassa 3 kuukautta ostopäivästä.</p>
                </CardContent>
              </Card>

              {/* Kertamaksu */}
              <Card className="border-t-4 border-t-red-500">
                <CardHeader>
                  <CardTitle>Kertamaksu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-red-500 mb-4">15€</p>
                  <p className="text-gray-600">
                    Yksittäinen harjoituskerta. Sopii tutustujille ja satunnaisille kävijöille.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lajit (Martial Arts Types) Section - Using shadcn Card components */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Lajit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* BJJ */}
              <Card>
                <CardHeader>
                  <CardTitle>Brasilialainen Jiu-jitsu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Brasilialainen jiu-jitsu on kamppailulaji, joka keskittyy maassa kamppailuun ja erilaisiin lukkoihin
                    ja kuristuksiin. Laji sopii kaikenkokoisille harrastajille.
                  </p>
                </CardContent>
              </Card>

              {/* Krav Maga */}
              <Card>
                <CardHeader>
                  <CardTitle>Krav Maga</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Krav Maga on Israelissa kehitetty itsepuolustuslaji, joka keskittyy käytännöllisiin ja tehokkaisiin
                    itsepuolustustekniikoihin todellisia tilanteita varten.
                  </p>
                </CardContent>
              </Card>

              {/* MMA */}
              <Card>
                <CardHeader>
                  <CardTitle>MMA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mixed Martial Arts (MMA) yhdistää eri kamppailulajien tekniikoita kokonaisvaltaiseksi
                    kamppailulajiksi, jossa harjoitellaan sekä pysty- että mattotekniikoita.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Harjoitusajat (Training Schedule) Section - Using shadcn Card components */}
        <section id="harjoitusajat" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Harjoitusajat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Monday */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle>Maanantai</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">17:00 - 18:30</span>
                        <p className="text-gray-600">Brasilialainen Jiu-jitsu (Alkeet)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">18:30 - 20:00</span>
                        <p className="text-gray-600">MMA</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Tuesday */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle>Tiistai</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">17:00 - 18:30</span>
                        <p className="text-gray-600">Krav Maga</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">18:30 - 20:00</span>
                        <p className="text-gray-600">Brasilialainen Jiu-jitsu (Jatkotaso)</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Wednesday */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle>Keskiviikko</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">17:00 - 18:30</span>
                        <p className="text-gray-600">MMA (Alkeet)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">18:30 - 20:00</span>
                        <p className="text-gray-600">Brasilialainen Jiu-jitsu (Avoin harjoitus)</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Thursday */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle>Torstai</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">17:00 - 18:30</span>
                        <p className="text-gray-600">Krav Maga (Alkeet)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">18:30 - 20:00</span>
                        <p className="text-gray-600">MMA (Jatkotaso)</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Friday */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle>Perjantai</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">17:00 - 18:30</span>
                        <p className="text-gray-600">Brasilialainen Jiu-jitsu (Tekniikka)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">18:30 - 20:00</span>
                        <p className="text-gray-600">Avoin harjoitus (kaikki lajit)</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Saturday */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle>Lauantai</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium">12:00 - 14:00</span>
                        <p className="text-gray-600">Avoin harjoitus (kaikki lajit)</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
              Huom! Aikatauluihin voi tulla muutoksia lomakausien ja juhlapyhien aikana. Tarkista ajankohtaiset tiedot
              sosiaalisen median kanavilta.
            </p>
          </div>
        </section>

        {/* Yhteystiedot (Contact) Section - Using shadcn Card components */}
        <section id="yhteystiedot" className="py-16 md:py-24 bg-zinc-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Yhteystiedot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Ota yhteyttä</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Mail className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Sähköposti</p>
                        <a href="mailto:info@revolutionfight.fi" className="text-[#379fdc] hover:underline">
                          info@revolutionfight.fi
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Puhelin</p>
                        <a href="tel:+358401234567" className="text-[#379fdc] hover:underline">
                          040 123 4567
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Osoite</p>
                        <p>Kamppailutie 10</p>
                        <p>00100 Helsinki</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle>Sijainti</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-zinc-100 rounded-lg flex items-center justify-center">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#379fdc] hover:underline flex items-center"
                    >
                      <MapPin className="h-5 w-5 mr-2" />
                      Avaa Google Maps
                    </a>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Salin sisäänkäynti on rakennuksen takana. Parkkipaikkoja on saatavilla rakennuksen edessä.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Revolution Fight. Kaikki oikeudet pidätetään.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/revolutionfightsalo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#379fdc] transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/revolutionfight/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#379fdc] transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@revolutionfight"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#379fdc] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
