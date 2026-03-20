import { CuentaRegresiva } from "@/components/CuentaRegresiva";
import { Premios } from "@/components/Premios";
import { GrillaNumeros } from "@/components/GrillaNumeros";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <main className="flex flex-col items-center flex-1 w-full max-w-5xl mx-auto px-2 pb-12 gap-6 overflow-hidden">
            <Premios />
            <CuentaRegresiva />
            <p className="text-gray-600 text-sm sm:text-base font-medium max-w-md mx-auto text-center">
                Hacé clic en los números ocupados (
                <span className="text-red-500 font-bold">✕</span>) para ver quién
                los compró.
            </p>

            <Suspense fallback={
                <div className="w-full flex justify-center items-center h-40 mt-8">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
                        <p className="text-pink-500 font-medium tracking-wide animate-pulse">Cargando números...</p>
                    </div>
                </div>
            }>
                <GrillaNumeros />
            </Suspense>
        </main>
    );
}
