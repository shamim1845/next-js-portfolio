"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const Messanger = () => {
  return (
    <FacebookProvider appId="345801404551829" chatSupport>
      <CustomChat pageId="328915227500202" minimized={true} />
    </FacebookProvider>
  );
};

export default Messanger;
