// prisma/seed.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Limpiando base de datos para refrescar catálogo...");
  await prisma.comment.deleteMany();
  await prisma.camperModel.deleteMany();

  const fleet = [
    {
      name: "Volkswagen California T6.1 Ocean",
      description:
        "Motor 2.0 TDI 150CV DSG. El icono de las camper. Incluye techo elevable electrohidráulico, cocina de dos fogones, nevera de compresor y calefacción estacionaria programable. Ideal para 4 personas.",
      pricePerDay: 120.0,
      imageUrl:
        "https://furgovan.com/wp-content/uploads/2019/07/WhatsApp-Image-2021-05-04-at-22.41.21-2.jpeg",
    },
    {
      name: "Mercedes-Benz Marco Polo V250d",
      description:
        "Motor 190CV 9G-TRONIC. Máximo confort de conducción. Equipamiento Westfalia de serie, suelo de diseño náutico, asientos de cuero y sistema multimedia MBUX con navegación inteligente.",
      pricePerDay: 145.0,
      imageUrl:
        "https://cdn.motor1.com/images/mgl/rK3PbO/s1/mercedes-v-klasse-marco-polo-2023-auf-dem-caravan-salon-dusseldorf-2023.jpg",
    },
    {
      name: "Knaus Boxstar 600 Street",
      description:
        "Gran Volumen sobre chasis Fiat Ducato. Baño completo con ducha, cama doble transversal trasera y una cocina amplia. Aislamiento térmico de alto rendimiento para viajes de invierno.",
      pricePerDay: 115.0,
      imageUrl:
        "https://static.caravan24.ch/fotos/xlarge/130577-a974d446cd6ce2cf129b11aaa82e9942-1214082-e6d90185c9e749a3ee1bbb882d610153.jpg",
    },
    {
      name: "Hymer Free S 600 Blue Evolution",
      description:
        "Chasis Mercedes Sprinter de tracción delantera. Diseño deportivo en color azul especial, techo elevable integrado y un interior minimalista en tonos grises. Potencia y estilo en cada kilómetro.",
      pricePerDay: 155.0,
      imageUrl:
        "https://www.hymer.com/hymer/pressematerial/modelljahr-2022/2022_07-hymer-free-s-blue-evolution/hymer_free_s_blue_evolution_beach.jpg",
    },
    {
      name: "Westfalia James Cook High Roof",
      description:
        "La leyenda regresa. Sistema de slide-out trasero que amplía la zona de dormitorio en segundos. Baño XL y una de las distribuciones más inteligentes del mercado actual.",
      pricePerDay: 170.0,
      imageUrl:
        "https://www.caravaningk2.es/wp-content/uploads/2024/11/2025_WESTFALIA_James_Cook_Back-1.jpg",
    },
    {
      name: "Weinsberg CaraTour 540 MQ",
      description:
        "Compacta pero matona. Solo 5.41 metros de largo, lo que permite aparcar en casi cualquier lugar. Perfecta para parejas que buscan agilidad sin renunciar a tener baño y ducha.",
      pricePerDay: 98.0,
      imageUrl:
        "https://weinsberg.com/fileadmin/media/mj2024-2025/camper-van/aufstelldach/content/interieur/kta-weinsberg-2024-2025-aufstelldach-interieur-highlights.jpg",
    },
    {
      name: "Volkswagen Grand California 600",
      description:
        "Basada en la VW Crafter. Incluye baño propio, cama de 193x140cm y una cama infantil opcional sobre la cabina. Panel solar de 104W y sistema de control central táctil.",
      pricePerDay: 160.0,
      imageUrl:
        "https://img.alohacamp.com/WWZKnVnnJ0Uq4hLVhpqMdXnNf-CUWOKv399oyySzuQ4/resize:fill:1028:668/enlarge:1/czM6Ly9hbG9oYS5pbWFnZXMvcHJvcGVydGllcy9jZjhlN2FjYTgyMzIyZTEzYmExM2NjYjYzZDEzYzdkMzljM2E4OTNhLmpwZw",
    },
    {
      name: "Ford Transit Custom Nugget Plus",
      description:
        "Techo alto rígido y batalla larga. Distribución exclusiva de tres ambientes que separa la cocina de la zona de estar. Incluye inodoro fijo y lavabo plegable en la zona trasera.",
      pricePerDay: 110.0,
      imageUrl:
        "https://camperplanet.es/wp-content/uploads/2024/11/ford-transit-custom-nugget5.jpg",
    },
  ];

  console.log(`🚀 Sembrando ${fleet.length} campers en la base de datos...`);

  for (const camper of fleet) {
    await prisma.camperModel.create({
      data: camper,
    });
  }

  console.log("✅ Seed finalizado. Tu flota está lista.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
