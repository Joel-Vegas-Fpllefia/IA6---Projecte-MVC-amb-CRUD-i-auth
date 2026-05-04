import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans italic-none">
        <nav className="fixed top-0 w-full z-50 mix-blend-difference py-8 px-10 flex justify-between items-center text-white">
          <Link
            href="/"
            className="text-xl font-medium tracking-tighter uppercase"
          >
            Duna<span className="font-light opacity-50">Camper</span>
          </Link>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium">
            <Link
              href="#modelos"
              className="hover:opacity-50 transition-opacity"
            >
              Flota
            </Link>
            <Link
              href="/contacto"
              className="hover:opacity-50 transition-opacity"
            >
              Contacto
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
