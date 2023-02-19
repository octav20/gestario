import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function ProductoForm() {
    const [producto, setProducto] = useState({
        codigo: '',
        descripcion: "",
        categoria: ""
    })
    const router = useRouter();
    const handleChange = ({ target: { name, value } }) => {
        setProducto({
            ...producto,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/productos/", producto);
            alert("Producto Agregado");
        }
        catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Registrar Producto</h5>
                <div>
                    <label htmlFor="codigo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo Producto</label>
                    <input type="number" name="codigo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                        value={producto.codigo} />
                </div>
                <div>
                    <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion del Producto</label>
                    <input type="text" name="descripcion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                        value={producto.descripcion} />
                </div>
                <div>
                    <label htmlFor="categoria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria del Producto</label>
                    <input type="text" name="categoria" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                        value={producto.categoria} />
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar Producto</button>

            </form>
        </div>


    )
}

export default ProductoForm