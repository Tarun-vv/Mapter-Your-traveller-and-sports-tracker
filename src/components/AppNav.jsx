import { Link, NavLink } from "react-router-dom";

function AppNav() {
  return (
    <ul className="flex justify-center mb-14">
      <li>
        <NavLink
          to="explorer"
          className="px-6 py-1 text-xl nav-link hover:cursor-pointer"
        >
          🧳 Explorer mode
        </NavLink>
      </li>
      <li>
        <NavLink
          to="sports-mode"
          className="px-6 py-1 text-xl nav-link hover:cursor-pointer"
        >
          🏃‍♂️ Sports mode
        </NavLink>
      </li>
    </ul>
  );
}

export default AppNav;
