import React from 'react'

function ListarSalidasList({ salida }) {
    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {salida.fechaRegistro}
                </th>
                <td className="px-6 py-4">
                    {salida.numeroDocumento}
                </td>
                <td className="px-6 py-4">
                    {salida.montoTotal}
                </td>
                <td className="px-6 py-4">
                    {salida.codigoProducto}
                </td>
                <td className="px-6 py-4">
                    {salida.descripcionProducto}
                </td>
                <td className="px-6 py-4">
                    {salida.categoriaProducto}
                </td>
                <td className="px-6 py-4">
                    {salida.precioVenta}
                </td>
                <td className="px-6 py-4">
                    {salida.cantidad}
                </td>
                <td className="px-6 py-4">
                    {salida.subTotal}
                </td>
            </tr>
        </tbody>


    )
}

export default ListarSalidasList