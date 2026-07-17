import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "../reuseable-components/SectionHeader";
import InfoCard from "./InfoCard";
import ContactForm from "./ContactForm";
import { MotionDiv, MotionSection } from "../framer-motion/Motion";
import {
  containerVariants,
  fadeInVariants,
  sectionVariants,
} from "../framer-motion/variants";

const Contact = () => {
  const info_constant = [
    {
      title: "Contact on phone",
      data: ["+880 1631-132907"],
      icon: <Phone className="stroke-brandColor" />,
      link: "tel:+8801631132907",
    },
    {
      title: "Contact on mail",
      data: ["samimraj1845@gmail.com"],
      icon: <Mail className="stroke-brandColor" />,
      link: "mailto:samimraj1845@gmail.com",
    },
    {
      title: "Contact address",
      data: ["Uttara, Dhaka, Bangladesh"],
      icon: <MapPin className="stroke-brandColor" />,
    },
  ];

  return (
    <MotionSection
      variants={sectionVariants({ from: "bottom" })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="contact"
      className="sectionContainer relative z-10"
    >
      <SectionHeader
        title="Contact With Me"
        className="md:items-start"
        titleClassName="before:content-['05.']"
      />
      <MotionDiv
        variants={containerVariants}
        className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full mt-6"
      >
        {/* Ambient Glow Backdrops */}
        <div className="absolute w-[300px] h-[300px] bg-brandColor/5 rounded-full blur-[90px] -z-10 top-10 left-10 pointer-events-none" />
        <div className="absolute w-[320px] h-[320px] bg-brandColor/5 rounded-full blur-[90px] -z-10 bottom-10 right-10 pointer-events-none" />

        {/* Left Column: Contact Sidebar Info */}
        <MotionDiv
          variants={fadeInVariants}
          className="flex-1 w-full lg:max-w-[380px] flex flex-col gap-4 shrink-0"
        >
          <div className="mb-2">
            <h5 className="text-xl font-bold tracking-wide text-foreground">
              Contact Information
            </h5>
            <p className="text-sm text-brandSecondary mt-1 leading-relaxed">
              Find my primary channels or drop a message directly. I usually respond within 24 hours.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            {info_constant.map((info, i) => (
              <InfoCard key={i} info={info} />
            ))}
          </div>
        </MotionDiv>

        {/* Right Column: Contact Form Panel */}
        <MotionDiv
          variants={fadeInVariants}
          className="flex-[1.4] w-full bg-card/30 dark:bg-zinc-950/25 border border-border/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-brandColor/20 hover:shadow-brandColor/[0.02] transition-all duration-500"
        >
          <div className="mb-6">
            <h5 className="text-xl font-bold tracking-wide text-foreground">
              Get in Touch
            </h5>
            <p className="text-sm text-brandSecondary mt-1 leading-relaxed">
              Fill out the form below and let&apos;s build something together!
            </p>
          </div>
          <ContactForm />
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
};

export default Contact;
