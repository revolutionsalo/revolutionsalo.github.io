export default function KalenteriPage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Kesäkausi 2025 */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">Kesäkausi 2025</h3>
          <p className="text-gray-600 mb-6">30.6. - 18.8.2025, tauko 30.6.-3.8.2025</p>
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
                  <td className="border border-gray-300 px-2 py-2 md:px-4 md:py-3 font-medium bg-gray-50 text-[8px] md:text-sm">18:00 - 19:30</td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-green-50">
                    <div className="font-semibold text-[8px] md:text-sm">Krav Maga</div>
                    <div className="text-[8px] md:text-sm text-gray-600">18:00-19:30</div>
                    <div className="text-[8px] text-gray-500">(3.8.-18.8.)</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-blue-50">
                    <div className="font-semibold text-[8px] md:text-sm">BJJ</div>
                    <div className="text-[8px] md:text-sm text-gray-600">18:00-19:30</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-red-50">
                    <div className="font-semibold text-[8px] md:text-sm">Vapaaottelu</div>
                    <div className="text-[8px] md:text-sm text-gray-600">18:00-19:30</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Syyskausi 2025 */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-600">Syyskausi 2025</h3>
          <p className="text-gray-600 mb-6">18.8. - 19.12.2025</p>
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
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-cyan-50">
                    <div className="font-semibold text-[8px] md:text-sm">Junnu BJJ 8 - 15V</div>
                    <div className="text-[8px] md:text-sm text-gray-600">17:00-18:00</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
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
                    <div className="text-[8px] md:text-xs text-gray-500 mt-1">1.9.-17.10.</div>
                    <div className="text-[8px] md:text-xs text-gray-400">vko 36-42</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-green-50">
                    <div className="font-semibold text-[8px] md:text-sm">Krav Maga Peruskurssi</div>
                    <div className="text-[8px] md:text-sm text-gray-600">19:30-20:30</div>
                    <div className="text-[8px] md:text-xs text-gray-500 mt-1">2.9.-11.11.</div>
                    <div className="text-[8px] md:text-xs text-gray-400">vko 36-46</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-yellow-50">
                    <div className="font-semibold text-[8px] md:text-sm">Kunto potkunyrkkeily</div>
                    <div className="text-[8px] md:text-sm text-gray-600">19:30-20:30</div>
                  </td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3"></td>
                  <td className="border border-gray-300 px-1 py-2 md:px-4 md:py-3 bg-purple-50">
                    <div className="font-semibold text-[8px] md:text-sm">BJJ & MMA Peruskurssi</div>
                    <div className="text-[8px] md:text-sm text-gray-600">19:30-20:30</div>
                    <div className="text-[8px] md:text-xs text-gray-500 mt-1">1.9.-17.10.</div>
                    <div className="text-[8px] md:text-xs text-gray-400">vko 36-42</div>
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
        </div>
      </div>
    </section>
  )
}