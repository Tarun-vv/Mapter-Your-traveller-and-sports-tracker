import { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { getSports } from "../lib/data-service";
import { useSports } from "../lib/useSports";
import { useNavigate } from "react-router-dom";

function Map() {
  const { sports } = useSports();

  return (
    <div className="h-full">
      <MapContainer
        center={[40, 0]}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full w-full"
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
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function DetectClick() {
  const navigate = useNavigate();
  {
    useMapEvents({ click: (e) => navigate("/app/sports-mode/form") });
  }
}

export default Map;
