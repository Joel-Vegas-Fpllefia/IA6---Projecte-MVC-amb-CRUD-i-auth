import { getAllCampers } from "../lib/camperService";
import Link from "next/link";
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const fetchCache = 'force-no-store'; // Añade esto también
export default async function HomePage() {
  const campers = await getAllCampers();

  return (
    <main>
      {/* HERO: Impacto visual puro */}
      <section className="h-screen relative flex items-center justify-center bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img
            src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Hero"
          />
        </div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-[12vw] font-light leading-none tracking-tighter mb-8">
            NOMAD<span className="italic font-serif">spirit</span>
          </h1>
          <p className="text-sm uppercase tracking-[0.5em] opacity-80">
            Explora sin dejar rastro
          </p>
        </div>
      </section>

      {/* CATÁLOGO: Grid Limpio */}
      <section id="modelos" className="max-w-[1400px] mx-auto py-32 px-10">
        <header className="mb-24 flex justify-between items-end">
          <h2 className="text-4xl font-light tracking-tight">
            Nuestra Selección
          </h2>
          <span className="text-[10px] uppercase tracking-widest opacity-40 italic">
            Scroll para descubrir —
          </span>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {campers.map((camper) => (
            <Link
              href={`/modelos/${camper.id}`}
              key={camper.id}
              className="group"
            >
              <div className="overflow-hidden bg-[#f5f5f7] aspect-[4/5] relative">
                <img
                  src={camper.imageUrl}
                  alt={camper.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver detalle
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-light tracking-tight">
                    {camper.name}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    {camper.pricePerDay}€ / día
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-widest border border-zinc-200 px-3 py-1 rounded-full">
                  Disponible
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
