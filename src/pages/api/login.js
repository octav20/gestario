import { pool } from "../../../config/db.js";
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
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

        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
            nombreUsuario: user[0].nombreUsuario,
            nombreCompleto: user[0].nombreCompleto
        }, "secret")
        const serializedToken = serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: "/"
        })
        res.setHeader("Set-Cookie", serializedToken);

        return res.status(200).json({ mensaje: "Usuario logeado correctamente" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
