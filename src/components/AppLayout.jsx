import Map from "./Map";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[550px_1fr] h-screen">
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
