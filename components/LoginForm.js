import axios from "axios";
import Link from "next/link";
import { useRouter, } from "next/router";
import { useEffect, useState } from "react";
function LoginForm() {
    const [usuario, setUsuario] = useState({
        nombreUsuario: '',
        clave: ""
    })
    const router = useRouter();
    const handleChange = ({ target: { name, value } }) => {
        setUsuario({
            ...usuario,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/login/", usuario);
            alert("Has iniciado sesion");
            router.push("/menu");
        }
        catch (error) {
            alert("Usuario o contraseña incorrectos");
            console.log(error);
        }
    };

    return (

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Iniciar Sesion</h5>
                <div>
                    <label htmlFor="nombreUsuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de usuario</label>
                    <input type="text" name="nombreUsuario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                        value={usuario.nombreUsuario} />
                </div>
                <div>
                    <label htmlFor="clave" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                    <input type="password" name="clave" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}
                        value={usuario.clave} />
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar Sesion</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Aun no tienes una cuenta? <Link href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Crear una cuenta</Link>
                </div>
            </form>
        </div>


    )
}

export default LoginForm