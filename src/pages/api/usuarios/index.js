import { pool } from "../../../../config/db.js";
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getUsuarios(req, res);
        case "POST":
            return await saveUsuarios(req, res);
    }
}

const getUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * from Usuario");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const saveUsuarios = async (req, res) => {
    try {
        const { nombreCompleto, nombreUsuario, clave } = req.body;

        const [result] = await pool.query("Insert into Usuario SET ?", {
            nombreCompleto,
            nombreUsuario,
            clave

        });
        console.log(result);
        return res
            .status(200)
            .json({ nombreCompleto, nombreUsuario, clave, id: result.insertId });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
