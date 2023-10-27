import { Button } from "../ui/button";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-5">
        <div>
          <h1 className="text-brandColor md:text-lg">Hi, My name is</h1>
        </div>

        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Md Shamim Hossain.
          </h2>
        </div>

        <div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-muted-foreground">
            A passionate web developer.
          </h3>
        </div>

        <div>
          <p className="max-w-[540px] text-brandSecondary text-lg">
            I’m a web developer specializing in building (and occasionally
            designing) exceptional digital experiences. Primarily interested in
            Web Development and Deep Learning.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Social />
          <div className="w-full max-w-[10rem] h-[2px] bg-brandColor/50 "></div>
        </div>

        <div className="mt-10">
          <a href={"/resume.pdf"} download>
            <Button variant="outline" size="lg">
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
