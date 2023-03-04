import { pool } from "../../../../config/db.js";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getEntrada(req, res);
    }
}
const getEntrada = async (req, res) => {
    try {
        const { id } = req.query;
        const [result] = await pool.query("SELECT * FROM entrada WHERE numeroDocumento = ?", [id]);
        const idEntrada = result[0].idEntrada;
        console.log(idEntrada);
        const [lista] = await pool.query("SELECT * FROM detalleentrada WHERE idEntrada =?", [idEntrada]);
        return res.status(200).json({ info: result[0], lista });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

