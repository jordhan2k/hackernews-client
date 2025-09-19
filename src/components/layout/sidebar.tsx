"use client";

import { Logo } from "@/assets/icons";
import {
  RiBriefcase3Line,
  RiCloseLine,
  RiEyeLine,
  RiHome6Line,
  RiSpeakLine,
} from "@remixicon/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const NAV_LINKS = [
  {
    label: "New",
    url: "/",
    icon: RiHome6Line,
  },
  {
    label: "Ask",
    url: "/ask",
    icon: RiSpeakLine,
  },
  {
    label: "Show",
    url: "/show",
    icon: RiEyeLine,
  },
  {
    label: "Jobs",
    url: "/jobs",
    icon: RiBriefcase3Line,
  },
];

type SidebarProps = {
  isMobile?: boolean;
  onClose?: () => void;
};

function Sidebar({ isMobile, onClose }: SidebarProps) {
  const pathname = usePathname();
  return (
    <nav
      className={clsx(
        " xl:flex flex-col w-[15rem]",
        "p-4 pt-6 border-r",
        "border-sidebar-border h-full",
        {
          hidden: !isMobile,
          "xl:hidden": isMobile,
        },
      )}
    >
      <div className="px-1 py-4 flex items-center justify-between">
        <Logo />
        {isMobile ? (
          <Button onClick={onClose} variant={"link-gray"} size={"sm"}>
            <RiCloseLine size={20} />
          </Button>
        ) : null}
      </div>
      <ul className="flex flex-col gap-1">
        {NAV_LINKS.map(({ icon: Icon, label, url }) => (
          <li key={url}>
            <Link
              key={url}
              href={url}
              onClick={() => isMobile && onClose?.()}
              className={clsx(
                "flex items-center gap-3 p-1.5 rounded-lg text-sm font-medium  hover:bg-orange-50/90",
                {
                  "text-secondary-foreground": url !== pathname,
                  "text-primary bg-orange-50": url === pathname,
                },
              )}
            >
              <Icon size={20} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
