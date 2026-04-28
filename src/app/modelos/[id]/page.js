import { getCamperById } from "../../../lib/camperService";
import { notFound } from "next/navigation";

export default async function CamperDetailPage({ params }) {
  // 1. Extraemos el ID de los parámetros (necesario await en Next 15+)
  const { id } = await params;

  // 2. Llamamos al "Modelo" a través de nuestro servicio
  const camper = await getCamperById(id);

  // 3. Si no existe, lanzamos el 404 de Next.js
  if (!camper) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto p-6 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Vista: Galería/Imagen */}
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
          <img
            src={camper.imageUrl || "/placeholder-camper.jpg"}
            alt={camper.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Vista: Información y Acciones */}
        <div className="flex flex-col justify-center">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-orange-600">
              Inicio
            </a>{" "}
            / <span>{camper.name}</span>
          </nav>

          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {camper.name}
          </h1>
          <p className="text-3xl font-extrabold text-orange-600 mb-6">
            {camper.pricePerDay}€{" "}
            <span className="text-lg font-normal text-gray-400">/ noche</span>
          </p>

          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm mb-8">
            <h2 className="font-semibold mb-2">Descripción</h2>
            <p className="text-gray-600 leading-relaxed">
              {camper.description}
            </p>
          </div>

          <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1">
            Reservar esta Camper
          </button>
        </div>
      </div>
    </div>
  );
}
