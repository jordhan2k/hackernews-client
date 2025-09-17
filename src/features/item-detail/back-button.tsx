"use client";

import { Button } from "@/components/ui/button";
import { RiArrowLeftLine } from "@remixicon/react";
import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="px-4 py-6 md:pt-10 md:pb-4 xl:py-8 xl:px-0">
      <Button onClick={handleGoBack} variant="link-color">
        <RiArrowLeftLine />
        Back
      </Button>
    </div>
  );
}

export default BackButton;
