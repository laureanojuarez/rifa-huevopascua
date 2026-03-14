import { useEffect, useState } from "react";
import "./cuentaregresiva.css";
import "@fontsource/bebas-neue";

export const CuentaRegresiva = () => {
  const fechaObjetivo = new Date("2026-04-05T00:00:00").getTime();
  const [tiempo, setTiempo] = useState(fechaObjetivo - Date.now());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(fechaObjetivo - Date.now());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const segundos = Math.floor((tiempo / 1000) % 60);
  const minutos = Math.floor((tiempo / (1000 * 60)) % 60);
  const horas = Math.floor((tiempo / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));

  return (
    <div className="cuenta-regresiva bg-white bg-opacity-80 rounded-lg p-6 mb-10 shadow-lg">
      <h1 className="h1 text-9xl">
        {dias}d {horas}h {minutos}m {segundos}s
      </h1>
    </div>
  );
};
