import React from "react";
import Social from "../hero/Social";
import { HeartPulse } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-[6rem] md:h-[4rem] flex items-center border-t border-brandColor/50">
      <div className="container  px-5 md:px-10 flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-2 ">
        <Social />
        <div className="flex gap-2">
          Created by <HeartPulse className="stroke-brandColor" /> with Shamim
        </div>
      </div>
    </footer>
  );
};

export default Footer;
