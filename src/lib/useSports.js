import { useQuery } from "@tanstack/react-query";
import { getSports } from "./data-service";

export function useSports() {
  const {
    isLoading,
    error,
    data: sports,
  } = useQuery({
    queryKey: ["sports"],
    queryFn: getSports,
  });

  return { isLoading, error, sports };
}
