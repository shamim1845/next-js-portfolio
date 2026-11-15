export const sectionVariants = ({
  from,
}: {
  from: "left" | "right" | "top" | "bottom";
}) => ({
  hidden: {
    opacity: 0,
    // A short, quiet rise. Large slides read as jank and widen the page.
    x: from === "left" ? -16 : from === "right" ? 16 : 0,
    y: from === "bottom" ? 16 : from === "top" ? -16 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
});

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

export const fadeInVariants = {
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
