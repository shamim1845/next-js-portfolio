import { cn } from "@/lib/utils";
import React from "react";

const SectionHeader = ({
  title,
  className,
  titleClassName,
}: {
  title: string;
  className?: string;
  titleClassName: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center mb-10 ",
        className
      )}
    >
      <h4
        className={cn(
          "text-3xl font-bold mb-5 before:font-semibold before:text-xl before:align-middle before:text-brandColor before:mr-2",
          titleClassName
        )}
      >
        {title}
      </h4>
      <div className="w-[10rem] h-1.5 bg-brandColor/20 overflow-hidden rounded">
        <div className="w-1.5 h-1.5 bg-brandColor rounded-full animate_left_to_right"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
