export default function KalenteriPage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Kevätkausi 2026 */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-600">Kevätkausi 2026</h3>
          <p className="text-gray-600 mb-6">12.1. - 29.05.2026</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 table-fixed">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-2 md:px-4 md:py-3 text-left font-semibold w-16 md:w-24 text-[8px] md:text-sm">Aika</th>
                  <th className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 text-left font-semibold text-[8px] md:text-sm">Maanantai</th>
                  <th className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 text-left font-semibold text-[8px] md:text-sm">Tiistai</th>
                  <th className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 text-left font-semibold text-[8px] md:text-sm">Keskiviikko</th>
                  <th className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 text-left font-semibold text-[8px] md:text-sm">Torstai</th>
                  <th className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 text-left font-semibold text-[8px] md:text-sm">Perjantai</th>
                  <th className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 text-left font-semibold text-[8px] md:text-sm">Lauantai</th>
                  <th className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 text-left font-semibold text-[8px] md:text-sm">Sunnuntai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-3 font-medium bg-gray-50 text-[8px] md:text-sm">09:00 - 10:00</td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-blue-50">
                    <div className="font-semibold text-[8px] md:text-sm">BJJ / Lukkopaini</div>
                    <div className="text-[8px] md:text-sm text-gray-600">09:00-10:00</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-3 font-medium bg-gray-50 text-[8px] md:text-sm">15:00 - 16:00</td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-3 font-medium bg-gray-50 text-[8px] md:text-sm">16:00 - 17:00</td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-3 font-medium bg-gray-50 text-[8px] md:text-sm">17:00 - 18:00</td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-cyan-50">
                    <div className="font-semibold text-[8px] md:text-sm">Junnu BJJ 8 - 15V</div>
                    <div className="text-[8px] md:text-sm text-gray-600">17:00-18:00</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-cyan-50">
                    <div className="font-semibold text-[8px] md:text-sm">Junnu BJJ 8 - 15V</div>
                    <div className="text-[8px] md:text-sm text-gray-600">17:00-18:00</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-3 font-medium bg-gray-50 text-[8px] md:text-sm">18:00 - 19:30</td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-red-50">
                    <div className="font-semibold text-[8px] md:text-sm">Vapaaottelu / Lukkopaini</div>
                    <div className="text-[8px] md:text-sm text-gray-600">18:00-19:30</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-green-50">
                    <div className="font-semibold text-[8px] md:text-sm">Krav Maga</div>
                    <div className="text-[8px] md:text-sm text-gray-600">18:00-19:30</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-blue-50">
                    <div className="font-semibold text-[8px] md:text-sm">BJJ</div>
                    <div className="text-[8px] md:text-sm text-gray-600">18:00-19:30</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-red-50">
                    <div className="font-semibold text-[8px] md:text-sm">Vapaaottelu</div>
                    <div className="text-[8px] md:text-sm text-gray-600">18:00-19:30</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-blue-50">
                    <div className="font-semibold text-[8px] md:text-sm">BJJ</div>
                    <div className="text-[8px] md:text-sm text-gray-600">18:00-19:30</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-3 font-medium bg-gray-50 text-[8px] md:text-sm">19:30 - 20:30</td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-purple-50">
                    <div className="font-semibold text-[8px] md:text-sm">BJJ & MMA Peruskurssi</div>
                    <div className="text-[8px] md:text-sm text-gray-600">19:30-20:30</div>
                    <div className="text-[8px] md:text-xs text-gray-500 mt-1">12.1.-27.2.</div>
                    <div className="text-[8px] md:text-xs text-gray-400">vko 3-9</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-green-50">
                    <div className="font-semibold text-[8px] md:text-sm">Krav Maga Peruskurssi</div>
                    <div className="text-[8px] md:text-sm text-gray-600">19:30-20:30</div>
                    <div className="text-[8px] md:text-xs text-gray-500 mt-1">17.1.-24.3.</div>
                    <div className="text-[8px] md:text-xs text-gray-400">vko 4-13</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-yellow-50">
                    <div className="font-semibold text-[8px] md:text-sm">Kunto potkunyrkkeily</div>
                    <div className="text-[8px] md:text-sm text-gray-600">19:30-20:30</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-purple-50">
                    <div className="font-semibold text-[8px] md:text-sm">BJJ & MMA Peruskurssi</div>
                    <div className="text-[8px] md:text-sm text-gray-600">19:30-20:30</div>
                    <div className="text-[8px] md:text-xs text-gray-500 mt-1">12.1.-27.2.</div>
                    <div className="text-[8px] md:text-xs text-gray-400">vko 3-9</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-3 font-medium bg-gray-50 text-[8px] md:text-sm">20:00 - 21:00</td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h4 className="font-semibold text-sm md:text-base mb-2">BJJ & MMA Peruskurssi</h4>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                Peruskurssi järjestetään 12.1.-27.2. maanantaisin ja perjantaisin klo 19:30-20:30.
              </p>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                Hinta 80€ (hyvitetään kausimaksusta).
              </p>
              <p className="text-xs md:text-sm text-gray-700">
                Ilmoittautuminen: <a href="mailto:revolutionsalo@gmail.com" className="text-blue-600 hover:underline">revolutionsalo@gmail.com</a>
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h4 className="font-semibold text-sm md:text-base mb-2">Krav Maga Peruskurssi</h4>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                Peruskurssi järjestetään 17.1.-24.3. tiistaisin klo 19:30-20:30. Ensimmäinen harjoituskerta on lauantaina 17.1. klo 12:00.
              </p>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                Hinta 80€ (hyvitetään kausimaksusta).
              </p>
              <p className="text-xs md:text-sm text-gray-700">
                Ilmoittautuminen: <a href="mailto:revolutionsalo@gmail.com" className="text-blue-600 hover:underline">revolutionsalo@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}