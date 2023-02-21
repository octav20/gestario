import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RegistrarEntradasList from "./RegistrarEntradasList.js";
function EntradasForm() {
    const [entrada, setEntrada] = useState({
        numeroDocumento: "", fechaRegistro: "",
        usuarioRegistro: "", documentoProveedor: "",
        nombreProveedor: "", cantidadProductos: "",
        montoTotal: "", listaDetalle: []
    })
    const [producto, setProducto] = useState({
        idProducto: 0, codigoProducto: "",
        descripcionProducto: "", categoriaProducto: "",
        precioCompra: "", precioVenta: "",
        cantidad: 0, subTotal: ""
    })
    const router = useRouter();
    const handleChange = ({ target: { name, value } }) => {
        setEntrada({
            ...entrada,
            [name]: value,
        });
    };
    const handleChangeProducto = ({ target: { name, value } }) => {
        setProducto({
            ...producto,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            entrada.cantidadProductos = entrada.listaDetalle.reduce((acc, item) => acc + parseFloat(item.cantidad), 0);
            entrada.montoTotal = entrada.listaDetalle.reduce((acc, item) => acc + parseFloat(item.subTotal), 0);
            await axios.post("/api/entradas/", entrada);
            alert("Entrada Agregada");
            setEntrada({
                numeroDocumento: "", fechaRegistro: "",
                usuarioRegistro: "", documentoProveedor: "",
                nombreProveedor: "", cantidadProductos: "",
                montoTotal: "", listaDetalle: []
            })
        }
        catch (error) {
            console.log(error);
        }
    };

    const productoVerificado = entrada.listaDetalle.find((item) => item.idProducto === producto.idProducto);


    const agregarProducto = async (e) => {
        e.preventDefault();
        try {
            if (productoVerificado) {
                return alert("Este producto ya ha sido agregado")
            }
            if (producto.cantidad <= 0) {
                return alert("Debe ingresar una cantidad valida")
            }
            producto.subTotal = producto.cantidad * parseInt(producto.precioCompra);
            entrada.listaDetalle.push(producto);
            setProducto({
                idProducto: 0, codigoProducto: "",
                descripcionProducto: "", categoriaProducto: "",
                precioCompra: "", precioVenta: "",
                cantidad: 0, subTotal: ""
            })

        } catch (error) {
            console.log(error);

        }
    }
    const buscarProducto = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get("/api/productos/" + producto.codigoProducto);
            setProducto({
                idProducto: data.idProducto,
                codigoProducto: data.codigo,
                descripcionProducto: data.descripcion,
                categoriaProducto: data.categoria,
                precioCompra: data.precioCompra,
                precioVenta: data.precioVenta,
                cantidad: producto.cantidad,

            }
            );

        } catch (error) {
            console.log(error);

        }
    }
    const buscarProveedor = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get("/api/proveedores/" + entrada.documentoProveedor);
            setEntrada({
                numeroDocumento: entrada.numeroDocumento, fechaRegistro: entrada.fechaRegistro,
                usuarioRegistro: entrada.usuarioRegistro, documentoProveedor: data.numeroDocumento,
                nombreProveedor: data.nombreCompleto, cantidadProductos: entrada.cantidadProductos,
                montoTotal: entrada.montoTotal, listaDetalle: entrada.listaDetalle
            })

        } catch (error) {
            console.log(error);

        }
    }

    return (

        <div className="ml-60">
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Registrar Entrada</h5>
                    <div className="flex justify-around ">
                        <div>
                            <label htmlFor="numeroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Numero de Documento</label>
                            <input type="number" name="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                                value={entrada.numeroDocumento} />
                        </div>
                        <div>
                            <label htmlFor="fechaRegistro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
                            <input type="date" name="fechaRegistro" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                                value={entrada.fechaRegistro} />
                        </div>
                        <div>
                            <label htmlFor="documentoProveedor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Documento Proveedor</label>
                            <input type="number" name="documentoProveedor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                                value={entrada.documentoProveedor} />
                        </div>
                        <div>
                            <label htmlFor="nombreProveedor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proveedor</label>
                            <input type="text" name="nombreProveedor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" disabled onChange={handleChange}
                                value={entrada.nombreProveedor} />

                        </div>
                        <button type="button" className=" w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={buscarProveedor}>Buscar Proveedor</button>
                        <button type="submit" className=" w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar entrada</button>

                    </div>

                </form>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <form className="space-y-6" action="#" onSubmit={agregarProducto}>
                    <div className="flex justify-around ">
                        <div>
                            <label htmlFor="codigoProducto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo Producto</label>
                            <input type="number" name="codigoProducto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChangeProducto}
                                value={producto.codigoProducto} />
                        </div>
                        <div>
                            <label htmlFor="descripcionProducto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                            <input type="text" name="descripcionProducto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" disabled onChange={handleChangeProducto}
                                value={producto.descripcionProducto} />
                        </div>
                        <button type="button" className="w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={buscarProducto}>Buscar Producto</button>

                        <div>
                            <label htmlFor="precioCompra" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Precio Compra</label>
                            <input type="number" name="precioCompra" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChangeProducto}
                                value={producto.precioCompra} />
                        </div>
                        <div>
                            <label htmlFor="precioVenta" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Precio Venta</label>
                            <input type="number" name="precioVenta" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChangeProducto}
                                value={producto.precioVenta} />
                        </div>
                        <div>
                            <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Cantidad </label>
                            <input type="number" name="cantidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChangeProducto}
                                value={producto.cantidad} />
                        </div>

                        <button type="submit" className="w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</button>

                    </div>
                </form>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Codigo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripcion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio Compra
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subtotal
                            </th>
                        </tr>
                    </thead>
                    {entrada.listaDetalle.map(item => (
                        <RegistrarEntradasList producto={item} key={item.idProducto}></RegistrarEntradasList>
                    ))}
                    {/* Usa parentesis en lugar de corchetes */}
                </table>
            </div>
        </div>


    )
}

export default EntradasForm