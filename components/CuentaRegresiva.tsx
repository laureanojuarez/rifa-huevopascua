"use client";
import { useEffect, useState } from "react";

// Movemos la fecha objetivo fuera del componente para que no se re-evalúe en cada render
const FECHA_OBJETIVO = new Date("2026-04-03T21:00:00").getTime(); // Viernes tres de abril 21 horas

export const CuentaRegresiva = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    setTiempo(Math.max(FECHA_OBJETIVO - Date.now(), 0));

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

  const formatUnit = (unit: number) => unit.toString().padStart(2, "0");

  return (
    <div className="p-4 sm:p-10 ">
      <h2 className="text-gray-800 text-xl font-medium mb-6 uppercase tracking-widest text-center font-fraunces">
        Faltan
      </h2>
      <div className="flex gap-4 sm:gap-8 justify-center items-center font-oswald text-5xl sm:text-8xl text-violet-500 drop-shadow-sm">
        <div className="flex flex-col items-center">
          <span suppressHydrationWarning>{formatUnit(dias)}</span>
          <span className="text-sm sm:text-base font-sans font-semibold text-gray-500 uppercase tracking-widest mt-2">Días</span>
        </div>
        <span className="text-violet-300 -mt-8">:</span>
        <div className="flex flex-col items-center">
          <span suppressHydrationWarning>{formatUnit(horas)}</span>
          <span className="text-sm sm:text-base font-sans font-semibold text-gray-500 uppercase tracking-widest mt-2">Hs</span>
        </div>
        <span className="text-violet-300 -mt-8">:</span>
        <div className="flex flex-col items-center">
          <span suppressHydrationWarning>{formatUnit(minutos)}</span>
          <span className="text-sm sm:text-base font-sans font-semibold text-gray-500 uppercase tracking-widest mt-2">Min</span>
        </div>
        <span className="text-violet-300 -mt-8">:</span>
        <div className="flex flex-col items-center">
          <span suppressHydrationWarning>{formatUnit(segundos)}</span>
          <span className="text-sm sm:text-base font-sans font-semibold text-gray-500 uppercase tracking-widest mt-2">Seg</span>
        </div>
      </div>
    </div>
  );
};
