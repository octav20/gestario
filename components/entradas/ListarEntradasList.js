import React from 'react'

function ListarEntradasList({ entrada }) {
    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {entrada.fechaRegistro}
                </th>
                <td className="px-6 py-4">
                    {entrada.numeroDocumento}
                </td>
                <td className="px-6 py-4">
                    {entrada.nombreProveedor}
                </td>
                <td className="px-6 py-4">
                    {entrada.montoTotal}
                </td>
                <td className="px-6 py-4">
                    {entrada.codigoProducto}
                </td>
                <td className="px-6 py-4">
                    {entrada.descripcionProducto}
                </td>
                <td className="px-6 py-4">
                    {entrada.categoriaProducto}
                </td>
                <td className="px-6 py-4">
                    {entrada.precioCompra}
                </td>
                <td className="px-6 py-4">
                    {entrada.precioVenta}
                </td>
                <td className="px-6 py-4">
                    {entrada.cantidad}
                </td>
                <td className="px-6 py-4">
                    {entrada.subTotal}
                </td>
            </tr>
        </tbody>


    )
}

export default ListarEntradasList