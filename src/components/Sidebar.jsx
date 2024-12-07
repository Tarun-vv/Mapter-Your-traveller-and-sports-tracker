import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className="flex flex-col justify-between p-4 ">
      <div>
        <Logo />
        <AppNav />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Sidebar;
