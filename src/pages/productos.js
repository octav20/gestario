import axios from 'axios'
import Layout from 'components/Layout'
import ProductoForm from 'components/ProductoForm'
import ProductosList from 'components/ProductosList'
import React from 'react'
function productos({ productos }) {
  return (
    <Layout>
      <div className='flex flex-row justify-between '>
        <ProductoForm></ProductoForm>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-1">
          <table className="w-min text-sm text-left text-gray-500 dark:text-gray-400">
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
                  Precio Venta
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
              </tr>
            </thead>
            {productos.map(item => (
              <ProductosList producto={item} key={item.idProducto}></ProductosList>
            ))}
            {/* Usa parentesis en lugar de corchetes */}
          </table>
        </div>
      </div>
    </Layout>
  )
}
export const getServerSideProps = async (context) => {
  const { data: productos } = await axios.get(
    `http://localhost:3000/api/productos`
  );

  return {
    props: {
      productos,
    },
  };
};

export default productos