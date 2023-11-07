import { MetadataRoute } from "next";
import { constant } from "./constant";

export default function manifest(): MetadataRoute.Manifest {
  // constants
  const { website_name, title, description } = constant;

  return {
    name: title,
    short_name: website_name,
    description: description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#B06223",
    scope: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
