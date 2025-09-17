"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { RiCloseLine, RiMenuFill } from "@remixicon/react";
import Image from "next/image";
import { PortalWrapper } from "../portal-wrapper";
import clsx from "clsx";
import Sidebar from "./sidebar";
import { Logo } from "@/assets/icons";

function Header() {
  return (
    <div className="flex xl:hidden px-3 md:px-8 py-4  items-center justify-between border-b border-neutral-200">
      {/* <Image
        src={"./logo.svg"}
        alt="hacker news' logo"
        width={132}
        height={32}
      /> */}
      <Logo />
      <ButtonWithSidebar />
    </div>
  );
}

function ButtonWithSidebar({}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (state?: boolean) => {
    setIsOpen((prev) => (state !== undefined ? state : !prev));
  };
  return (
    <>
      <Button
        onClick={() => toggleMenu()}
        iconOnly
        variant={"link-gray"}
        size={"2xl"}
      >
        <RiMenuFill />
      </Button>
      <PortalWrapper>
        <div
          aria-hidden={true}
          className={clsx(
            "z-1000 backdrop-blur-xs xl:hidden fixed h-dvh data-[visible=true]:bg-neutral-500/50 transition-colors top-0 left-0 duration-100",
            {
              "w-0! bg-transparent": !isOpen,
              "w-screen bg-neutral-500/50": isOpen,
            },
          )}
          onClick={(event) => {
            event.stopPropagation();
            toggleMenu(false);
          }}
        />
        <aside
          data-visible={isOpen}
          aria-label="Main menu"
          aria-hidden={!isOpen}
          className="z-1001 fixed xl:hidden h-dvh bg-white top-0 left-0  transition-transform -translate-x-[100%] data-[visible=true]:translate-x-0"
        >
          <Sidebar
            isMobile
            onClose={() => {
              toggleMenu(false);
            }}
          />
        </aside>
      </PortalWrapper>
    </>
  );
}

export { Header };
