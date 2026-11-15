import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Md Shamim Hossain",
  robots: { index: false, follow: true },
};

const NotFound = () => {
  return (
    <section className="h-[calc(100vh-11rem)] md:h-[calc(100vh-9rem)] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>

      <p className="sr-only">Error 404</p>
      <div className="error-container" aria-hidden="true">
        <span className="four mr-2" />
        <span className="zero mr-2" />
        <span className="four" />
      </div>
      <Button asChild size={"lg"}>
        <Link href={"/"}>Back To Home</Link>
      </Button>
    </section>
  );
};

export default NotFound;
