import axios from 'axios';
import Layout from 'components/Layout';
import ProductoForm from 'components/ProductoForm';
import ProductosList from 'components/ProductosList';
import React, { useState } from 'react';
function Productos({ productos }) {
  const [productosArr, setProductosArr] = useState(productos);
  const handleSubmitProducto = (producto) => {

    const products = [...productosArr];
    products.push({ codigo: producto.codigo, descripcion: producto.descripcion, categoria: producto.categoria });
    setProductosArr(products);

  };
  return (
    <Layout>
      <div className='flex flex-row justify-between '>
        <ProductoForm handleSubmitProducto={handleSubmitProducto} />
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
            {productosArr.map(item => (
              <ProductosList producto={item} key={item.codigo}></ProductosList>
            ))}
            {/* Usa parentesis en lugar de corchetes */}
          </table>
        </div>
      </div>
    </Layout>
  );
}
export const getServerSideProps = async (context) => {
  const reqUrl = context.req.headers["referer"];
  const url = new URL(reqUrl);
  const { data: productos } = await axios.get(
    `${url.origin}/api/productos`
  );

  return {
    props: {
      productos,
    },
  };
};

export default Productos;