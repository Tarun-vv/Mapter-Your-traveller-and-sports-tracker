import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useSports } from "../lib/useSports";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useMode } from "../hooks/ModeContext";
import { useCities } from "../lib/useCities";

function SportsMap() {
  const { sports } = useSports();
  const { cities } = useCities();

  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const params = useParams();
  console.log(params);

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(() => {}, []);

  return (
    <div className="h-full">
      <MapContainer
        center={mapPosition}
        zoom={3}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sports?.map((sport) => (
          <Marker position={[sport.lat, sport.lng]} key={sport.id}>
            <Popup>
              <span className="text-lg">
                {sport.sport === "Swimming"
                  ? "🏊‍♂️"
                  : sport.sport === "Running"
                  ? "🏃‍♂️"
                  : "🚴"}{" "}
                <span className="font-bold">{sport.distance}</span> miles
              </span>
            </Popup>
          </Marker>
        ))}
        {/* {cities?.map((city) => (
          <Marker position={[city.lat, city.lng]} key={city.id}>
            <Popup>
              <span className="text-lg">{city.location}</span>
            </Popup>
          </Marker>
        ))} */}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  const { mode } = useMode();
  {
    useMapEvents({
      click: (e) =>
        navigate(`/app/${mode}/form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
  }
}

export default SportsMap;
