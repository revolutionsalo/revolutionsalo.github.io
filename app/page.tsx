import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";
import { getScheduleWithFallback } from "@/lib/api";
import DynamicDataProvider from "./components/DynamicDataProvider";
import ScheduleDisplay from "./components/ScheduleDisplay";
import ReservationsDisplay from "./components/ReservationsDisplay";
import PricesDisplay from "./components/PricesDisplay";
import AnnouncementsDisplay from "./components/AnnouncementsDisplay";

export default async function Home() {
  // Fetch initial data from API with fallback to static data
  // This happens at build time for static site generation
  const { schedule: scheduleData, prices, reservations, announcements } =
    await getScheduleWithFallback();

  return (
    <DynamicDataProvider
      initialData={{
        schedule: scheduleData,
        prices,
        reservations,
        announcements
      }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Salon monipuolisin kamppailuseura
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            REvolution Fight tarjoaa laadukasta kamppailulajien opetusta
            kaikentasoisille harrastajille. Meillä voit harjoitella
            brasilialaista jiu-jitsua, Krav Magaa ja vapaaottelua
            ammattitaitoisten ohjaajien johdolla.
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

      {/* Announcements Section - conditionally rendered by the component */}
      <AnnouncementsDisplay />

      {/* Harjoitusajat (Training Schedule) Section */}
      <section id="harjoitusajat" className="py-16 md:py-24 bg-white">
        <ScheduleDisplay />
        <ReservationsDisplay />
      </section>

      {/* Lajit (Martial Arts Types) Section */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Lajit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* BJJ */}
            <a
              href="https://fi.wikipedia.org/wiki/Brasilialainen_jujutsu"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02]"
            >
              <div className="shadow-md hover:shadow-lg transition-shadow h-full bg-white rounded-lg p-6 border-t-4 border-t-[#379fdc]">
                <h3 className="text-xl font-semibold mb-4 hover:text-[#379fdc] transition-colors">
                  Brasilialainen Jiu-jitsu
                </h3>
                <p className="text-slate-600">
                  Brasilialainen jiu-jitsu on kamppailulaji, joka keskittyy
                  maassa kamppailuun ja erilaisiin lukkoihin ja kuristuksiin.
                  Laji sopii kaikenkokoisille harrastajille.
                </p>
              </div>
            </a>

            {/* Krav Maga */}
            <a
              href="https://fi.wikipedia.org/wiki/Krav_Maga"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02]"
            >
              <div className="shadow-md hover:shadow-lg transition-shadow h-full bg-white rounded-lg p-6 border-t-4 border-t-[#379fdc]">
                <h3 className="text-xl font-semibold mb-4 hover:text-[#379fdc] transition-colors">
                  Krav Maga
                </h3>
                <p className="text-slate-600">
                  Krav Maga on Israelissa kehitetty itsepuolustuslaji, joka
                  keskittyy käytännöllisiin ja tehokkaisiin
                  itsepuolustustekniikoihin todellisia tilanteita varten.
                </p>
              </div>
            </a>

            {/* Vapaaottelu */}
            <a
              href="https://fi.wikipedia.org/wiki/Vapaaottelu"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02]"
            >
              <div className="shadow-md hover:shadow-lg transition-shadow h-full bg-white rounded-lg p-6 border-t-4 border-t-[#379fdc]">
                <h3 className="text-xl font-semibold mb-4 hover:text-[#379fdc] transition-colors">
                  Vapaaottelu
                </h3>
                <p className="text-slate-600">
                  Mixed Martial Arts (MMA), eli suomeksi vapaaottelu, yhdistää
                  eri kamppailulajien tekniikoita kokonaisvaltaiseksi
                  kamppailulajiksi, jossa harjoitellaan sekä pysty- että
                  mattotekniikoita.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Hinnasto (Pricing) Section */}
      <section id="hinnasto" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Hinnasto
          </h2>
          <PricesDisplay />

          {/* Payment information */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-8">
              Maksaminen
            </h3>

            <p className="text-slate-600 mb-4">
              Maksuvälineenä toimii kortti, käteinen, tilisiirto tai
              liikuntasetelit (Smartum, Eazybreak, Edenred, ePassi).

              <span className="font-medium text-[#379fdc]">
                Kaksi ensimmäistä kertaa saa käydä ilmaiseksi kokeilemassa.
              </span>
            </p>

            <p className="text-slate-600 mb-6">
              Ensisijaisena maksuvaihtoehtona suosittelemme tilisiirtoa (Esitä
              kuitti maksusta kassalla).
            </p>

            <div className="bg-slate-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Tilisiirtotiedot:</h4>

              <ul className="space-y-2 text-slate-600">
                <li>
                  <span className="inline-block w-28 font-medium">
                    Tilinumero:
                  </span>{" "}
                  FI8217773000004286

                  <CopyButton
                    text="FI8217773000004286"
                    label="account number"
                  />
                </li>

                <li>
                  <span className="inline-block w-28 font-medium">Saaja:</span>
                  {" "}
                  REvolution fight ry

                  <CopyButton text="REvolution fight ry" label="recipient" />
                </li>

                <li>
                  <span className="inline-block w-28 font-medium">Summa:</span>
                  {" "}
                  hinnaston mukaan
                </li>

                <li>
                  <span className="inline-block w-28 font-medium">Viesti:</span>

                  <span>
                    harrastajan etunimi ja sukunimi ja mitä on maksanut
                  </span>

                  <p className="text-sm italic mt-1 ml-28">
                    (esimerkki: Matti Meikäläinen Junnu maga + bjj kevät 2020)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Yhteystiedot (Contact) Section */}
      <section id="yhteystiedot" className="py-16 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Yhteystiedot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-800">
                Ota yhteyttä
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-[#379fdc] mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Sähköposti</p>
                    <a
                      href="mailto:revolutionsalo@gmail.com"
                      className="text-[#379fdc] hover:underline"
                    >
                      revolutionsalo@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-[#379fdc] mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Puhelin</p>
                    <p className="text-slate-600">Joni Heinonen</p>
                    <a
                      href="tel:+358400757377"
                      className="text-[#379fdc] hover:underline"
                    >
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
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-800">
                Sijainti
              </h3>
              <div className="aspect-video bg-slate-50 rounded flex items-center justify-center border border-slate-200">
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
            </div>
          </div>
        </div>
      </section>
    </DynamicDataProvider>
  );
}
