"use server";

import { Usuarios, Numeros } from "@/libs/models/relations";
import { revalidatePath } from "next/cache";

export async function assignUserToNumber(prevState: any, formData: FormData) {
    try {
        const numero = parseInt(formData.get("numero") as string);
        const nombre = formData.get("nombre") as string;
        const apellido = formData.get("apellido") as string;
        const apodo = formData.get("apodo") as string;

        if (isNaN(numero) || !nombre || !apellido) {
            return { error: "Faltan campos requeridos (Nombre, Apellido o Número)." };
        }

        // Comprobar si el número existe
        let numRecord: any = await Numeros.findByPk(numero);
        if (!numRecord) {
            numRecord = await Numeros.create({ numero });
        }

        if (numRecord.usuario_id) {
            // Actualizar usuario existente
            await Usuarios.update(
                { nombre, apellido, apodo },
                { where: { id: numRecord.usuario_id } }
            );
        } else {
            // Crear el usuario y asignar el número
            const newUser: any = await Usuarios.create({ nombre, apellido, apodo });
            await Numeros.update(
                { usuario_id: newUser.id },
                { where: { numero } }
            );
        }

        revalidatePath("/dashboard");
        revalidatePath("/");
        return { success: `Número ${numero} guardado correctamente.` };
    } catch (error: any) {
        console.error("Error en assignUserToNumber:", error);
        return { error: error.message || "Error al asignar el usuario al número." };
    }
}

export async function unassignNumber(prevState: any, formData: FormData) {
    try {
        const numero = parseInt(formData.get("numero") as string);
        
        const numRecord: any = await Numeros.findByPk(numero);
        if (numRecord && numRecord.usuario_id) {
            const userId = numRecord.usuario_id;
            
            // 1. Liberar el número
            await Numeros.update({ usuario_id: null }, { where: { numero } });
            
            // 2. Comprobar si el usuario no tiene más números y borrarlo si es así
            const count = await Numeros.count({ where: { usuario_id: userId } });
            if (count === 0) {
                await Usuarios.destroy({ where: { id: userId } });
            }
        }

        revalidatePath("/dashboard");
        revalidatePath("/");
        return { success: `Número ${numero} ha sido liberado.` };
    } catch (error: any) {
        console.error("Error en unassignNumber:", error);
        return { error: error.message || "Error al liberar el número." };
    }
}
