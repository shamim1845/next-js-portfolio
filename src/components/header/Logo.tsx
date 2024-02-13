import Image from "next/image";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

const Logo = () => {
  return (
    <motion.div variants={fadeInVariants}>
      <Image
        src={"/logo-full.png"}
        alt="logo"
        width={760}
        height={240}
        priority
        className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] h-[auto]"
      />
    </motion.div>
  );
};

export default Logo;
