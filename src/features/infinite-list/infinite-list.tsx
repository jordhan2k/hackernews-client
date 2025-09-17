"use client";

import { Button } from "@/components/ui/button";
import { ListHeader } from "@/features/infinite-list/components/list-header";
import {
  ListItem,
  ListItemSkeleton,
} from "@/features/infinite-list/components/list-item";
import {
  RiArrowDownLine,
  RiEmotionSadLine,
  RiLoaderLine,
} from "@remixicon/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { fetchNewData } from "./action";

type InfiniteListProps = {
  title: string;
  description: string;
  queryKey: string;
  endpoint: string;
  icon: ReactNode;
};

function InfiniteList({
  description,
  queryKey,
  title,
  endpoint,
  icon,
}: InfiniteListProps) {
  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
    isFetching,
    error,
  } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({ pageParam = 0 }) =>
      fetchNewData({
        start: pageParam,
        endpoint,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => (lastPage.next ? lastPage.next : undefined),
  });

  const mergedData = data?.pages?.flatMap((p) => p.data);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full px-4 md:px-8  xl:px-[6.4rem] xl:py-10">
        <div className="p-6 flex flex-col items-center text-center max-w-[20rem] w-full">
          <div className="size-12 flex items-center justify-center text-orange-500 mb-5">
            <RiLoaderLine className="animate-spin" />
          </div>
          <div className="text-xl font-medium text-neutral-900 mb-2">
            Loading...
          </div>
          <p className="text-base font-normal text-neutral-900 ">
            Almost there! We're setting everything up for you.
          </p>
        </div>
      </div>
    );
  }

  if (!isFetching && !!error) {
    return (
      <div className="flex items-center justify-center h-full px-4 md:px-8  xl:px-[6.4rem] xl:py-10">
        <div className="p-6 flex flex-col items-center text-center max-w-[20rem] w-full">
          <div className="size-12 flex items-center justify-center text-orange-500 mb-5 shadow rounded-full">
            <RiEmotionSadLine />
          </div>
          <div className="text-xl font-medium text-neutral-900 mb-2">
            Unexpected error
          </div>
          <p className="text-base font-normal text-neutral-900 ">
            We're facing some issues at the moment. Please try again later or
            contact support at{" "}
            <a href="mailto:support@codepulse.com" className="text-orange-600">
              support@codepulse.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (!isFetching && !mergedData?.length) {
    return (
      <div className="flex items-center justify-center h-full px-4 md:px-8  xl:px-[6.4rem] xl:py-10">
        <div className="p-6 flex flex-col items-center text-center max-w-[20rem] w-full">
          <div className="size-12 flex items-center justify-center text-orange-500 mb-5 shadow rounded-lg">
            {icon}
          </div>
          <div className="text-xl font-medium text-neutral-900 mb-2">
            No Posts Available
          </div>
          <p className="text-base font-normal text-neutral-900 ">
            Hang tight! We'll have more for you soon. If you believe this is an
            error, feel free to reach out to us.
          </p>

          <Button size="lg" className="w-full mt-5">
            Contact
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <ListHeader title={title} description={description} />
      <div className=" px-4 md:px-8 xl:px-0 w-full flex flex-col justify-center">
        {mergedData?.map((item) => (
          <ListItem key={`item-${item.id}`} {...item} />
        ))}
        {isFetchingNextPage ? (
          <>
            <ListItemSkeleton />
            <ListItemSkeleton />
            <ListItemSkeleton />
          </>
        ) : null}
        {hasNextPage && !isFetchingNextPage ? (
          <div className="px-4 py-6 md:px-0">
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              variant={"secondary"}
              className="w-full md:w-fit "
            >
              More
              {isFetchingNextPage ? (
                <RiLoaderLine className="animate-spin" />
              ) : (
                <RiArrowDownLine />
              )}
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default InfiniteList;
