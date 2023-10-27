import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/logo-full.png"}
        alt="logo"
        width={760}
        height={240}
        className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] h-[auto]"
      />
    </div>
  );
};

export default Logo;
