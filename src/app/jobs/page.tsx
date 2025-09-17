import InfiniteList from "@/features/infinite-list/infinite-list";
import { RiBriefcase3Line } from "@remixicon/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs stories",
  description:
    "Connect with top tech job opportunities and company hiring posts.",
};

export default function JobsPage() {
  return (
    <InfiniteList
      title="Jobs"
      description="Connect with top tech job opportunities and company hiring posts."
      queryKey="job-list"
      endpoint="https://hacker-news.firebaseio.com/v0/jobstories.json"
      icon={<RiBriefcase3Line />}
    />
  );
}
