import { CuentaRegresiva } from "@/components/CuentaRegresiva";
import { Premios } from "@/components/Premios";
import { GrillaNumeros } from "@/components/GrillaNumeros";
import { Suspense } from "react";
import { Rabbit } from "lucide-react";
import { Header } from "@/components/Header";
import { CountNumber } from "@/components/CountNumber";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <main className="flex flex-col items-center flex-1 w-full max-w-5xl mx-auto pb-12 ">
            <div className="text-center group pt-4 ">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 inline-flex items-center gap-3 justify-center pb-1 ">
                    <Rabbit className="w-10 h-10 md:w-10 md:h-10 text-stone-600 animate-pulse " />
                    <div className="flex flex-col items-center text-yellow-800 text-6xl font-fraunces">
                        <span>Rifa</span>
                        <span>Pascua</span>
                    </div>
                    <Rabbit className="w-10 h-10 md:w-10 md:h-10 text-stone-600 animate-pulse" />
                </h2>
            </div>

            <Header />


            <div className="flex flex-col items-center text-center">
                <p className="text-gray-800 text-lg font-medium">¡Conseguí tu número y participá por estos dos lindos premios!</p>
                <p className="text-gray-800 text-lg font-medium">Para más información: </p>
                <a href="https://wa.me/543413711846" className="text-lg font-medium text-blue-950">341 371-1846</a>
            </div>

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

            <CountNumber />
        </main>
    );
}
