import { getHostname, getRelativeTime } from "@/lib/utils";
import { IItem } from "@/types/item.type";
import {
  RemixiconComponentType,
  RiArrowUpDoubleLine,
  RiArticleLine,
  RiBarChartGroupedLine,
  RiChat2Line,
  RiExternalLinkLine,
  RiPenNibLine,
  RiTimeLine,
} from "@remixicon/react";
import Link from "next/link";
import MetaTag from "../../../components/meta-tag";

const IconMap: Record<IItem["type"], RemixiconComponentType> = {
  story: RiArticleLine,
  comment: RiArticleLine,
  job: RiArticleLine,
  poll: RiBarChartGroupedLine,
  pollopt: RiArticleLine,
};

type ListItemProps = IItem;

function ListItem({
  id,
  type,
  title,
  url,
  score,
  by,
  time,
  kids,
}: ListItemProps) {
  const Icon = url ? RiExternalLinkLine : IconMap[type];
  const hostname = url ? getHostname(url) : null;
  const href = url ?? `/item/${id}`;
  return (
    <Link
      href={href}
      target={url ? "_blank" : undefined}
      className="flex gap-4 py-6 hover:bg-orange-50 px-2 rounded-lg "
    >
      <div className="size-10 rounded-full bg-stone-50 text-neutral-700 flex items-center justify-center">
        <Icon size={20} />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="inline-flex flex-col md:flex-row flex-wrap gap-1">
          <h2 className="text-sm font-medium text-neutral-900">{title}</h2>
          {hostname ? (
            <span className="text-xs font-normal text-neutral-600 leading-5">
              ({hostname})
            </span>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <MetaTag icon={RiArrowUpDoubleLine} content={`${score} points`} />
          <MetaTag
            icon={RiPenNibLine}
            content={
              <>
                by <span className="font-medium text-orange-500">{by}</span>
              </>
            }
          />
          <MetaTag icon={RiTimeLine} content={getRelativeTime(time)} />
          <MetaTag
            icon={RiChat2Line}
            content={`${kids?.length ?? 0} comments`}
          />
        </div>
      </div>
    </Link>
  );
}

const ListItemSkeleton = () => {
  return (
    <div className="flex gap-4 py-6 px-2 animate-pulse">
      <div className="size-10 rounded-full bg-stone-200 " />
      <div className="flex-1 flex flex-col gap-2">
        <div className="inline-flex flex-col md:flex-row flex-wrap gap-1">
          <div className="h-4.25 max-w-[500px] w-full bg-stone-200" />
        </div>
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={`meta-skeleton-${index}`} className="flex gap-1">
              <div className="size-4 rounded-full bg-stone-200" />
              <div className="h-4 w-15 bg-stone-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export { ListItem, ListItemSkeleton };
