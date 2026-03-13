import { Caja } from "./components/Caja";
import { useNumeros } from "./hooks/useNumeros";

function App() {
  const { numeros, loading } = useNumeros();

  return (
    <main className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-yellow-50 flex flex-col items-center py-10 px-4 sm:px-8 font-sans">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <span className="text-5xl inline-block drop-shadow-md mb-2">🐣</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-orange-500 tracking-tight drop-shadow-sm">
            Rifa Huevo de Pascua
          </h1>
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-md mx-auto">
            Hacé clic en los números ocupados (
            <span className="text-red-500 font-bold">✕</span>) para ver quién
            los compró.
          </p>
        </div>

        {/* Loading o Grilla */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-200 border-t-yellow-500"></div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3 auto-rows-fr">
            {numeros.map((n) => (
              <Caja key={n.numero} numero={n.numero} user={n.user} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
