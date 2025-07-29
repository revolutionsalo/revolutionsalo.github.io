import { Mail } from "lucide-react"
import { CopyButton } from "@/components/ui/copy-button"

export default function JunnutoimintaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Revolution tarjoaa 7-15 vuotiaille junioireille monipuolista liikuntaa kamppailulajien parissa</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Lasten ja Nuorten BJJ (7-15 vuotiaat)</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Lajikuvaus</h3>
              <p className="text-slate-600 mb-4">
                Junnu BJJ eli Brasilialainen Jujutsu on tehokas mattokamppailuun keskittyvä kamppailulaji. BJJ:n parissa nuori oppii puolustamaan itseään, saa hyvän fyysisen kunnon ja tutustuu uusiin kavereihin. Brasilian jujutsussa kamppailu pyritään viemään maahan ja päättämään se lukolla. Oikeiden tekniikoiden ja yhdistelmien käyttäminen sekä nopeiden ratkaisujen tekeminen oikeaan aikaan ja oikeassa tilanteessa vaativat mielen ja kehon saumatonta yhteistyötä.
              </p>
              <p className="text-slate-600 mb-4">
                Hyvät käytöstavat, toisten huomioon ottaminen ja kunnioittaminen ovat olennainen osa Junnu BJJ:tä. Kurinalainen ja säännöllinen harjoittelu parantavat lasten ja nuorten keskittymiskykyä, itseluottamusta ja motorisia taitoja.
              </p>
              <p className="text-slate-600">
                Harjoituksissa nuoret pääsevät mittelöimään painin keinoin tekniikasta, voimasta ja taidosta turvallisessa ympäristössä, valvovan silmän alla.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Harjoitusvarusteet</h3>
              <p className="text-slate-600">
                Alkuun pääsee veryttelyhousuilla/shortseilla ja t-paidalla. Pikapuolin tulee kuitenkin hankittavaksi jujutsu-puku (gi).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Harjoituskortti</h3>
              <p className="text-slate-600">
                Jokaiselle harrastajalle jaetaan ensimmäisen harjoituksen yhteydessä harjoituskortti. Harjoituskortin tarkoituksena on seurata oppilaiden harjoitusmääriä. Harjoitusmäärä ja kehittyminen vaikuttavat natsojen / seuraavan vyöarvon saamiseen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Ohjaajat</h3>
              <p className="text-slate-600">
                Vastuuohjaajina toimivat Joni Heinonen, Jani Tuomela, Marko Tuomola ja Saku Heikurinen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Vakuutus</h3>
              <p className="text-slate-600">
                Jokainen harjoittelija vastaa itse harjoituksissa mahdollisesti sattuvista vahingoista ja tapaturmista. Harjoitusmaksuun ei sisälly vakuutusta. Jos lapsellanne on jokin vakuutus, niin suosittelen vakuutusturvan tarkastamista, että se kattaa varmasti krav magan harjoittelun.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Vanhemmat</h3>
              <p className="text-slate-600">
                Vanhempien toivotaan odottavan harjoitustilan ulkopuolella, jotta he eivät häiritse lastensa keskittymistä.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Myöhästyminen, poissaolot</h3>
              <p className="text-slate-600">
                Saapuessanne myöhässä harjoituksiin, harjoittelijan tulee odottaa harjoitusalueen reunalla ohjaajan lupaa liittyä mukaan. Poissaoloista, sairastumisista ym. ei tarvitse ilmoittaa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Valokuvaus</h3>
              <p className="text-slate-600">
                Harjoituksissa on tarkoitus ottaa valokuvia, joita käytetään tulevien kurssien mainontaan ja seuran nettisivuilla. Ilmoitathan erikseen jos lastasi ei saa näkyä kuvissa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Sosiaalitilat</h3>
              <p className="text-slate-600">
                Pukuhuoneet, vessat ja suihkut löytyvät harjoittelutilan kanssa samasta kerroksesta. Näytetään erikseen ensimmäisten treenien yhteydessä.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Tiedottaminen ja viestintä</h3>
              <p className="text-slate-600 mb-4">
                Vanhempia tullaan tiedottamaan harjoituksiin liittyvistä asioista pääsääntöisesti sähköpostitse. Toivomme avointa kommunikointia vanhempien kanssa, eli ottakaa rohkeasti yhteyttä, jos jokin askarruttaa mieltänne (sähköpostitse, puhelimitse tai sitten nykäisette ohjaajaa hihasta).
              </p>
              <p className="text-slate-600">
                Kuulisimme myös mieluusti palautetta harjoituksista, jotta pystymme kehittämään toimintaamme. Eli jos lapsenne kertoo kotona pitäneensä erityisesti jostakin tai jos jokin oli sellaista josta hän ei pitänyt niin otamme mieluusti tämän palautteen vastaan.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-semibold mb-3">Ota yhteyttä</h3>
              <p className="text-slate-600 mb-4">
                Jos sinulla on kysyttävää junnutoiminnasta, otathan yhteyttä sähköpostitse:
              </p>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#379fdc] mr-3" />
                <a href="mailto:revolutionsalo@gmail.com" className="text-[#379fdc] hover:underline">
                  revolutionsalo@gmail.com
                  <CopyButton text="revolutionsalo@gmail.com" label="email" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 