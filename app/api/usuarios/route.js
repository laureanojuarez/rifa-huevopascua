import { User } from "@/libs/models/Users.js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { nombre, apellido, apodo } = body;
    const nuevoUsuario = await User.create({ nombre, apellido, apodo });
    return NextResponse.json(nuevoUsuario, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al agregar usuario" }, { status: 500 });
  }
};

export async function GET() {
  try {
    const usuarios = await User.findAll();

    if (usuarios.length === 0) {
      return NextResponse.json({ error: "No se encontraron usuarios" }, { status: 404 });
    }

    return NextResponse.json(usuarios, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener usuarios" }, { status: 500 });
  }
};
