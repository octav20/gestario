import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function ProveedorForm({ proveedores, handleSubmitProveedor }) {
    const [proveedor, setProveedor] = useState({
        numeroDocumento: '',
        nombreCompleto: ""
    });
    const router = useRouter();
    const handleChange = ({ target: { name, value } }) => {
        setProveedor({
            ...proveedor,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/proveedores/", proveedor);
            proveedores.push(proveedor);
            handleSubmitProveedor(proveedor);
            alert("Proveedor Agregado");
        }
        catch (error) {
            alert(error.response.data);
            console.log(error);
        }
    };

    return (

        <div className="w-full h-min max-w-sm p-4 ml-60 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Registrar Proveedor</h5>
                <div>
                    <label htmlFor="numeroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero Documento</label>
                    <input type="number" name="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                        value={proveedor.numeroDocumento} />
                </div>
                <div>
                    <label htmlFor="nombreCompleto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del Proveedor</label>
                    <input type="text" name="nombreCompleto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                        value={proveedor.nombreCompleto} />
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar Proveedor</button>

            </form>
        </div>


    );
}

export default ProveedorForm;