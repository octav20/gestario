import { pool } from "../../../config/db.js";
export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            return await registrarUsuario(req, res);
    }
}

const registrarUsuario = async (req, res) => {
    try {
        const { nombreCompleto, nombreUsuario, clave } = req.body;
        const [user] = await pool.query("SELECT * FROM usuario WHERE nombreUsuario = ?", [
            nombreUsuario
        ]);
        console.log(user);
        if (user.length > 0) {
            return res.status(401).json("Este nombre de usuario ya esta registrado");
        }

        const [result] = await pool.query("Insert into usuario SET ?", {
            nombreCompleto,
            nombreUsuario,
            clave

        });

        return res.status(200).json({ mensaje: "Usuario registrado correctamente" });

    } catch (error) {
        return res.status(500).json({ error });
    }
};
