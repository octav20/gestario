import { pool } from "../../../config/db.js";
import jwt, { verify } from 'jsonwebtoken';
import { serialize } from 'cookie';
export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            return await logoutUsuario(req, res);
    }
}

const logoutUsuario = async (req, res) => {
    const { token } = req.cookies;
    if (!token) {
       return res.status(401).json({ message: "No hay token" });
        
    }
    try {
        
        verify(token, "secret");
        
        const serializedToken = serialize("token", null, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 0,
            path: "/"
        })
        res.setHeader("Set-Cookie", serializedToken);

        return res.status(200).json({ mensaje: "Has salido de la aplicacion" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
