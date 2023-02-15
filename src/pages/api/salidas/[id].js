import { pool } from "../../../../config/db.js";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getSalida(req, res);
    }
}
const getSalida = async (req, res) => {
    try {
        const { id } = req.query;
        const [result] = await pool.query("SELECT * FROM Salida WHERE numeroDocumento = ?", [id]);
        const idSalida = result[0].idSalida;
        console.log(idSalida);
        const [lista] = await pool.query("SELECT * FROM DetalleSalida WHERE idSalida =?", [idSalida]);
        return res.status(200).json({ salida: result[0], lista });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

