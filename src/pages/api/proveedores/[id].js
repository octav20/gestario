import { pool } from "../../../../config/db.js";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getProveedor(req, res);
        case "DELETE":
            return await deleteProveedor(req, res);
        case "PUT":
            return await updateProveedor(req, res);
    }
}
const getProveedor = async (req, res) => {
    try {
        const { id } = req.query;
        const [result] = await pool.query("SELECT * FROM Proveedor WHERE numeroDocumento = ?", [id]);
        return res.status(200).json(result[0]);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const deleteProveedor = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await pool.query("DELETE FROM Proveedor WHERE idProveedor =?", [id]);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateProveedor = async (req, res) => {
    try {
        const { id } = req.query;
        const { numeroDocumento, nombreCompleto } = req.body;

        await pool.query(
            "UPDATE Proveedor SET numeroDocumento = ?, nombreCompleto = ? WHERE idProveedor =?",
            [numeroDocumento, nombreCompleto, id]
        );
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
