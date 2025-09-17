import React from "react";
import parse from "html-react-parser";

type PollOptionType = {
  label: string;
  score: number;
  percentage: number;
};
function PollOption({ label, score, percentage }: PollOptionType) {
  return (
    <div className="flex gap-2 items-center hover:bg-orange-50/50">
      <div className="flex-1 min-h-9 justify-center relative ">
        <div
          className="bg-orange-200 h-full absolute rounded-lg"
          style={{
            width: `${percentage}%`,
          }}
        />
        <div className="p-2 text-sm font-normal text-neutral-900 mix-blend-darken">
          {parse(label ?? "")}
        </div>
      </div>
      <div className="w-[100px] text-sm font-medium text-neutral-900 text-right">
        {score} {score > 1 ? "points" : "point"}
      </div>
    </div>
  );
}

const PollOptionSkeleton = ({ percentage }: { percentage: number }) => {
  return (
    <div className="flex gap-2 items-center animate-pulse">
      <div className="flex-1 min-h-9 justify-center relative ">
        <div
          className="bg-stone-300 h-full absolute rounded-lg"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
      <div className="w-[100px] h-4 bg-stone-300"></div>
    </div>
  );
};

export { PollOption, PollOptionSkeleton };
