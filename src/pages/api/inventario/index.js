import { pool } from "../../../../config/db.js";
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getEntradas(req, res);
    }
}

const getEntradas = async (req, res) => {
    try {
        const [result] = await pool.query("select prod.codigo, prod.descripcion, prod.categoria, ifnull(ent.Entradas, 0) Entradas, ifnull(sal.Salidas, 0) Salidas, prod.Stock, ifnull(ent.TotalEgresos, 0) TotalEgresos, ifnull(sal.TotalIngresos, 0) TotalIngresos from ( select DISTINCT * from ( select p.idProducto, p.codigo, p.descripcion, p.categoria, p.stock from DETALLEENTRADA de inner join ENTRADA e on e.idEntrada = de.idEntrada inner join PRODUCTO p on p.idProducto = de.idProducto UNION ALL select p.idProducto, p.codigo, p.descripcion, p.categoria, p.stock from DETALLESALIDA ds inner join SALIDA s on s.idSalida = ds.idSalida inner join PRODUCTO p on p.idProducto = ds.idProducto ) temp ) prod left join ( select p.idProducto, sum(de.Cantidad) Entradas, sum(CAST(de.SubTotal as decimal)) TotalEgresos from PRODUCTO p inner join DETALLEENTRADA de on de.idProducto = p.idProducto inner join ENTRADA e on e.idEntrada = de.idEntrada group by p.idProducto, p.codigo, p.descripcion, p.categoria )ent on ent.idProducto = prod.idProducto left join ( select p.idProducto, sum(ds.Cantidad) Salidas, sum(CAST(ds.SubTotal as decimal)) TotalIngresos from PRODUCTO p inner join DETALLESALIDA ds on ds.idProducto = p.idProducto inner join SALIDA s on s.idSalida = ds.idSalida group by p.idProducto )sal on sal.idProducto = prod.idProducto");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error });
    }
};
