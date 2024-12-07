import { HiTrash } from "react-icons/hi";
import { useSports } from "../lib/useSports";
import { formatDate } from "../utils/formatDate";
import { useDeleteSport } from "../lib/useDeleteSport";
import { Link, useSearchParams } from "react-router-dom";

function SportsList() {
  const { isLoading, error, sports } = useSports();

  const { deleteSport, isLoading: isDeleting } = useDeleteSport();
  function onDeleteSport(id) {
    deleteSport(id);
  }

  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(filter) {
    searchParams.set("sport", filter);
    setSearchParams(searchParams);
  }

  const filterValue = searchParams.get("sport") || "all";
  let filterCabins;

  if (filterValue === "all") {
    filterCabins = sports;
  } else if (filterValue === "swimming") {
    filterCabins = sports.filter((sport) => sport.sport === "Swimming");
  } else if (filterValue === "running") {
    filterCabins = sports.filter((sport) => sport.sport === "Running");
  } else if (filterValue === "cycling") {
    filterCabins = sports.filter((sport) => sport.sport === "Cycling");
  }

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <div className="flex items-center justify-end gap-4 mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => handleClick("all")}
            className="px-4 py-2 text-sm bg-stone-300"
          >
            All
          </button>
          <button
            onClick={() => handleClick("swimming")}
            className="px-4 py-2 text-sm bg-blue-400"
          >
            Swimming
          </button>
          <button
            onClick={() => handleClick("running")}
            className="px-4 py-2 text-sm bg-emerald-400"
          >
            Running
          </button>
          <button
            onClick={() => handleClick("cycling")}
            className="px-4 py-2 text-sm bg-red-400"
          >
            Cycling
          </button>
        </div>
      </div>
      <ul className="bg-stone-100 flex flex-col gap-5 p-5 overflow-auto h-[450px]">
        {filterCabins?.map((sport) => (
          <li
            className={`${
              sport.sport === "Swimming"
                ? "bg-blue-300"
                : sport.sport === "Running"
                ? "bg-emerald-300"
                : "bg-red-300"
            } p-2 relative`}
            key={sport.id}
          >
            <Link to={`?lat=${sport.lat}&lng=${sport.lng}`}>
              <p className="mb-3 text-xl font-medium">
                <span className="font-semibold">{sport.sport}</span> on{" "}
                {formatDate(sport.date)}, {sport.location}
              </p>
              <ul className="flex gap-8">
                <li className="text-lg">
                  {sport.sport === "Swimming"
                    ? "🏊‍♂️"
                    : sport.sport === "Running"
                    ? "🏃‍♂️"
                    : "🚴"}{" "}
                  <span className="font-bold">{sport.distance}</span> miles
                </li>
                <li className="text-lg">
                  ⏱️ <span className="font-bold">{sport.time}</span> min
                </li>
                <li className="text-lg">
                  ⚡️ <span className="font-bold">{sport.speed}</span> avg speed
                </li>
              </ul>
              <button className="absolute p-1 rounded-full top-2 right-2 bg-stone-200 hover:bg-slate-300">
                <HiTrash
                  className="text-md"
                  onClick={() => onDeleteSport(sport.id)}
                />
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SportsList;
