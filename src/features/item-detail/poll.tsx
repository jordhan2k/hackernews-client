import { IItem } from "@/types/item.type";
import { PollOption, PollOptionSkeleton } from "./poll-option";

type PollProps = {
  id: number;
  pollOptions: number[];
};

async function Poll({ id, pollOptions }: PollProps) {
  const response: IItem[] = await Promise.all(
    pollOptions.map((opt) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${opt}.json`).then(
        (data) => data.json(),
      ),
    ),
  );

  let options = response
    .filter((opt) => !!opt.text && opt.type === "pollopt" && opt.poll === id)
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

  const maxScore = Math.max(...options.map((opt) => opt.score ?? 0));
  return (
    <div className="w-full flex flex-col gap-2">
      {options.map((opt) => (
        <PollOption
          key={`poll-opt-${opt.id}`}
          label={opt.text ?? ""}
          percentage={maxScore > 0 ? ((opt.score ?? 0) / maxScore) * 100 : 0}
          score={opt.score ?? 0}
        />
      ))}
    </div>
  );
}

const PollSkeleton = ({ length }: { length: number }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {Array.from({ length }).map((_, index) => (
        <PollOptionSkeleton
          key={`poll-skeleton-${index}`}
          percentage={100 - 2 * index > 10 ? 100 - 2 * index : 10}
        />
      ))}
    </div>
  );
};

export { Poll, PollSkeleton };
