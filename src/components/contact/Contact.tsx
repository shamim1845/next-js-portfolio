import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "../reuseable-components/SectionHeader";
import InfoCard from "./InfoCard";
import ContactForm from "./ContactForm";

const Contact = () => {
  // constant
  const info_constant = [
    {
      title: "Contact on phone",
      data: ["+880 1631132907", "+880 1302118842"],
      icon: <Phone className="stroke-brandColor" />,
    },
    {
      title: "Contact on mail",
      data: ["samimraj1845@gmail.com"],
      icon: <Mail className="stroke-brandColor" />,
    },
    {
      title: "Contact address",
      data: ["Uttara, Dhaka, Bangladesh"],
      icon: <MapPin className="stroke-brandColor" />,
    },
  ];

  return (
    <section id="contact" className="sectionContainer">
      <SectionHeader
        title="Contact With Me"
        className=""
        titleClassName="before:content-['05.']"
      />

      <div className="mb-10">
        <h5 className="mb-5 text-xl font-bold">Contact information</h5>
        <div className=" w-full flex flex-col md:flex-row  justify-between flex-wrap gap-5 ">
          {info_constant.map((info, i) => (
            <InfoCard key={i} info={info} />
          ))}
        </div>
      </div>

      <div>
        <h5 className="mb-5 text-xl font-bold">Get in touch</h5>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
