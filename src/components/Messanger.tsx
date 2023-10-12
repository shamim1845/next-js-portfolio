"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const Messanger = () => {
  console.log();
  console.log();

  return (
    <FacebookProvider
      appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID as string}
      chatSupport
    >
      <CustomChat
        pageId={process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID as string}
        minimized={true}
      />
    </FacebookProvider>
  );
};

export default Messanger;
