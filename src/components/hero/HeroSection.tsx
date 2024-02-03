import { constant } from "@/app/constant";
import { Button } from "../ui/button";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const HeroSection = () => {
  // constants
  const { description } = constant;

  return (
    <section className="min-h-[calc(100vh-5rem)]  flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-5 py-10">
        <div>
          <span className="text-brandColor text-xl">Hello, I&apos;m</span>
        </div>

        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Md Shamim Hossain.
          </h2>
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-muted-foreground">
            Full Stack JavaScript Developer
          </h1>
        </div>

        <div>
          <p className="max-w-[540px] text-brandSecondary text-lg">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-5 mt-2">
          <Social />
          <div className="w-full max-w-[5rem] h-[2px] bg-brandColor/50 "></div>
        </div>

        <div className="mt-10">
          <a href={"/Md-Shamim-Hossain(Full-Stack-Resume).pdf"} download>
            <Button variant="outline" size="lg" aria-label="Download Resume">
              Download Resume
            </Button>
          </a>
        </div>
      </div>

      <div className="flex justify-center py-5">
        <ScrollDown />
      </div>
    </section>
  );
};

export default HeroSection;
