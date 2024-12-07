import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCity as addCityApi } from "./data-service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useAddCity() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: addCity, isLoading } = useMutation({
    mutationFn: (newCity) => addCityApi(newCity),
    onSuccess: () => {
      toast.success("City successfully added!");
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
      navigate("/app/explorer/cities");
    },
    onError: () => {
      toast.success("City could not be added");
    },
  });

  return { addCity, isLoading };
}
