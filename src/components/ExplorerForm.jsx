import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAddCity } from "../lib/useAddCity";

function ExplorerForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState, setValue } = useForm();

  const { addCity, isLoading } = useAddCity();
  function onSubmit(formData) {
    console.log(formData);
    addCity(formData, { onSuccess: () => reset() });
  }

  // error handling
  const { errors } = formState;

  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // reverse geocoding
  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode";
  const API_KEY = "bdc_c8c8afbef0934aebb421402fa3dfb4af";
  const [cityName, setCityName] = useState("");
  const [countryCode, setCountryCode] = useState("");

  // FIXME: error handling

  useEffect(
    function () {
      async function fetchCityData() {
        const res = await fetch(
          `${BASE_URL}?latitude=${lat}&longitude=${lng}&key=${API_KEY}`
        );
        const data = await res.json();
        console.log(data);
        setCityName(data.locality);
        setCountryCode(data.countryCode);

        setValue("location", data.locality);
        setValue("lat", lat);
        setValue("lng", lng);
      }
      fetchCityData();
    },
    [lat, lng, setValue]
  );

  if (!countryCode) return <p>👋 There is no city here. Try somewhere else</p>;

  return (
    <form className="p-2 bg-stone-100" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-8 text-2xl">
        Add <span className="font-semibold">{cityName}</span> to your list!
      </h2>
      <div className="grid grid-cols-[150px_1fr] gap-y-8 gap-x-3 mb-6">
        <label className="text-xl font-semibold" htmlFor="location">
          Location
        </label>
        <input
          className="w-full p-1 ml-auto"
          placeholder="Location"
          id="location"
          value={cityName}
          {...register("location", {
            required: "This field is required",
          })}
        />
        {errors?.location?.message && <p>{errors?.location?.message}</p>}

        <label className="block mb-3 text-xl font-semibold" htmlFor="places">
          Imp. places
        </label>
        <input
          placeholder="Important places you visited"
          id="places"
          {...register("places", {
            required: "This field is required",
          })}
        />

        <label className="block mb-3 text-xl font-semibold" htmlFor="notes">
          Notes
        </label>
        <textarea
          placeholder="Notes"
          id="notes"
          {...register("notes", {
            required: "This field is required",
          })}
        />

        <label className="block mb-3 text-xl font-semibold" htmlFor="visit">
          Rate visit
        </label>
        <select
          placeholder="Visit"
          id="visit"
          {...register("rate", {
            required: "This field is required",
          })}
        >
          <option value="amazing">Amazing!</option>
          <option value="great">Great</option>
          <option value="okay">It was okay</option>
          <option value="terrible">Terrible</option>
        </select>

        {/* hidden input */}
        <input type="hidden" value={lat} {...register("lat")} />
        <input type="hidden" value={lng} {...register("lng")} />
      </div>
      <div className="flex justify-between">
        <Link
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="px-5 py-3 font-semibold bg-blue-400"
        >
          &larr; Back
        </Link>
        <button
          className="px-5 py-3 font-semibold bg-emerald-400 disabled:cursor-not-allowed"
          onClick={handleSubmit(onSubmit)}
        >
          ADD
        </button>
      </div>
    </form>
  );
}

export default ExplorerForm;
