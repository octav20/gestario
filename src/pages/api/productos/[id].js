import { pool } from "../../../../config/db.js";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getProducto(req, res);
        case "DELETE":
            return await deleteProducto(req, res);
        case "PUT":
            return await updateProducto(req, res);
    }
}
const getProducto = async (req, res) => {
    try {
        const { id } = req.query;
        const [result] = await pool.query("SELECT * FROM producto WHERE idProducto = ?", [id,]);
        return res.status(200).json(result[0]);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const deleteProducto = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await pool.query("DELETE FROM producto WHERE idProducto =?", [id]);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateProducto = async (req, res) => {
    try {
        const { id } = req.query;
        const { codigo, descripcion, categoria } = req.body;

        await pool.query(
            "UPDATE producto SET codigo = ?, descripcion = ?, categoria = ?  WHERE idProducto =?",
            [codigo, descripcion, categoria, id]
        );
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
