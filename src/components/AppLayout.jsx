import Map from "./Map";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid lg:grid-cols-[550px_1fr] grid-cols-1 h-screen">
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
