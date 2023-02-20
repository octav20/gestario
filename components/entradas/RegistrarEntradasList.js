import React from 'react'

function RegistrarEntradasList({ producto }) {
    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {producto.codigoProducto}
                </th>
                <td className="px-6 py-4">
                    {producto.descripcionProducto}
                </td>
                <td className="px-6 py-4">
                    {producto.precioCompra}
                </td>
                <td className="px-6 py-4">
                    {producto.cantidad}
                </td>
                <td className="px-6 py-4">
                    {producto.subTotal}
                </td>
            </tr>
        </tbody>


    )
}

export default RegistrarEntradasList