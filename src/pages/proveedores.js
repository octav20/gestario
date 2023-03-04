import axios from 'axios'
import Layout from 'components/Layout'
import ProveedoresList from 'components/ProveedoresList'
import ProveedorForm from 'components/ProveedorForm'
import React, { useState } from 'react'
function Proveedores({ data }) {
    const [proveedores, setProveedores] = useState(data)
    // TODO: Arreglar el problema cuando se agrega otro proveedor, probablemente tenga que usar useContext
    return (
        <Layout>
            <div className='flex flex-row justify-between '>
                <ProveedorForm proveedores={proveedores} />
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">
                    <table className="w-min text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Numero de Documento
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre del Proveedor
                                </th>
                            </tr>
                        </thead>
                        {proveedores.map(item => (
                            <ProveedoresList proveedor={item} key={item.numeroDocumento} />
                        ))}
                        {/* Usa parentesis en lugar de corchetes */}
                    </table>
                </div>
            </div>
        </Layout>
    )
}
export const getServerSideProps = async (context) => {
    const reqUrl = context.req.headers["referer"]
    const url = new URL(reqUrl);
    const { data } = await axios.get(
        `${url.origin}/api/proveedores`
    );
    return {
        props: {
            data
        },
    };
};

export default Proveedores