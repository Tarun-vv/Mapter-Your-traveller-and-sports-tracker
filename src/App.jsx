import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Explorer from "./pages/Explorer";
import CityList from "./components/CityList";
import SportsList from "./components/SportsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SportsForm from "./components/SportsForm";
import { Toaster } from "react-hot-toast";
import ExplorerForm from "./components/ExplorerForm";
import Login from "./components/Login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Toaster
        position="top-end"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#F4F4F5",
            color: "#3F3F46",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="explorer" />} />
            <Route path="explorer" element={<Explorer />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="form" element={<ExplorerForm />} />
            </Route>
            <Route path="sports-mode">
              <Route index element={<SportsList />} />
              <Route path="form" element={<SportsForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
