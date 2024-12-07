import { HiTrash } from "react-icons/hi";
import { useSports } from "../lib/useSports";
import { formatDate } from "../utils/formatDate";
import { useDeleteSport } from "../lib/useDeleteSport";
import { Link } from "react-router-dom";

function SportsList() {
  const { isLoading, error, sports } = useSports();

  const { deleteSport, isLoading: isDeleting } = useDeleteSport();
  function onDeleteSport(id) {
    deleteSport(id);
  }

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="bg-stone-100 flex flex-col gap-5 p-5 overflow-auto h-[450px]">
      {sports.map((sport) => (
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
  );
}

export default SportsList;
