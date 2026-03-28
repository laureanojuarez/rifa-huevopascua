import { Caja } from "@/components/Caja";
import { getNumeros } from "@/libs/services/numeros.service";

export const dynamic = "force-dynamic";

export async function GrillaNumeros() {
    let numeros = [];
    let error = null;

    try {
        numeros = await getNumeros();
    } catch (err) {
        console.error("Error fetching data:", err);
        error = "Hubo un problema al cargar los números de la rifa.";
    }

    if (error) {
        return (
            <div>Error al cargar números</div>
        );
    }

    return (
        <div className="w-full max-w-82 sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-10 gap-0.5 sm:gap-2 mt-4">
            {numeros.map((n: any) => (
                <Caja key={n.numero} numero={n.numero} user={n.usuario} />
            ))}
        </div>
    );
}
