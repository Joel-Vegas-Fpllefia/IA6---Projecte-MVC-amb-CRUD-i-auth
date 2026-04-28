// prisma/seed.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Generando datos de prueba...");

  // Limpiar datos previos (opcional)
  await prisma.comment.deleteMany();
  await prisma.camperModel.deleteMany();
  await prisma.user.deleteMany();

  const camper1 = await prisma.camperModel.create({
    data: {
      name: "Volkswagen California T6",
      description:
        "Icono de libertad. Cocina completa y techo elevable para 4 personas.",
      pricePerDay: 110.0,
      imageUrl:
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800",
    },
  });

  const camper2 = await prisma.camperModel.create({
    data: {
      name: "Mercedes Marco Polo",
      description:
        "Confort premium y conducción suave. Ideal para rutas largas.",
      pricePerDay: 135.0,
      imageUrl:
        "https://images.unsplash.com/photo-1500049222538-2ef4c3210129?q=80&w=800",
    },
  });

  console.log("✅ Seed finalizado con éxito.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
