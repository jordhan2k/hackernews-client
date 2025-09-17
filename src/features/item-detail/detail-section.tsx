import MetaTag from "@/components/meta-tag";
import { getRelativeTime } from "@/lib/utils";
import { IItem } from "@/types/item.type";
import {
  RiArrowUpDoubleLine,
  RiChat2Line,
  RiPenNibLine,
  RiTimeLine,
} from "@remixicon/react";
import parse from "html-react-parser";
import { Suspense } from "react";
import { Poll, PollSkeleton } from "./poll";

type DetailSectionProps = {
  item: IItem;
};

function DetailSection({ item }: DetailSectionProps) {
  const { time, text, by, kids, score, title, type, id, parts } = item;
  return (
    <section className="flex flex-col gap-9 md:gap-12">
      <div className="flex flex-col gap-6 md:gap-4">
        <h1 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
          {title}
        </h1>
        <div className="flex flex-wrap gap-3">
          <MetaTag
            size="md"
            icon={RiArrowUpDoubleLine}
            content={`${score} points`}
          />
          <MetaTag
            size="md"
            icon={RiPenNibLine}
            content={
              <>
                by <span className="font-medium text-orange-500">{by}</span>
              </>
            }
          />
          <MetaTag
            size="md"
            icon={RiTimeLine}
            content={getRelativeTime(time)}
          />
          <MetaTag
            icon={RiChat2Line}
            size="md"
            content={`${kids?.length ?? 0} comments`}
          />
        </div>
      </div>
      {text ? (
        <div className="text-base font-normal text-neutral-600 md:text-lg flex flex-col gap-6">
          {parse(text)}
        </div>
      ) : null}

      {type === "poll" && parts?.length ? (
        <Suspense fallback={<PollSkeleton length={parts.length} />}>
          <Poll id={id} pollOptions={parts} />
        </Suspense>
      ) : null}
    </section>
  );
}

export default DetailSection;
