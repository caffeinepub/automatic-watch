import { useMutation, useQuery } from "@tanstack/react-query";
import type { ContactRequest, Watch } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllWatches() {
  const { actor, isFetching } = useActor();
  return useQuery<Watch[]>({
    queryKey: ["watches"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllWatches();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubscribeNewsletter() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error("Not connected");
      return actor.subscribeNewsletter(email);
    },
  });
}

export function useSubmitContactRequest() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (request: ContactRequest) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactRequest(request);
    },
  });
}
