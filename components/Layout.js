import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar links={""} />

      <div className="bg-gray-200 h-screen p-10">
        <div className="container mx-auto ">{children}</div>
      </div>
    </>
  );
}
