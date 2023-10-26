import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/logo-full.png"}
        alt="logo"
        width={760}
        height={240}
        className="w-[150px] h-[auto]"
      />
    </div>
  );
};

export default Logo;
