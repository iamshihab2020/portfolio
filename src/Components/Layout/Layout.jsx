import { Outlet } from "react-router-dom"
import { MainNavBar } from "../Pages/Shared/Navbar/MainNavBar";
import { FooterCamp } from "../Pages/Shared/FooterComp/FooterCamp";


const Layout = () => {
  return (
    <div className="bg-primary-900">
      <MainNavBar />
      <Outlet />
      <FooterCamp/>
    </div>
  );
}

export default Layout