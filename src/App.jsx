import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Explorer from "./pages/Explorer";
import CityList from "./components/CityList";
import SportsList from "./components/SportsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="/explorer" />} />
            <Route path="explorer" element={<Explorer />}>
              <Route index element={<CityList />} />
              <Route path="cities" element={<CityList />} />
              <Route path="countries" element={<p>Countries</p>} />
              <Route path="form" element={<p>Form</p>} />
            </Route>
            <Route path="sports-mode">
              <Route index element={<SportsList />} />
              <Route path="form" element={<p>Form sports</p>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
