import { getRelativeTime } from "@/lib/utils";
import { IItem } from "@/types/item.type";
import React, { Fragment, Suspense } from "react";
import parse from "html-react-parser";
import clsx from "clsx";

type CommentSectionProps = {
  kids: number[];
};

async function CommentSection({ kids }: CommentSectionProps) {
  if (!kids?.length) return null;

  return (
    <div className="w-full border-t border-neutral-200">
      <div className="py-4 w-full">
        <h2 className="text-lg font-medium text-neutral-900">
          {kids.length} comments
        </h2>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {kids.map((kid, index) => (
          <Fragment key={`comment-${kid}`}>
            <Suspense fallback={<CommentItemSkeleton id={kid} root={true} />}>
              <CommentItem id={kid} root={true} />
            </Suspense>
            {index !== kids.length ? (
              <hr className="bg-neutral-200 w-full" />
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function CommentItemSkeleton({
  id,
  root,
  isLast,
}: {
  id: number;
  root?: boolean;
  isLast?: boolean;
}) {
  return (
    <div
      className={clsx("relative animate-pulse w-full", {
        "pl-8 pt-7": !root,
        "before:content-[''] before:h-10 before:absolute before:w-4 before:top-0":
          !root,
        "before:left-2 before:border-l before:border-b before:border-neutral-300":
          !root,
        "before:rounded-bl-lg": !root,
        //
        "after:content-[''] after:h-full after:absolute after:w-4 after:top-0":
          !root && !isLast,
        "after:left-2 after:border-l after:border-neutral-300":
          !root && !isLast,
      })}
    >
      {/* parent comment */}
      <div className={"w-full flex flex-col gap-3"}>
        <div className="h-4 bg-stone-200 w-15" />
        {/* <span className='font-semibold text-neutral-900'>{by ?? 'Unknown'}</span> • {getRelativeTime(time)} */}
        <div className="w-ful flex flex-col gap-1">
          <div className="h-4 bg-stone-200 w-full" />
          <div className="h-4 bg-stone-200 w-full" />
          <div className="h-4 bg-stone-200 w-full" />
        </div>
      </div>
    </div>
  );
}

async function CommentItem({
  id,
  root,
  isLast,
}: {
  id: number;
  root?: boolean;
  isLast?: boolean;
}) {
  const result: IItem = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  ).then((data) => data.json());

  const { time, by, text, kids, dead, deleted } = result;

  return (
    <div
      className={clsx("relative w-full", {
        "pl-4 md:pl-8 pt-7": !root,
        "before:content-[''] before:h-10 before:absolute before:w-3 md:before:w-4 before:top-0":
          !root,
        "before:left-0 md:before:left-2 before:border-l before:border-b before:border-neutral-300":
          !root,
        "before:rounded-bl-lg": !root,
        //
        "after:content-[''] after:h-full after:absolute after:w-4 after:top-0":
          !root && !isLast,
        "after:left-0 md:after:left-2 after:border-l after:border-neutral-300":
          !root && !isLast,
      })}
    >
      {/* parent comment */}
      <div className={"w-full flex flex-col gap-3"}>
        <div className="text-sm font-normal text-neutral-600">
          <span className="font-semibold text-neutral-900">
            {deleted ? "Deleted" : (by ?? "Unknown")}
          </span>{" "}
          • {getRelativeTime(time)}
        </div>
        {text ? (
          <div
            className={clsx(
              "text-sm font-normal text-neutral-90",
              "[&_a]:text-orange-500 [&_a]:break-all",
              "[&_a]:font-medium [&_a]:hover:text-orange-700",
            )}
          >
            {/* {parse(text?.replaceAll("<a", "<a className=' '"))} */}
            {parse(text)}
          </div>
        ) : null}
      </div>

      {/* replies */}
      {kids?.length ? (
        <div className={"flex flex-col w-full"}>
          {kids.map((kid, index) => (
            <Suspense
              key={`comment-${kid}`}
              fallback={
                <CommentItemSkeleton
                  id={kid}
                  root={false}
                  isLast={index === kids.length - 1}
                />
              }
            >
              <CommentItem
                id={kid}
                root={false}
                isLast={index === kids.length - 1}
              />
            </Suspense>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CommentSection;
