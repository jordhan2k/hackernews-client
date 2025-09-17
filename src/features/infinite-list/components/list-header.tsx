import React from "react";

type ListHeaderProps = {
  title: string;
  description: string;
};
function ListHeader({ description, title }: ListHeaderProps) {
  return (
    <div className="flex flex-col gap-2 py-8 px-4 md:px-8 xl:px-0">
      <h1 className="text-foreground text-xl md:text-2xl font-semibold">
        {title}
      </h1>
      <p className="text-xs md:text-sm font-normal text-neutral-500">
        {description}
      </p>
    </div>
  );
}

export { ListHeader };
