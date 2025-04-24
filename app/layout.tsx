import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Revolution Fight",
  description: "Revolution Fight - Kamppailulajeja Salossa",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi" className="light">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="container mx-auto py-6 px-4 flex flex-col items-center">
            <div className="w-full sm:max-w-[40%] max-w-[80%]">
              <Link href="/">
                <Image
                  src="/logo-clean.jpg"
                  alt="Revolution Fight Logo"
                  width={400}
                  height={200}
                  className="w-full h-auto"
                  priority
                />
              </Link>
            </div>
            <nav className="mt-6 w-full">
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg">
                <li>
                  <Link href="/#harjoitusajat" className="text-slate-800 hover:text-[#379fdc] transition-colors font-medium">
                    Harjoitusajat
                  </Link>
                </li>
                <li>
                  <Link href="/junnutoiminta" className="text-slate-800 hover:text-[#379fdc] transition-colors font-medium">
                    Junnutoiminta
                  </Link>
                </li>
                <li>
                  <Link href="/#hinnasto" className="text-slate-800 hover:text-[#379fdc] transition-colors font-medium">
                    Hinnasto
                  </Link>
                </li>
                <li>
                  <Link href="/kertamaksut" className="text-slate-800 hover:text-[#379fdc] transition-colors font-medium">
                    Kertamaksut
                  </Link>
                </li>
                <li>
                  <Link href="/#yhteystiedot" className="text-slate-800 hover:text-[#379fdc] transition-colors font-medium">
                    Yhteystiedot
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="bg-slate-900 text-white py-8">
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
      </body>
    </html>
  )
}
