import { HiTrash } from "react-icons/hi";
import { useSports } from "../lib/useSports";
import { formatDate } from "../utils/formatDate";

function SportsList() {
  const { isLoading, error, sports } = useSports();

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
          <p className="text-xl font-medium mb-3">
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
          <button className="absolute top-2 right-2 p-1 bg-stone-200 rounded-full hover:bg-slate-300">
            <HiTrash className="text-md" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SportsList;
