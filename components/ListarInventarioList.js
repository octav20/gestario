import React from 'react'

function ListarInventarioList({ producto }) {
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
                    {producto.Entradas}
                </td>
                <td className="px-6 py-4">
                    {producto.Salidas}
                </td>
                <td className="px-6 py-4">
                    {producto.Stock}
                </td>
                <td className="px-6 py-4">
                    {producto.TotalIngresos}
                </td>
                <td className="px-6 py-4">
                    {producto.TotalEgresos}
                </td>
            </tr>
        </tbody>


    )
}

export default ListarInventarioList