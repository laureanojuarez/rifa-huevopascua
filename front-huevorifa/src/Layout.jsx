import { Caja } from "./components/Caja";
import { CuentaRegresiva } from "./components/CuentaRegresiva";
import { Header } from "./components/Header";
import { useNumeros } from "./hooks/useNumeros";

export const Layout = () => {
    const { numeros, loading } = useNumeros();
    return (
        <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-yellow-50 flex flex-col font-sans">
            <Header />
            <main className="flex flex-col items-center flex-1 w-full max-w-5xl mx-auto px-4 pb-12 gap-6">
                <CuentaRegresiva />

                <p className="text-gray-600 text-sm sm:text-base font-medium max-w-md mx-auto text-center">
                    Hacé clic en los números ocupados (
                    <span className="text-red-500 font-bold">✕</span>) para ver quién
                    los compró.
                </p>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-200 border-t-yellow-500"></div>
                    </div>
                ) : (
                    <div className="w-full grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
                        {numeros.map((n) => (
                            <Caja key={n.numero} numero={n.numero} user={n.user} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};