"use server";

import { Administradores } from "@/libs/models/Administradores";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const usuario = formData.get("usuario") as string;
  const password = formData.get("password") as string;

  if (!usuario || !password) {
    return { error: "Por favor, ingresa usuario y contraseña" };
  }

  try {
    const admin = await Administradores.findOne({ where: { usuario } });

    if (!admin) {
      return { error: "Credenciales incorrectas" };
    }

    if ((admin as any).password !== password) {
      return { error: "Credenciales incorrectas" };
    }

    const cookieStore = await cookies();
    cookieStore.set("auth_session", (admin as any).id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Hubo un error al intentar iniciar sesión" };
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_session");
  redirect("/login");
}
