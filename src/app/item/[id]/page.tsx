import { fetchItemDetail } from "@/features/item-detail/action";
import CommentSection from "@/features/item-detail/comment-section";
import BackButton from "@/features/item-detail/components/back-button";
import DetailSection from "@/features/item-detail/detail-section";
import type { IItem } from "@/types/item.type";
import type { Metadata } from "next";

type ItemPageProps = {
  params: Promise<{ id: string }>;
};

// poll detail: 127203
// ask: 45251624

export const revalidate = 60 * 60; // revalidate at most every hour
export const dynamicParams = true; // like fallback: true

export async function generateMetadata({
  params,
}: ItemPageProps): Promise<Metadata> {
  const { id } = await params;
  const item: IItem = await fetchItemDetail({ id: Number(id) });
  return {
    title: item.title,
  };
}

export async function generateStaticParams() {
  const res: number[] = await fetch(
    `https://hacker-news.firebaseio.com/v0/newstories.json`,
  ).then((data) => data.json());
  return res.map((item) => ({
    id: item.toString(),
  }));
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { id } = await params;
  const result: IItem = await fetchItemDetail({ id: Number(id) });

  return (
    <div className="w-full">
      <BackButton />
      <div className="py-6 px-4 md:py-10 md:px-8 xl:px-0 xl:max-w-[890px] w-full xl:mx-auto flex flex-col gap-12 xl:gap-10 overflow-x-auto">
        <DetailSection item={result} />
        <CommentSection
          descendants={result.descendants ?? 0}
          kids={result.kids ?? []}
        />
      </div>
    </div>
  );
}
