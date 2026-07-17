"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whatsappVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 5,
    },
  },
};

const Whatsapp = () => {
  const message =
    "Hello, I've been brainstorming a project with the goal of making a positive impact. Can you assist me?";
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={whatsappVariants}
      className="fixed bottom-[40px] right-[20px] md:right-[40px] z-50"
    >
      <a 
        href={`https://wa.me/8801631132907?text=${encodeURIComponent(message)}`} 
        target="_blank"
        className="relative flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0.5 rounded-full bg-emerald-500/20 animate-ping opacity-75 group-hover:animate-none scale-105" />
        
        {/* WhatsApp Icon wrapper */}
        <div className="relative z-10 w-[45px] h-[45px] md:w-[50px] md:h-[50px] lg:w-[56px] lg:h-[56px] rounded-full shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center">
          <Image
            src="/whatsapp.svg"
            alt="whatsapp"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </a>
    </motion.div>
  );
};

export default Whatsapp;
