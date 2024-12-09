import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";

import { IoChevronBack } from "react-icons/io5";

function Sidebar({ onOpen }) {
  return (
    <div className="flex flex-col justify-between p-4 ">
      <div>
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <IoChevronBack className="text-2xl" onClick={onOpen} />
        </div>

        <AppNav />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Sidebar;
