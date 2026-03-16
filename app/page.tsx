import { Caja } from "@/components/Caja";
import { CuentaRegresiva } from "@/components/CuentaRegresiva";
import { Premios } from "@/components/Premios";
import { Numeros, User } from "@/libs/models/relations";

export const dynamic = "force-dynamic";

export default async function Home() {
    let numeros = [];
    let error = null;

    try {
        const rawNumeros = await Numeros.findAll({
            include: {
                model: User,
                attributes: ["id", "nombre", "apellido", "apodo"],
            },
            order: [["numero", "ASC"]],
        });
        numeros = rawNumeros.map((n: any) => n.toJSON()); // Convert Sequelize instances to plain objects for transfer to Client Components
    } catch (err) {
        console.error("Error fetching data:", err);
        error = "Hubo un problema al cargar los números de la rifa.";
    }

  return (
      <main className="flex flex-col items-center flex-1 w-full max-w-5xl mx-auto px-2 pb-12 gap-6">
        <Premios/>
        <CuentaRegresiva/>
        <p className="text-gray-600 text-sm sm:text-base font-medium max-w-md mx-auto text-center">
                    Hacé clic en los números ocupados (
                    <span className="text-red-500 font-bold">✕</span>) para ver quién
                    los compró.
                </p>

                {error ? (
                    <div className="flex justify-center items-center h-40 text-center w-full max-w-lg mt-8">
                        <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-600 px-6 py-4 rounded-xl shadow-sm text-lg font-medium">
                            {error}
                        </div>
                    </div>
                ) : (
                    <div className="w-full grid grid-cols-5 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 mt-4">
                        {numeros.map((n: any) => (
                            <Caja key={n.numero} numero={n.numero} user={n.user} />
                        ))}
                    </div>
                )}
      </main>
  );
}
