import { useCities } from "../lib/useCities";

function CityList() {
  const { cities, isLoading, error } = useCities();

  if (isLoading) return <p>Loading cities...</p>;

  return (
    <ul className="flex flex-col gap-5 overflow-auto h-[400px]">
      {cities?.map((city) => (
        <li
          className="px-6 py-3 bg-stone-100 hover:cursor-pointer"
          key={city.id}
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
        </li>
      ))}
    </ul>
  );
}

export default CityList;
