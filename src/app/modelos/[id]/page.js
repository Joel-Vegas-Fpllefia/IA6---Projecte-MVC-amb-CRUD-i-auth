import { getCamperById } from "../../../lib/camperService";
import { notFound } from "next/navigation";
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export default async function CamperDetailPage({ params }) {
  const { id } = await params;
  const camper = await getCamperById(id);

  if (!camper) notFound();

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Imagen Principal */}
          <div className="sticky top-32 h-[80vh]">
            <img
              src={camper.imageUrl}
              className="w-full h-full object-cover"
              alt={camper.name}
            />
          </div>

          {/* Información */}
          <div className="flex flex-col justify-center py-20">
            <h1 className="text-6xl font-light tracking-tighter mb-6">
              {camper.name}
            </h1>
            <p className="text-2xl text-zinc-400 mb-12 italic font-serif tracking-tight">
              Desde {camper.pricePerDay}€ por jornada
            </p>

            <div className="space-y-12 mb-16 max-w-md">
              <div className="pt-8 border-t border-zinc-100">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-4">
                  Descripción
                </h4>
                <p className="leading-relaxed text-zinc-600">
                  {camper.description}
                </p>
              </div>
            </div>
            {/* Debajo de la descripción principal */}
            <div className="grid grid-cols-2 gap-y-8 mt-12 border-t border-zinc-100 pt-10">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  Capacidad
                </h4>
                <p className="text-lg font-light text-zinc-900">4 Adultos</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  Transmisión
                </h4>
                <p className="text-lg font-light text-zinc-900">Automática</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  Combustible
                </h4>
                <p className="text-lg font-light text-zinc-900">
                  Diésel (Euro 6)
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  Licencia
                </h4>
                <p className="text-lg font-light text-zinc-900">Clase B</p>
              </div>
            </div>
            <button className="w-full bg-black mt-8 text-white py-6 text-xs uppercase tracking-[0.4em] hover:bg-zinc-800 transition-colors">
              Solicitar Reserva
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
