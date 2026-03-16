import { Numeros } from "@/libs/models/Numeros.js";
import { User } from "@/libs/models/Users.js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// GET /api/numeros — todos los números con su dueño
export async function GET() {
  try {
    const numeros = await Numeros.findAll({
      include: {
        model: User,
        attributes: ["id", "nombre", "apellido", "apodo"],
      },
      order: [["numero", "ASC"]],
    });
    return NextResponse.json(numeros);
  } catch (error) {
    console.error("Error al obtener los números:", error);
    return NextResponse.json({ error: "Error interno del servidor al obtener los números." }, { status: 500 });
  }
};

// PUT /api/numeros?numero=:numero — asignar a un usuario (Next.js route handlers usually use searchParams or dynamic routes for this, so we adapt it)
export async function PUT(req) {
  try {
    const numero = req.nextUrl.searchParams.get("numero"); // Get numero from query params since the route is /api/numeros
    const body = await req.json();
    const { userId } = body;
    
    if (!numero) {
        return NextResponse.json({ error: "Número no proporcionado" }, { status: 400 });
    }

    const n = await Numeros.findByPk(numero);
    if (!n) return NextResponse.json({ error: "Número no existe" }, { status: 404 });
    if (n.user_id) return NextResponse.json({ error: "Número ya tomado" }, { status: 400 });
    
    await n.update({ user_id: userId });
    return NextResponse.json(n);
  } catch (error) {
    console.error(`Error al asignar el número:`, error);
    return NextResponse.json({ error: "Error interno del servidor al asignar el número." }, { status: 500 });
  }
};
