// src/services/camperService.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllCampers() {
  try {
    return await prisma.camperModel.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching campers:", error);
    return [];
  }
}

// Añade esto a src/lib/camperService.js

export async function getCamperById(id) {
  try {
    return await prisma.camperModel.findUnique({
      where: { id: id },
      include: { comments: true }, // Aprovechamos para traer los comentarios
    });
  } catch (error) {
    console.error("Error al obtener el detalle:", error);
    return null;
  }
}
