import Layout from 'components/Layout'
import NavBar from 'components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
function menu() {
    return (
        <>
            <NavBar links={""}></NavBar>

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
                                <Link href="/"> <button className="tr-300" style={{ textAlign: "-webkit-center" }}>
                                    <Image src="/iconoEntradas.png" alt="" width={42} height={42}></Image>
                                    <span className="text-lg font-medium">Salir</span>
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default menu