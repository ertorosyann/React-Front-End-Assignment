import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="h-[90vh]">
        <Outlet />
      </main>
    </>
  );
}
