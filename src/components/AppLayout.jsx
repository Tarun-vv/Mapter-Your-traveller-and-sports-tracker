import { useState } from "react";
import { useMode } from "../hooks/ModeContext";
import Map from "./Map";
import Sidebar from "./Sidebar";
import SportsMap from "./SportsMap";

import { IoMenuOutline } from "react-icons/io5";

function AppLayout() {
  const { mode } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`grid  ${
        isOpen ? "grid-cols-[550px_1fr]" : "grid-cols-[auto_1fr]"
      } h-screen`}
    >
      {isOpen ? (
        <Sidebar onOpen={handleIsOpen} />
      ) : (
        <div className="flex flex-col gap-5 px-3 py-4">
          <div className="text-3xl">🧭</div>
          <div className="text-3xl">
            <IoMenuOutline onClick={handleIsOpen} />
          </div>
        </div>
      )}
      {mode === "sports-mode" ? <SportsMap /> : <Map />}
    </div>
  );
}

export default AppLayout;
