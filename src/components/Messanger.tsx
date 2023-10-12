"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const Messanger = () => {
  return (
    <FacebookProvider appId={process.env.FACEBOOK_APP_ID as string} chatSupport>
      <CustomChat
        pageId={process.env.FACEBOOK_PAGE_ID as string}
        minimized={true}
      />
    </FacebookProvider>
  );
};

export default Messanger;
