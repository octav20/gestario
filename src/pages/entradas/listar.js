import axios from "axios";
import ListarEntradasList from "components/entradas/ListarEntradasList.js";
import Layout from "components/Layout.js";
import React from "react";
Layout
export default function HomePage({ entradas }) {

    return (
        <Layout>
            <div className="ml-60">
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Lista de Entradas</h5>

                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Fecha Registro
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    No de Documento
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Proveedor
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Monto Total
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Codigo Producto
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Descripcion Producto
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Categoria Producto
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Precio Compra
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
                        {entradas.map(item => (
                            <ListarEntradasList entrada={item} key={item.numeroDocumento}></ListarEntradasList>
                        ))}
                        {/* Usa parentesis en lugar de corchetes */}
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps = async (context) => {
    const { data: entradas } = await axios.get(
        `http://localhost:3000/api/entradas`
    );

    return {
        props: {
            entradas,
        },
    };
};
