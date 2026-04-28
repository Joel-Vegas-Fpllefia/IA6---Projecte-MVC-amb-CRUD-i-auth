import { getAllCampers } from "../lib/camperService";
import Link from "next/link";

export default async function HomePage() {
  // 1. Fetch de datos (Server Side)
  const campers = await getAllCampers();

  return (
    <main>
      {/* Sección Hero */}
      <section className="bg-orange-600 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Libertad sobre ruedas</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Alquila las mejores campers totalmente equipadas para tu próximo
          viaje.
        </p>
      </section>

      {/* Sección de Modelos (El catálogo funcional) */}
      <section id="modelos" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Flota</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campers.map((camper) => (
            <div
              key={camper.id}
              className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-slate-200 relative">
                {camper.imageUrl ? (
                  <img
                    src={camper.imageUrl}
                    alt={camper.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    Sin imagen
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{camper.name}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {camper.description}
                </p>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-lg font-bold">
                    {camper.pricePerDay}€{" "}
                    <span className="text-sm font-normal text-slate-500">
                      / día
                    </span>
                  </span>
                  <Link href={`/modelos/${camper.id}`} className="block group">
                    {/* Todo el contenido de la tarjeta aquí */}
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm group-hover:bg-orange-600 transition-colors">
                      Ver detalles
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
