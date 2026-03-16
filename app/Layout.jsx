import { Caja } from "./components/Caja";
import { CuentaRegresiva } from "./components/CuentaRegresiva";
import { Header } from "./components/Header";
import { Premios } from "./components/Premios";
import { useNumeros } from "./hooks/useNumeros";

export const Layout = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-sky-100 via-pink-100 to-yellow-100 flex flex-col font-sans">
            <Header />
            <Premios />
            <main className="flex flex-col items-center flex-1 w-full max-w-5xl mx-auto px-2 pb-12 gap-6">
                <CuentaRegresiva />

                
            </main>
        </div>
    );
};