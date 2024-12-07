import { useCities } from "../lib/useCities";

function CityList() {
  const { cities, isLoading, error } = useCities();

  if (isLoading) return <p>Loading cities...</p>;

  return (
    <ul className="flex flex-col gap-5 overflow-auto h-[400px]">
      {cities?.map((city) => (
        <li
          className="px-6 py-3 bg-slate-300 hover:cursor-pointer"
          key={city.id}
        >
          {city.location}
          <span>{city.rate}</span>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
