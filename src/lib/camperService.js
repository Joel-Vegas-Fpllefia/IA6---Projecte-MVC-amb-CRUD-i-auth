// ❌ BORRA ESTO:
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// ✅ SUSTITÚYELO POR ESTO:
import prisma from "./prisma";

// El resto del código se queda igual
export async function getAllCampers() {
  return await prisma.camperModel.findMany();
}

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
