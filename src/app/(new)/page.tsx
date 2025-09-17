import InfiniteList from "@/features/infinite-list/infinite-list";
import { RiHome6Line } from "@remixicon/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New stories",
  description: "Discover the latest submissions in the Hacker News community.",
};

export default function Page() {
  return (
    <InfiniteList
      title="New"
      description="Discover the latest submissions in the Hacker News community."
      queryKey="new-list"
      endpoint="https://hacker-news.firebaseio.com/v0/newstories.json"
      icon={<RiHome6Line />}
    />
  );
}
