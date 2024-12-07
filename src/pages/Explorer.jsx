import { Link, NavLink, Outlet } from "react-router-dom";

function Explorer() {
  return (
    <div>
      <ul className="flex justify-center mb-10">
        <li>
          <NavLink
            to="cities"
            className="px-6 py-1 text-lg nav-link hover:cursor-pointer"
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="countries"
            className="px-6 py-1 text-lg nav-link hover:cursor-pointer"
          >
            Countries
          </NavLink>
        </li>
      </ul>
      <Outlet />
      
    </div>
  );
}

export default Explorer;
