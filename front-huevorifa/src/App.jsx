import axios from "axios";
import { useEffect, useState } from "react";

const Caja = ({ numero, user }) => {
  const [flipped, setFlipped] = useState(false);
  const tomado = !!user;

  return (
    <div
      className="w-20 h-20 m-1 select-none"
      style={{ perspective: "600px", cursor: tomado ? "pointer" : "default" }}
      onClick={() => tomado && setFlipped((f) => !f)}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Frente */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 border-2 border-yellow-500 bg-white flex flex-col items-center justify-center rounded shadow-sm"
        >
          <p className="font-bold text-yellow-700 text-lg leading-none">
            {numero}
          </p>
          {tomado && (
            <span className="text-red-500 font-bold text-lg leading-none mt-1">
              ✕
            </span>
          )}
        </div>

        {/* Dorso */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 border-2 border-yellow-600 bg-yellow-500 flex flex-col items-center justify-center rounded shadow-sm"
        >
          <p className="text-white font-bold text-center text-xs px-1 leading-tight">
            {user?.apodo || `${user?.nombre} ${user?.apellido}`}
          </p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [numeros, setNumeros] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/numeros")
      .then((response) => setNumeros(response.data))
      .catch((error) => console.error("Error al obtener numeros:", error));
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold text-yellow-600 mb-1 tracking-wide">
        🐣 Rifa Huevo de Pascua
      </h1>
      <p className="text-yellow-400 mb-6 text-sm">
        Hacé clic en un número ocupado (✕) para ver quién lo tiene
      </p>
      <div className="flex flex-wrap justify-center max-w-3xl">
        {numeros.map((n) => (
          <Caja key={n.numero} numero={n.numero} user={n.user} />
        ))}
      </div>
    </div>
  );
}

export default App;
