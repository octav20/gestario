import { pool } from "../../../../config/db.js";
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getSalidas(req, res);
        case "POST":
            return await saveSalidas(req, res);
    }
}

const getSalidas = async (req, res) => {
    try {
        const [result] = await pool.query("select e.numeroDocumento, e.fechaRegistro, e.usuarioRegistro, e.documentoCliente,e.nombreCliente,e.montoTotal, de.codigoProducto,de.descripcionProducto,de.categoriaProducto, de.precioVenta,de.cantidad,de.subTotal from salida e inner join detallesalida de on e.idSalida = de.idSalida");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const saveSalidas = async (req, res) => {
    try {
        const { numeroDocumento, fechaRegistro,
            usuarioRegistro, cantidadProductos, montoTotal, listaDetalle
        } = req.body;

        const [result] = await pool.query("Insert into salida SET ?", {
            numeroDocumento, fechaRegistro, usuarioRegistro, cantidadProductos, montoTotal
        });
        const idSalida = result.insertId;

        listaDetalle.forEach(async (
            { idProducto, codigoProducto, descripcionProducto, categoriaProducto, precioVenta, cantidad, subTotal
            }) => {
            await pool.query("Insert into detallesalida set ?", {
                idSalida, idProducto, codigoProducto, descripcionProducto, categoriaProducto, precioVenta, cantidad, subTotal
            })
            await reducirStock(idProducto, cantidad);

        })

        console.log(result);
        return res
            .status(200)
            .json({ result, id: result.insertId });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const reducirStock = async (id, cantidad) => {
    try {
        const [producto] = await pool.query("Select * from producto where idProducto =?", [id]);
        let stock = parseInt(producto[0].stock);
        console.log(stock);
        stock -= parseInt(cantidad);
        const [result] = await pool.query("Update producto set stock =? where idProducto =?", [stock, id]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
