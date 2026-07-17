import { Heart } from "lucide-react";
import Social from "../hero/Social";
import { MotionFooter } from "../framer-motion/Motion";
import { sectionVariants } from "../framer-motion/variants";

const Footer = () => {
  return (
    <MotionFooter
      variants={sectionVariants({ from: "left" })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-8 border-t border-border/40 dark:border-zinc-900 bg-card/20 dark:bg-zinc-950/10 backdrop-blur-md relative z-10"
    >
      <div className="w-full max-w-[70rem] mx-auto px-5 md:px-10 xl:px-0 flex flex-col md:flex-row justify-between items-center gap-5">
        {/* Left Side: Social Icons */}
        <Social />
        
        {/* Right Side: Signature & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-1.5 font-code">
          <div className="text-xs text-muted-foreground flex items-center select-none">
            Built with <Heart className="w-3.5 h-3.5 text-brandColor fill-brandColor animate-pulse mx-1.5" /> by Md Shamim Hossain
          </div>
          <p className="text-[10px] text-muted-foreground/70 tracking-wider select-none">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </MotionFooter>
  );
};

export default Footer;
