import { HiTrash } from "react-icons/hi";
import { useCities } from "../lib/useCities";
import { useDeleteCity } from "../lib/useDeleteCity";
import { useNavigate } from "react-router-dom";

function CityList() {
  const navigate = useNavigate();

  const { cities, isLoading, error } = useCities();

  const { deleteCity, isLoading: isDeleting } = useDeleteCity();

  if (isLoading) return <p>Loading cities...</p>;

  return (
    <ul className="flex flex-col gap-5 overflow-auto h-[400px]">
      {cities?.map((city) => (
        <li
          className="relative px-6 py-3 bg-stone-100 hover:cursor-pointer"
          key={city.id}
          onClick={() => navigate(`?lat=${city.lat}&lng=${city.lng}`)}
        >
          <p className="text-lg font-semibold">{city.location}</p>
          <ul>
            <li>
              Your rating:{" "}
              {city.rate.slice(0, 1).toUpperCase() + city.rate.slice(1)}
            </li>
            <li>Places you visited: {city.places}</li>
            <li>Notes: {city.notes}</li>
          </ul>
          <button
            className="absolute p-2 rounded-full top-3 right-3 bg-slate-200 hover:bg-slate-300"
            onClick={(e) => {
              e.preventDefault();
              deleteCity(city.id);
            }}
          >
            <HiTrash className="text-lg" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
