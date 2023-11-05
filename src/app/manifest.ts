import { MetadataRoute } from "next";
import { constant } from "./constant";

export default function manifest(): MetadataRoute.Manifest {
  // constants
  const { website_name, website_url, title, description } = constant;

  return {
    name: title,
    short_name: website_name,
    description: description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: website_url + "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
