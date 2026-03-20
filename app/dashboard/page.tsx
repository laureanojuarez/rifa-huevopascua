import { Numeros, Usuarios } from "@/libs/models/relations";
import { DashboardClient } from "./DashboardClient";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
    let numerosData = [];
    
    try {
        const rawNumeros = await Numeros.findAll({
            include: {
                model: Usuarios,
                attributes: ["id", "nombre", "apellido", "apodo"],
            },
            order: [["numero", "ASC"]],
        });
        
        numerosData = rawNumeros.map((n: any) => n.toJSON());
    } catch (e: any) {
        console.error("Dashboard fetching error:", e);
    }

    return (
        <div className="min-h-screen bg-gray-50 max-w-7xl mx-auto">
            <DashboardClient numerosData={numerosData} />
        </div>
    );
}