import { Fragment, Suspense } from "react";
import { CommentItem, CommentItemSkeleton } from "./components/comment-item";

type CommentSectionProps = {
  kids: number[];
  descendants: number;
};

async function CommentSection({ kids, descendants }: CommentSectionProps) {
  if (!kids?.length) return null;

  return (
    <div className="w-full border-t border-neutral-200">
      <div className="py-4 w-full">
        <h2 className="text-lg font-medium text-foreground">
          {descendants} comments
        </h2>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {kids.map((kid, index) => (
          <Fragment key={`comment-${kid}`}>
            <Suspense fallback={<CommentItemSkeleton root={true} />}>
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

export default CommentSection;
