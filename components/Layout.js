import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AsideBar from "./AsideBar";

export default function Layout({ children }) {
  // const [sidebar, setSidebar] = useState(true);
  const router = useRouter();
  const [sideBar, setSideBar] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sidebar = () => {
    if (router.route === "/menu" || router.route === "/" || router.route === "/signup") { setSideBar(false); } else { setSideBar(true); }
  }
  useEffect(() => {
    sidebar()
  }, [sidebar])

  return (
    <>
      <div className="bg-gray-200 h-screen p-10">
        <div className="container mx-auto ">
          {sideBar ? <AsideBar /> : null}
          {children}</div>
      </div>
    </>
  );
}
