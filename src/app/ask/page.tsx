import InfiniteList from "@/features/infinite-list/infinite-list";
import { RiSpeakLine } from "@remixicon/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask stories",
  description:
    "Explore community-driven Q&A where users seek insights and advice.",
};

export default function AskPage() {
  return (
    <InfiniteList
      title="Ask"
      description="Explore community-driven Q&A where users seek insights and advice."
      queryKey="ask-list"
      endpoint="https://hacker-news.firebaseio.com/v0/askstories.json"
      icon={<RiSpeakLine />}
    />
  );
}
