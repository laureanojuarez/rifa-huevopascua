import { getCountNumber } from "@/libs/services/numeros.service";

export const CountNumber = async () => {
    let numeros = 0;
    let errorMsg = null;

    try {
        numeros = await getCountNumber();
    } catch (err) {
        console.error("Error fetching data:", err);
        errorMsg = "Hubo un problema al cargar los números de la rifa.";
    }

    if (errorMsg) {
        return (
            <div>
                <p>Cantidad de numeros vendidos:</p>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center h-10 text-center w-full max-w-lg mt-2">
            <p className="text-gray-800 text-lg font-medium">Cantidad de numeros vendidos: {numeros}</p>
        </div>
    )
}