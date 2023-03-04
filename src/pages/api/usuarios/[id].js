import { pool } from "../../../../config/db.js";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getUsuario(req, res);
        case "DELETE":
            return await deleteUsuario(req, res);
        case "PUT":
            return await updateUsuario(req, res);
    }
}
const getUsuario = async (req, res) => {
    try {
        const { id } = req.query;
        const [result] = await pool.query("SELECT * FROM usuario WHERE idUsuario = ?", [id]);
        return res.status(200).json(result[0]);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await pool.query("DELETE FROM usuario WHERE idUsuario =?", [id]);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { id } = req.query;
        const { nombreCompleto, nombreUsuario, clave } = req.body;

        await pool.query(
            "UPDATE usuario SET nombreCompleto = ?, nombreCompleto = ?, clave = ? WHERE idUsuario =?",
            [nombreCompleto, nombreUsuario, clave, id]
        );
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
