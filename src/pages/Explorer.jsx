import { Link, Outlet } from "react-router-dom";

function Explorer() {
  return (
    <div>
      <ul className="flex mb-10">
        <li>
          <Link
            to="cities"
            className="px-6 py-1 bg-slate-100 hover:bg-slate-300 hover:cursor-pointer text-lg"
          >
            Cities
          </Link>
        </li>
        <li>
          <Link
            to="countries"
            className="px-6 py-1 bg-slate-100 hover:bg-slate-300 hover:cursor-pointer text-lg"
          >
            Countries
          </Link>
        </li>
      </ul>
      <Outlet />
      
    </div>
  );
}

export default Explorer;
