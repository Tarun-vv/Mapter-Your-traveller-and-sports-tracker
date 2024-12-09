import { NavLink } from "react-router-dom";
import { useMode } from "../hooks/ModeContext";

function AppNav() {
  const { handleExplorer, handleSportsMode } = useMode();

  return (
    <ul className="justify-center mb-10 lg:flex-row sm:gap-3 sm:flex-col lg:flex">
      <li>
        <NavLink
          to="explorer"
          className="px-6 py-1 lg:text-xl nav-link hover:cursor-pointer md:text-lg"
          onClick={handleExplorer}
        >
          🧳 Explorer mode
        </NavLink>
      </li>
      <li>
        <NavLink
          to="sports-mode"
          className="px-6 py-1 lg:text-xl nav-link hover:cursor-pointer md:text-lg"
          onClick={handleSportsMode}
        >
          🏃‍♂️ Sports mode
        </NavLink>
      </li>
    </ul>
  );
}

export default AppNav;
