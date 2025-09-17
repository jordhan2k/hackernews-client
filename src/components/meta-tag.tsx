import { RemixiconComponentType } from "@remixicon/react";
import clsx from "clsx";
import React from "react";

function MetaTag({
  icon: Icon,
  content,
  size = "sm",
}: {
  icon: RemixiconComponentType;
  content: string | React.ReactNode;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={clsx(
        "flex gap-1 items-center flex-nowrap",
        " font-normal text-neutral-600",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
        },
      )}
    >
      <Icon className="text-neutral-900" size={size === "sm" ? 16 : 20} />
      {content}
    </div>
  );
}

export default MetaTag;
