import { Caja } from "@/components/Caja";
import { Numeros, Usuarios } from "@/libs/models/relations";

export const dynamic = "force-dynamic";

export async function GrillaNumeros() {
    let numeros = [];
    let error = null;

    try {
        const rawNumeros = await Numeros.findAll({
            include: {
                model: Usuarios,
                attributes: ["id", "nombre", "apellido", "apodo"],
            },
            order: [["numero", "ASC"]],
        });
        numeros = rawNumeros.map((n: any) => n.toJSON()); // Convert Sequelize instances to plain objects for transfer to Client Components
    } catch (err) {
        console.error("Error fetching data:", err);
        error = "Hubo un problema al cargar los números de la rifa.";
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-40 text-center w-full max-w-lg mt-8">
                <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-600 px-6 py-4 rounded-xl shadow-sm text-lg font-medium">
                    {error}
                </div>
            </div>
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
