// src/lib/camperService.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Esta ya la tenías para la Home
export async function getAllCampers() {
  return await prisma.camperModel.findMany();
}

// ESTA ES LA QUE TE FALTA O TIENE UN ERROR DE NOMBRE
export async function getCamperById(id) {
  try {
    return await prisma.camperModel.findUnique({
      where: { id: id },
    });
  } catch (error) {
    console.error("Error al buscar camper por ID:", error);
    return null;
  }
}
