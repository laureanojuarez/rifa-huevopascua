import { NextResponse } from "next/server";
import { Administradores } from "@/libs/models/Administradores";
import { Usuarios, Numeros } from "@/libs/models/relations";

export async function GET() {
  try {
    // Sincroniza todos los modelos aplicando alter: true para actualizar las tablas a su nuevo estado sin perder los datos actuales
    await Administradores.sync({ alter: true });
    await Usuarios.sync({ alter: true });
    await Numeros.sync({ alter: true });

    // Crea un usuario por defecto si la tabla administradores está vacía
    const cuenta = await Administradores.count();
    if (cuenta === 0) {
      await Administradores.create({
        usuario: "admin",
        password: "123", // Cambia esto después por seguridad
      });
      return NextResponse.json({ 
        message: "¡Tablas creadas/actualizadas con éxito! Se ha generado un usuario administrador de prueba.",
        credenciales: {
          usuario: "admin",
          password: "123"
        }
      });
    }

    return NextResponse.json({ message: "Las tablas ya existen y han sido sincronizadas (alteradas)." });
  } catch (error) {
    console.error("Error validando las tablas:", error);
    return NextResponse.json({ error: "Error al sincronizar la base de datos", detalle: error.message }, { status: 500 });
  }
}