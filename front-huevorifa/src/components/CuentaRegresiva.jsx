import { useEffect, useState } from "react";
import "./cuentaregresiva.css";
import "@fontsource/oswald/500.css"; // Usa una fuente con números más pulidos y alargados

// Movemos la fecha objetivo fuera del componente para que no se re-evalúe en cada render
const FECHA_OBJETIVO = new Date("2026-04-05T00:00:00").getTime();

export const CuentaRegresiva = () => {
  const [tiempo, setTiempo] = useState(Math.max(FECHA_OBJETIVO - Date.now(), 0));

  useEffect(() => {
    const intervalo = setInterval(() => {
      const tiempoRestante = FECHA_OBJETIVO - Date.now();
      
      if (tiempoRestante <= 0) {
        setTiempo(0);
        clearInterval(intervalo);
      } else {
        setTiempo(tiempoRestante);
      }
    }, 1000);
    
    return () => clearInterval(intervalo);
  }, []);

  const segundos = Math.floor((tiempo / 1000) % 60);
  const minutos = Math.floor((tiempo / (1000 * 60)) % 60);
  const horas = Math.floor((tiempo / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));

  const formatUnit = (unit) => unit.toString().padStart(2, "0");

  return (
    <div className="cuenta-regresiva  p-6 sm:p-10 mb-10 ">
      <h2 className="text-gray-800 text-xl font-medium mb-6 uppercase tracking-widest">
        Faltan
      </h2>
      <div className="flex gap-4 sm:gap-8 justify-center items-center font-oswald text-6xl sm:text-8xl text-purple-900 drop-shadow-sm">
        <div className="flex flex-col items-center">
          <span>{formatUnit(dias)}</span>
          <span className="text-sm sm:text-base font-sans font-semibold text-gray-500 uppercase tracking-widest mt-2">Días</span>
        </div>
        <span className="text-purple-300 -mt-8">:</span>
        <div className="flex flex-col items-center">
          <span>{formatUnit(horas)}</span>
          <span className="text-sm sm:text-base font-sans font-semibold text-gray-500 uppercase tracking-widest mt-2">Hs</span>
        </div>
        <span className="text-purple-300 -mt-8">:</span>
        <div className="flex flex-col items-center">
          <span>{formatUnit(minutos)}</span>
          <span className="text-sm sm:text-base font-sans font-semibold text-gray-500 uppercase tracking-widest mt-2">Min</span>
        </div>
        <span className="text-purple-300 -mt-8">:</span>
        <div className="flex flex-col items-center">
          <span>{formatUnit(segundos)}</span>
          <span className="text-sm sm:text-base font-sans font-semibold text-gray-500 uppercase tracking-widest mt-2">Seg</span>
        </div>
      </div>
    </div>
  );
};
