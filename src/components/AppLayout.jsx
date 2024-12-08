import { useMode } from "../hooks/ModeContext";
import Map from "./Map";
import Sidebar from "./Sidebar";
import SportsMap from "./SportsMap";

function AppLayout() {
  const { mode } = useMode();

  return (
    <div className="grid lg:grid-cols-[550px_1fr] grid-cols-1 h-screen">
      <Sidebar />
      {mode === "sports-mode" ? <SportsMap /> : <Map />}
    </div>
  );
}

export default AppLayout;
