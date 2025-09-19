"use client";

import { Button } from "@/components/ui/button";
import { ListHeader } from "@/features/infinite-list/components/list-header";
import {
  ListItem,
  ListItemSkeleton,
} from "@/features/infinite-list/components/list-item";
import { RiArrowDownLine } from "@remixicon/react";
import { ReactNode } from "react";
import EmptyIndicator from "./components/empty-indicator";
import ErrorIndicator from "./components/error-indicator";
import LoadingIndicator from "./components/loading-indicator";
import { useInfiniteList } from "./use-infinite-list";

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
  } = useInfiniteList(queryKey, endpoint);

  const mergedData = data?.pages?.flatMap((p) => p.data);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!isFetching && !!error) {
    return <ErrorIndicator />;
  }

  if (!isFetching && !mergedData?.length) {
    return <EmptyIndicator icon={icon} />;
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
              <RiArrowDownLine />
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default InfiniteList;
