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
      className="fixed bottom-[20px] md:bottom-[40px]  right-[20px] md:right-[40px]"
    >
      <a href={`https://wa.me/8801631132907?text=${message}`} target="_blank">
        <Image
          src="/whatsapp.svg"
          alt="whatsapp"
          width={100}
          height={100}
          className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] hover:scale-110 transition-all duration-300"
        />
      </a>
    </motion.div>
  );
};

export default Whatsapp;
