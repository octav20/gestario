import axios from "axios";
import AsideBar from "components/AsideBar.js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RegistrarSalidasList from "./RegistrarSalidasList.js";
function SalidasForm() {
    const [salida, setSalida] = useState({
        numeroDocumento: "", fechaRegistro: "",
        usuarioRegistro: "", cantidadProductos: "",
        montoTotal: "", listaDetalle: []
    })
    const [producto, setProducto] = useState({
        idProducto: 0, codigoProducto: "",
        descripcionProducto: "", categoriaProducto: "",
        precioVenta: "", stock: 0,
        cantidad: 0, subTotal: ""
    })
    const router = useRouter();
    const handleChange = ({ target: { name, value } }) => {
        setSalida({
            ...salida,
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
            if (salida.listaDetalle.length === 0) {
                return alert("Debes agregar al menos un producto");

            }
            salida.cantidadProductos = salida.listaDetalle.reduce((acc, item) => acc + parseFloat(item.cantidad), 0);
            salida.montoTotal = salida.listaDetalle.reduce((acc, item) => acc + parseFloat(item.subTotal), 0);
            await axios.post("/api/salidas/", salida);
            alert("Salida Agregada");
            setSalida({
                numeroDocumento: "", fechaRegistro: "",
                usuarioRegistro: "", cantidadProductos: "",
                montoTotal: "", listaDetalle: []
            })
        }
        catch (error) {
            console.log(error);
        }
    };

    const productoVerificado = salida.listaDetalle.find((item) => item.idProducto === producto.idProducto);


    const agregarProducto = async (e) => {
        e.preventDefault();
        try {
            if (productoVerificado) {
                setProducto({
                    idProducto: 0, codigoProducto: "",
                    descripcionProducto: "", categoriaProducto: "",
                    precioVenta: "", stock: 0,
                    cantidad: 0, subTotal: ""
                })
                return alert("Este producto ya ha sido agregado")
            }
            if (producto.descripcionProducto === "") {
                return alert("Debes buscar el producto")
            }
            if (producto.cantidad <= "0") {
                return alert("Debes ingresar la cantidad")
            }
            if (producto.cantidad > producto.stock) {
                return alert("No hay suficiente stock")
            }
            producto.subTotal = producto.cantidad * parseFloat(producto.precioVenta);
            salida.listaDetalle.push(producto);
            setProducto({
                idProducto: 0, codigoProducto: "",
                descripcionProducto: "", categoriaProducto: "",
                precioVenta: "", stock: 0,
                cantidad: 0, subTotal: ""
            })

        } catch (error) {
            console.log(error);

        }
    }
    const buscarProducto = async (e) => {
        e.preventDefault();
        try {
            if (producto.codigoProducto === "") {
                return alert("Debes buscar ingresar el codigo del producto")
            }
            const { data } = await axios.get("/api/productos/" + producto.codigoProducto);
            setProducto({
                idProducto: data.idProducto,
                codigoProducto: data.codigo,
                descripcionProducto: data.descripcion,
                categoriaProducto: data.categoria,
                stock: data.stock,
                precioVenta: data.precioVenta,
                cantidad: producto.cantidad,

            }
            );

        } catch (error) {
            console.log(error);

        }
    }
    const limpiarProducto = (e) => {
        e.preventDefault();
        try {
            setProducto({
                idProducto: 0, codigoProducto: "",
                descripcionProducto: "", categoriaProducto: "",
                precioVenta: "", stock: 0,
                cantidad: 0, subTotal: ""
            })
        } catch (error) {
            console.log(error);
        }

    }
    return (

        <div className="ml-60">
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Registrar Salida</h5>
                    <div className="flex justify-around ">
                        <div>
                            <label htmlFor="numeroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Numero de Documento</label>
                            <input type="number" name="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                                value={salida.numeroDocumento} />
                        </div>
                        <div>
                            <label htmlFor="fechaRegistro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
                            <input type="date" name="fechaRegistro" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                                value={salida.fechaRegistro} />
                        </div>
                        <button type="submit" className=" w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar Salida</button>

                    </div>

                </form>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <form className="space-y-6" action="#" onSubmit={agregarProducto}>
                    <div className="flex justify-around space-x-6 ">
                        <div>
                            <label htmlFor="codigoProducto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo Producto</label>
                            <input type="number" name="codigoProducto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required  disabled={producto.descripcionProducto !== "" ? true : false} onChange={handleChangeProducto}
                                value={producto.codigoProducto} />
                        </div>
                        <div>
                            <label htmlFor="descripcionProducto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                            <input type="text" name="descripcionProducto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" disabled onChange={handleChangeProducto}
                                value={producto.descripcionProducto} />
                        </div>
                        <button type="button" className="w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={buscarProducto}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                        </svg>
                        </button>

                        <div>
                            <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Stock </label>
                            <input type="number" name="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" disabled onChange={handleChangeProducto}
                                value={producto.stock} />
                        </div>
                        <div>
                            <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Cantidad </label>
                            <input type="number" name="cantidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChangeProducto}
                                value={producto.cantidad} />
                        </div>
                        <button type="button" className="w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={limpiarProducto}>
                            <svg version={1.0} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#c8d8fa" stroke="none">
                                    <path d="M1470 2307 c-26 -8 -132 -107 -428 -401 l-392 -391 512 -512 513
-513 384 383 c273 272 389 394 403 425 26 57 26 147 0 204 -14 31 -124 147
-398 420 -411 408 -399 399 -509 397 -27 -1 -66 -6 -85 -12z" />
                                    <path d="M383 1248 c-177 -177 -194 -204 -194 -298 -1 -101 20 -132 238 -352
l197 -198 -252 0 c-239 0 -253 -1 -272 -20 -27 -27 -27 -93 0 -120 20 -20 33
-20 1140 -20 1107 0 1120 0 1140 20 27 27 27 93 0 120 -19 19 -33 20 -422 20
l-403 0 -505 505 -505 505 -162 -162z" />
                                </g>
                            </svg>

                        </button>
                        <button type="submit" aria-label="Buscar" className="w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                        </button>

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
                                Precio Venta
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subtotal
                            </th>
                        </tr>
                    </thead>
                    {salida.listaDetalle.map(item => (
                        <RegistrarSalidasList producto={item} key={item.idProducto}></RegistrarSalidasList>
                    ))}
                    {/* Usa parentesis en lugar de corchetes */}
                </table>
            </div>
        </div>



    )
}

export default SalidasForm