import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAddSport } from "../lib/useAddSport";

function SportsForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState } = useForm();
  const { addSport, isLoading } = useAddSport();
  function onSubmit(formData) {
    console.log(formData);
    addSport(formData, { onSuccess: () => reset() });
    navigate("/app/sports-mode");
  }

  // error handling
  const { errors } = formState;

  const [searchParams, setSearchParams] = useSearchParams();
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
      }
      fetchCityData();
    },
    [lat, lng]
  );

  if (!countryCode) return <p>👋 There is no city here. Try somewhere else</p>;

  return (
    <form className="p-2 bg-stone-100" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-8 text-2xl">Where do you want to train today?</h2>
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
          disabled={isLoading}
        />
        {errors?.location?.message && <p>{errors?.location?.message}</p>}

        <label className="text-xl font-semibold ">Which sport?</label>
        <select
          className="p-1"
          placeholder="Sport"
          htmlFor="sport"
          {...register("sport", {
            required: "This field is required",
          })}
          disabled={isLoading}
        >
          <option value="Swimming" id="sport">
            Swimming
          </option>
          <option value="Running" id="sport">
            Running
          </option>
          <option value="Cycling" id="sport">
            Cycling
          </option>
        </select>

        <label className="block mb-3 text-xl font-semibold" htmlFor="distance">
          Distance
        </label>
        <input
          placeholder="Distance"
          id="distance"
          {...register("distance", {
            required: "This field is required",
          })}
          disabled={isLoading}
        />

        <label className="block mb-3 text-xl font-semibold" htmlFor="time">
          Time
        </label>
        <input
          placeholder="Time"
          id="time"
          {...register("time", {
            required: "This field is required",
          })}
          disabled={isLoading}
        />

        <label className="block mb-3 text-xl font-semibold" htmlFor="speed">
          Average speed
        </label>
        <input
          placeholder="Avg speed"
          id="speed"
          {...register("speed", {
            required: "This field is required",
          })}
          disabled={isLoading}
        />

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
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
}

export default SportsForm;
