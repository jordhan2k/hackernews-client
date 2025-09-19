import { RiEmotionSadLine } from "@remixicon/react";

function ErrorIndicator() {
  return (
    <div className="flex items-center justify-center h-full px-4 md:px-8  xl:px-[6.4rem] xl:py-10">
      <div className="p-6 flex flex-col items-center text-center max-w-[20rem] w-full">
        <div className="size-12 flex items-center justify-center text-orange-500 mb-5 shadow rounded-full">
          <RiEmotionSadLine />
        </div>
        <div className="text-xl font-medium text-foreground mb-2">
          Unexpected error
        </div>
        <p className="text-base font-normal text-foreground ">
          We're facing some issues at the moment. Please try again later or
          contact support at{" "}
          <a href="mailto:support@codepulse.com" className="text-orange-600">
            support@codepulse.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default ErrorIndicator;
