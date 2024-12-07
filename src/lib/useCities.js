import { useQuery } from "@tanstack/react-query";
import { getCities } from "./data-service";

export function useCities() {
  const {
    isLoading,
    error,
    data: cities,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
  return { isLoading, error, cities };
}
