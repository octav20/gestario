import React from 'react'

function ProductosList({ producto }) {
    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {producto.codigo}
                </th>
                <td className="px-6 py-4">
                    {producto.descripcion}
                </td>
                <td className="px-6 py-4">
                    {producto.categoria}
                </td>
                <td className="px-6 py-4">
                    {producto.precioCompra}
                </td>
                <td className="px-6 py-4">
                    {producto.precioVenta}
                </td>
                <td className="px-6 py-4">
                    {producto.stock}
                </td>
            </tr>
        </tbody>


    )
}

export default ProductosList