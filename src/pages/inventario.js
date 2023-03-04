import axios from "axios";
import ListarInventarioList from "components/ListarInventarioList.js";
import Layout from "components/Layout.js";
import React from "react";


export default function inventario({ productos }) {
    return (
        <Layout>
            <div className="ml-60
          ">
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Inventario</h5>

                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Codigo Producto
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Descripcion
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Categoria
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Entradas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Salidas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock Actual
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Ingresos
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Egresos
                                </th>
                            </tr>
                        </thead>
                        {productos.map(item => (
                            <ListarInventarioList producto={item} key={item.codigo} />
                        ))
                        }

                        {/* Usa parentesis en lugar de corchetes */}
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps = async (context) => {
    const reqUrl = context.req.headers["referer"]
    const url = new URL(reqUrl);
    const { data: productos } = await axios.get(
        `${url.origin}/api/inventario`
    );

    return {
        props: {
            productos,
        },
    };
};
