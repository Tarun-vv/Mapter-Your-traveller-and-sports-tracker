import { Link, useNavigate } from "react-router-dom";

function SportsForm() {
  const navigate = useNavigate();

  return (
    <div className="bg-stone-100  p-2">
      <h2 className="text-2xl mb-8">Where do you want to train today?</h2>
      <div className="grid grid-cols-[150px_1fr] gap-y-8 gap-x-3 mb-6">
        <label className="font-semibold text-xl">Location</label>
        <input className="p-1 ml-auto w-full" placeholder="Location" />

        <label className="font-semibold text-xl ">Which sport?</label>
        <select className="p-1" placeholder="Location">
          <option>Swimming</option>
          <option>Running</option>
          <option>Cycling</option>
        </select>

        <label className="font-semibold text-xl block mb-3">Distance</label>
        <input placeholder="Distance" />

        <label className="font-semibold text-xl block mb-3">Time</label>
        <input placeholder="Time" />

        <label className="font-semibold text-xl block mb-3">
          Average speed
        </label>
        <input placeholder="Avg speed" />
      </div>
      <div className="flex justify-between">
        <Link
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="px-5 py-3 bg-blue-400 font-semibold"
        >
          &larr; Back
        </Link>
        <Link className="px-5 py-3 bg-emerald-400 font-semibold">ADD</Link>
      </div>
    </div>
  );
}

export default SportsForm;
