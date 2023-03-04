import axios from 'axios'
import Layout from 'components/Layout'
import NavBar from 'components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
function Menu() {
    const router = useRouter();
    const logout = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/logout");
            console.log(res);
            router.push("/");

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <NavBar />

            <Layout>
                <div className="h-full flex flex-col bg-gray-100 dark:bg-gray-700 shadow-xl m-10" style={{ borderRadius: "10px" }}>
                    <div className="grid justify-evenly bg-gray700 dark:bg-gray-700 m-3 grid-cols-3" >
                        <div className="col-span-1 bg-gray-300  p-3 border-solid hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
                            <div className="flex flex-col items-center ">
                                <Link href="/productos"> <button className="tr-300 " style={{ textAlign: "-webkit-center" }}>
                                    <Image src="/iconoProductos.png" alt="" width={42} height={42}></Image>
                                    <span className="text-lg font-medium">Productos</span>
                                </button></Link>
                            </div>
                        </div>
                        <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
                            <div className="flex flex-col items-center ">
                                <Link href="/salidas"> <button className="tr-300" style={{ textAlign: "-webkit-center" }}>
                                    <Image src="/iconoSalidas.png" alt="" width={42} height={42}></Image>
                                    <span className="text-lg font-medium">Salidas</span>
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
                            <div className="flex flex-col items-center ">
                                <Link href="/entradas"> <button className="tr-300" style={{ textAlign: "-webkit-center" }}>
                                    <Image src="/iconoEntradas.png" alt="" width={42} height={42}></Image>
                                    <span className="text-lg font-medium">Entradas</span>
                                </button></Link>
                            </div>
                        </div>
                        <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
                            <div className="flex flex-col items-center ">
                                <Link href="/proveedores">
                                    <button className="tr-300" style={{ textAlign: "-webkit-center" }}>
                                        <Image src="/iconoProveedores.png" alt="" width={42} height={42}></Image>
                                        <span className="text-lg font-medium">Proveedores</span>
                                    </button></Link>
                            </div>
                        </div>
                        <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
                            <div className="flex flex-col items-center ">
                                <Link href="/inventario"> <button className="tr-300" style={{ textAlign: "-webkit-center" }}>
                                    <Image src="/iconoInventario.png" alt="" width={42} height={42}></Image>
                                    <span className="text-lg font-medium">Inventario</span>
                                </button></Link>
                            </div>
                        </div>
                        <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
                            <div className="flex  flex-col items-center ">
                                <button className="tr-300" style={{ textAlign: "-webkit-center" }} onClick={logout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>

                                    <span className="text-lg font-medium">Salir</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>





            </Layout>
            <footer className="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="#" className="hover:underline">Gestario™</Link>. Todos los derechos reservados.
                </span>
                {/* <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul> */}
            </footer>
        </>
    )
}

export default Menu