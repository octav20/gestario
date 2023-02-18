import { pool } from "../../../config/db.js";
export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            return await logearUsuario(req, res);
    }
}

const logearUsuario = async (req, res) => {
    try {
        const { nombreUsuario, clave } = req.body;
        const [user] = await pool.query("SELECT * FROM usuario WHERE nombreUsuario = ?", [
            nombreUsuario
        ]);
        console.log(user);
        if (user.length === 0) {
            return res.status(401).json("Nombre de usuario incorrecto");
        }

        const password = user[0].clave;
        if (password !== clave) {
            return res.status(401).json("Contraseña incorrecta");
        }

        return res.status(200).json({ mensaje: "Usuario logeado correctamente" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
