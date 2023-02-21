import axios from 'axios';
import React, { useState } from 'react'
import BuscarEntradasList from './BuscarEntradasList';
function BuscarEntradasForm() {
    const [entrada, setEntrada] = useState({
        numeroDocumento: "", fechaRegistro: "",
        usuarioRegistro: "", documentoProveedor: "",
        nombreProveedor: "", cantidadProductos: "",
        montoTotal: "", listaDetalle: []
    })
    const handleChange = ({ target: { name, value } }) => {
        setEntrada({
            ...entrada,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get("/api/entradas/" + entrada.numeroDocumento);
            setEntrada({
                numeroDocumento: data.info.numeroDocumento, fechaRegistro: data.info.fechaRegistro,
                usuarioRegistro: data.info.usuarioRegistro, documentoProveedor: data.info.documentoProveedor,
                nombreProveedor: data.info.nombreProveedor, cantidadProductos: data.info.cantidadProductos,
                montoTotal: data.info.montoTotal, listaDetalle: data.lista
            })
            console.log(entrada.listaDetalle);
        }
        catch (error) {
            alert(error.message);
            console.log(error);
        }
    };

    const limpiar = async (e) => {
        e.preventDefault();
        try {
            setEntrada({
                numeroDocumento: "", fechaRegistro: "",
                usuarioRegistro: "", documentoProveedor: "",
                nombreProveedor: "", cantidadProductos: "",
                montoTotal: "", listaDetalle: []
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='ml-60'>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Buscar Entrada</h5>
                    <div className="flex justify-around ">
                        <div>
                            <label htmlFor="numeroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Numero de Documento</label>
                            <input type="number" name="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                                value={entrada.numeroDocumento} />
                        </div>
                        <div>
                            <label htmlFor="fechaRegistro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
                            <input type="date" name="fechaRegistro" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" disabled onChange={handleChange}
                                value={entrada.fechaRegistro} />
                        </div>
                        <div>
                            <label htmlFor="documentoProveedor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Documento Proveedor</label>
                            <input type="number" name="documentoProveedor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" disabled onChange={handleChange}
                                value={entrada.documentoProveedor} />
                        </div>
                        <div>
                            <label htmlFor="nombreProveedor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proveedor</label>
                            <input type="text" name="nombreProveedor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" disabled onChange={handleChange}
                                value={entrada.nombreProveedor} />

                        </div>
                        <button type="button" className=" w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={limpiar}>Limpiar</button>
                        <button type="submit" className=" w-min h-min self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar entrada</button>

                    </div>

                </form>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
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
                                Categoria
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
                        <BuscarEntradasList producto={item} key={item.idProducto}></BuscarEntradasList>
                    ))}
                    {/* Usa parentesis en lugar de corchetes */}
                </table>
            </div>
        </div>
    )
}

export default BuscarEntradasForm