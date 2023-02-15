import { pool } from "../../../../config/db.js";
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getProveedores(req, res);
        case "POST":
            return await saveProveedores(req, res);
    }
}

const getProveedores = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * from Proveedor");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const saveProveedores = async (req, res) => {
    try {
        const { numeroDocumento, nombreCompleto } = req.body;

        const [result] = await pool.query("Insert into Proveedor SET ?", {
            numeroDocumento,
            nombreCompleto,

        });
        console.log(result);
        return res
            .status(200)
            .json({ numeroDocumento, nombreCompleto, id: result.insertId });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
