import { NavLink } from "react-router-dom";
import { useMode } from "../hooks/ModeContext";

function AppNav() {
  const { handleExplorer, handleSportsMode } = useMode();

  return (
    <ul className="flex justify-center mb-10">
      <li>
        <NavLink
          to="explorer"
          className="px-6 py-1 text-xl nav-link hover:cursor-pointer"
          onClick={handleExplorer}
        >
          🧳 Explorer mode
        </NavLink>
      </li>
      <li>
        <NavLink
          to="sports-mode"
          className="px-6 py-1 text-xl nav-link hover:cursor-pointer"
          onClick={handleSportsMode}
        >
          🏃‍♂️ Sports mode
        </NavLink>
      </li>
    </ul>
  );
}

export default AppNav;
