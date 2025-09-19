import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchNewData } from "./action";

export const useInfiniteList = (queryKey: string, endpoint: string) => {
  return useInfiniteQuery({
    queryKey: [queryKey, endpoint],
    queryFn: ({ pageParam = 0 }) =>
      fetchNewData({ start: pageParam, endpoint }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => (lastPage.next ? lastPage.next : undefined),
  });
};
