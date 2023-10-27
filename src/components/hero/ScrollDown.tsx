"use client";
import { Button } from "../ui/button";
import { ArrowDownToDot } from "lucide-react";
import { useRouter } from "next/navigation";

const ScrollDown = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#about");
  };
  return (
    <Button
      variant="icon"
      className="hover:bg-transparent hover:text-brandColor transition-all "
      onClick={handleClick}
    >
      <ArrowDownToDot className="animate_bounce mr-2 stroke-brandColor" />
      <span className="text-xs tracking-wide">SCROLL DOWN</span>
    </Button>
  );
};

export default ScrollDown;
