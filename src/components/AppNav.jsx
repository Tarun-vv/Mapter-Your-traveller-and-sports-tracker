import { Link, NavLink } from "react-router-dom";

function AppNav() {
  return (
    <ul className="flex mb-14">
      <li>
        <NavLink
          to="explorer"
          className="px-6 py-1 bg-slate-100 hover:bg-slate-300 hover:cursor-pointer text-xl"
        >
          🧳 Explorer mode
        </NavLink>
      </li>
      <li>
        <NavLink
          to="sports-mode"
          className="px-6 py-1 bg-slate-100 hover:bg-slate-300 hover:cursor-pointer text-xl"
        >
          🏃‍♂️ Sports mode
        </NavLink>
      </li>
    </ul>
  );
}

export default AppNav;
