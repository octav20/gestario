import { pool } from "../../../../config/db.js";
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getProductos(req, res);
        case "POST":
            return await saveProductos(req, res);
    }
}

const getProductos = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * from producto");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const saveProductos = async (req, res) => {
    try {
        const { codigo, descripcion, categoria } = req.body;

        const [result] = await pool.query("Insert into producto SET ?", {
            codigo,
            descripcion,
            categoria,

        });
        console.log(result);
        return res
            .status(200)
            .json({ codigo, descripcion, categoria, id: result.insertId });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
