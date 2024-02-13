export const sectionVariants = ({
  from,
}: {
  from: "left" | "right" | "top" | "bottom";
}) => ({
  hidden: {
    opacity: 0,
    x: from === "left" ? -200 : from === "right" ? 200 : 0,
    y: from === "bottom" ? 200 : from === "top" ? -200 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.2,
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
      type: "",
      when: "beforeChildren",
      staggerChildren: 0.2,
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
