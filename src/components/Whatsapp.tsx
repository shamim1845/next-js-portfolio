import Image from "next/image";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-[20px] md:bottom-[40px]  right-[20px] md:right-[40px]">
      <a href="https://wa.me/8801631132907?text=hello" target="_blank">
        <Image
          src="/whatsapp.svg"
          alt="whatsapp"
          width={100}
          height={100}
          className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
