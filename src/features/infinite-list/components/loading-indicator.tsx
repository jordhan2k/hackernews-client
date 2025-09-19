import { RiLoaderLine } from "@remixicon/react";
import React from "react";

function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center h-full px-4 md:px-8  xl:px-[6.4rem] xl:py-10">
      <div className="p-6 flex flex-col items-center text-center max-w-[20rem] w-full">
        <div className="size-12 flex items-center justify-center text-orange-500 mb-5">
          <RiLoaderLine className="animate-spin" />
        </div>
        <div className="text-xl font-medium text-foreground mb-2">
          Loading...
        </div>
        <p className="text-base font-normal text-foreground ">
          Almost there! We're setting everything up for you.
        </p>
      </div>
    </div>
  );
}

export default LoadingIndicator;
