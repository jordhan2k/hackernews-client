import type { RemixiconComponentType } from "@remixicon/react";
import clsx from "clsx";
import type { ReactNode } from "react";

function MetaTag({
  icon: Icon,
  content,
  size = "sm",
}: {
  icon: RemixiconComponentType;
  content: string | ReactNode;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={clsx(
        "flex gap-1 items-center flex-nowrap",
        " font-normal text-secondary-foreground",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
        },
      )}
    >
      <Icon className="text-foreground" size={size === "sm" ? 16 : 20} />
      {content}
    </div>
  );
}

export default MetaTag;
