import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

function EmptyIndicator({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex items-center justify-center h-full px-4 md:px-8  xl:px-[6.4rem] xl:py-10">
      <div className="p-6 flex flex-col items-center text-center max-w-[20rem] w-full">
        <div className="size-12 flex items-center justify-center text-orange-500 mb-5 shadow rounded-lg">
          {icon}
        </div>
        <div className="text-xl font-medium text-foreground mb-2">
          No Posts Available
        </div>
        <p className="text-base font-normal text-foreground ">
          Hang tight! We'll have more for you soon. If you believe this is an
          error, feel free to reach out to us.
        </p>

        <Button size="lg" className="w-full mt-5">
          Contact
        </Button>
      </div>
    </div>
  );
}

export default EmptyIndicator;
