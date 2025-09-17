import InfiniteList from "@/features/infinite-list/infinite-list";
import { RiEyeLine } from "@remixicon/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Show stories",
  description:
    "Showcase your projects, products, and discoveries to the Hacker News audience.",
};

export default function ShowPage() {
  return (
    <InfiniteList
      title="Show"
      description="Showcase your projects, products, and discoveries to the Hacker News audience."
      queryKey="show-list"
      endpoint="https://hacker-news.firebaseio.com/v0/showstories.json"
      icon={<RiEyeLine />}
    />
  );
}
