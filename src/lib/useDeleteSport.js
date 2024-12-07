import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSport as deleteSportApi } from "./data-service";
import toast from "react-hot-toast";

export function useDeleteSport() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteSport } = useMutation({
    mutationFn: (id) => deleteSportApi(id),
    onSuccess: () => {
      toast.success("Sport successfuly deleted");
      queryClient.invalidateQueries({
        queryKey: ["sports"],
      });
    },
    onError: () => toast.error("Sport could not be deleted"),
  });

  return { isLoading, deleteSport };
}
