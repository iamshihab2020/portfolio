import { Outlet } from "react-router-dom"
import { MainNavBar } from "../Pages/Shared/Navbar/MainNavBar";


const Layout = () => {
  return (
    <div className="bg-primary-900">
      <MainNavBar />
      <Outlet />
    </div>
  );
}

export default Layout