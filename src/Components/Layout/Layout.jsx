import { Outlet } from "react-router-dom"
import { MainNavBar } from "../Pages/Shared/Navbar/MainNavBar";


const Layout = () => {
  return (
    <div >
      <MainNavBar />
      <Outlet />
    </div>
  );
}

export default Layout