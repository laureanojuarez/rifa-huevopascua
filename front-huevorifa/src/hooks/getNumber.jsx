import { useEffect, useState } from "react";
import axios from "axios";


export const getNumber = () => {
    const [numeros, setNumeros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/numeros`)
            .then((response) => {
                setNumeros(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener numeros:", error);
                setLoading(false);
            });
    }, []);


    return {
        numeros,
        loading
    }
}

