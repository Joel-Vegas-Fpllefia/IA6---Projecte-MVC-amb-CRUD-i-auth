// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Duna Camper | Alquiler de furgonetas",
  description: "Encuentra la camper de tus sueños para tu próxima aventura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased bg-slate-50 text-slate-900">
        <nav className="border-b bg-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="text-2xl font-bold text-orange-600">
              Duna Camper
            </span>
            <div className="space-x-6 font-medium">
              <a href="/" className="hover:text-orange-600">
                Inicio
              </a>
              <a href="#modelos" className="hover:text-orange-600">
                Modelos
              </a>
              <a href="#contacto" className="hover:text-orange-600">
                Contacto
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
