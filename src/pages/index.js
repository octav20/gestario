import Link from 'next/link'
import React from 'react'
function Home() {
  return (
    <div>
      <div className="h-full flex flex-col bg-gray-100 dark:bg-gray-700 shadow-xl m-10" style={{  borderRadius: "10px"}}>
        <div className="grid justify-evenly bg-gray700 dark:bg-gray-700 m-3 grid-cols-3" >
          <div className="col-span-1 bg-gray-300  p-3 border-solid hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
            <div className="flex flex-col items-center ">
              <Link href="/"> <button className="tr-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg font-medium">Mi Perfil</span>
              </button></Link>
            </div>
          </div>
          <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
            <div className="flex flex-col items-center ">
              <Link href="/"> <button className="tr-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-lg font-medium">Mis dinero</span>
              </button>
              </Link>
            </div>
          </div>
          <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
            <div className="flex flex-col items-center ">
              <Link href="/"> <button className="tr-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <span className="text-lg font-medium">Mis referidos</span>
              </button></Link>
            </div>
          </div>
          <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
            <div className="flex flex-col items-center ">
              <Link href="/">
                <button className="tr-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-lg font-medium">Mis facturas</span>
                </button></Link>
            </div>
          </div>
          <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
            <div className="flex flex-col items-center ">
              <Link href="/"> <button className="tr-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg font-medium">Ayuda</span>
              </button></Link>
            </div>
          </div>
          <div className="col-span-1 bg-gray-300  p-3  hover:bg-gray-400 transition-all" style={{ border: "solid", borderRadius: "10px", margin: "10px" }}>
            <div className="flex  flex-col items-center ">
              <Link href="/"> <button className="tr-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="text-lg font-medium">Salir</span>
              </button></Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home