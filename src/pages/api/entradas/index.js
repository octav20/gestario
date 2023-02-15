import { pool } from "../../../../config/db.js";
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getEntradas(req, res);
        case "POST":
            return await saveEntradas(req, res);
    }
}

const getEntradas = async (req, res) => {
    try {
        const [result] = await pool.query("select e.numeroDocumento, e.fechaRegistro, e.usuarioRegistro, e.documentoProveedor,e.nombreProveedor,e.montoTotal, de.codigoProducto,de.descripcionProducto,de.categoriaProducto, de.precioVenta, de.precioVenta,de.cantidad,de.subTotal from Entrada e inner join DETALLEENTRADA de on e.idEntrada = de.idEntrada");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const saveEntradas = async (req, res) => {
    try {
        const { numeroDocumento, fechaRegistro,
            usuarioRegistro, documentoProveedor, nombreProveedor, cantidadProductos, montoTotal, listaDetalle
        } = req.body;

        const [result] = await pool.query("Insert into Entrada SET ?", {
            numeroDocumento, fechaRegistro, usuarioRegistro, documentoProveedor, nombreProveedor, cantidadProductos, montoTotal
        });
        const idEntrada = result.insertId;

        listaDetalle.forEach(async (
            { idProducto, codigoProducto, descripcionProducto, categoriaProducto, precioCompra, precioVenta, cantidad, subTotal
            }) => {
            await pool.query("Insert into DetalleEntrada set ?", {
                idEntrada, idProducto, codigoProducto, descripcionProducto, categoriaProducto, precioCompra, precioVenta, cantidad, subTotal
            })
            const [producto] = await pool.query("Select * from Producto where idProducto =?", [idProducto]);
            let stock = parseInt(producto[0].stock);
            console.log(stock);
            stock += parseInt(cantidad);
            console.log(result);
            await pool.query("UPDATE PRODUCTO set precioCompra = ?, precioVenta = ?, stock = ? where idProducto = ? ", [precioCompra, precioVenta, stock, idProducto]);

        })
        console.log(result);
        return res
            .status(200)
            .json({ result, id: result.insertId });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
