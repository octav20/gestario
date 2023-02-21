import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AsideBar from "./AsideBar";

export default function Layout({ children }) {
  // const [sidebar, setSidebar] = useState(true);
  const router = useRouter();
  const [sideBar, setSideBar] = useState(true);
  const sidebar = () => {
    if (router.route === "/menu" || router.route === "/" || router.route === "/signup") { setSideBar(false); } else { setSideBar(true); }
  }
  useEffect(() => {
    sidebar()
  }, [])

  return (

    <>
      {/* <NavBar links={""} /> */}

      <div className="bg-gray-200 h-screen p-10">
        <div className="container mx-auto ">
          <AsideBar estilo={`${sideBar ? "" : "hidden"} `}></AsideBar>
          {children}</div>
      </div>
    </>
  );
}
