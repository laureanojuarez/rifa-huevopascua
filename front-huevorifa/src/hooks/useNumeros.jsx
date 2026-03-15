import { useEffect, useState } from "react";
import axios from "axios";

export const useNumeros = () => {
  const [numeros, setNumeros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/numeros`)
      .then((response) => {
        setNumeros(response.data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener numeros:", err);
        setError("Hubo un problema al cargar los números de la rifa.");
        setLoading(false);
      });
  }, []);

  return {
    numeros,
    loading,
    error,
  };
};
