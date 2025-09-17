import BackButton from "@/features/item-detail/back-button";
import CommentSection from "@/features/item-detail/comment-section";
import DetailSection from "@/features/item-detail/detail-section";
import type { IItem } from "@/types/item.type";
import type { Metadata } from "next";

type ItemPageProps = {
  params: Promise<{ id: string }>;
};

// poll detail: 127203

export async function generateMetadata({
  params,
}: ItemPageProps): Promise<Metadata> {
  const { id } = await params;
  const item: IItem = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  ).then((data) => data.json());
  return {
    title: item.title,
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { id } = await params;
  const result: IItem = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  ).then((data) => data.json());

  return (
    <div className="w-full">
      <BackButton />
      <div className="py-6 px-4 md:py-10 md:px-8 xl:px-0 xl:max-w-[890px] w-full xl:mx-auto flex flex-col gap-12 xl:gap-10 overflow-x-auto">
        <DetailSection item={result} />
        <CommentSection kids={result.kids ?? []} />
      </div>
    </div>
  );
}
