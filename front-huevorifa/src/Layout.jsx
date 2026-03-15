import { Caja } from "./components/Caja";
import { CuentaRegresiva } from "./components/CuentaRegresiva";
import { Header } from "./components/Header";
import { Premios } from "./components/Premios";
import { useNumeros } from "./hooks/useNumeros";

export const Layout = () => {
    const { numeros, loading, error } = useNumeros();
    return (
        <div className="min-h-screen bg-linear-to-br from-sky-100 via-pink-100 to-yellow-100 flex flex-col font-sans">
            <Header />
            <Premios />
            <main className="flex flex-col items-center flex-1 w-full max-w-5xl mx-auto px-2 pb-12 gap-6">
                <CuentaRegresiva />

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
                ) : loading ? (
                    <div className="flex justify-center items-center h-40 mt-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-200 border-t-yellow-500"></div>
                    </div>
                ) : (
                    <div className="w-full grid grid-cols-5 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 mt-4">
                        {numeros.map((n) => (
                            <Caja key={n.numero} numero={n.numero} user={n.user} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};