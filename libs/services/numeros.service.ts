import { Numeros, Usuarios } from "@/libs/models/relations";

export const getNumeros = async () => {
    const rawNumeros = await Numeros.findAll({
        include: {
            model: Usuarios,
            attributes: ["id", "nombre", "apellido", "apodo"],
        },
        order: [["numero", "ASC"]],
    });

    return rawNumeros.map((n: any) => n.toJSON());
};

export const getCountNumber = async () => {
    const count = await Numeros.count({
        col: "usuario_id"
    });
    return count;
};