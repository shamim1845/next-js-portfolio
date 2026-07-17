import { cn } from "@/lib/utils";

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
        "flex flex-col items-center justify-center mb-10 select-none",
        className
      )}
    >
      <h4
        className={cn(
          "text-xl md:text-2xl font-bold font-code uppercase tracking-wider mb-4 before:font-mono before:text-xs before:md:text-sm before:align-baseline before:text-brandColor before:mr-2",
          titleClassName
        )}
      >
        {title}
      </h4>
      <div className="w-24 h-[3px] bg-brandColor/20 overflow-hidden rounded-full">
        <div className="w-1.5 h-[3px] bg-brandColor rounded-full animate_left_to_right"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
