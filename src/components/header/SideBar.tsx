import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavList from "./NavList";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();

  return (
    <div className="md:hidden h-full">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" />
        </SheetTrigger>

        <SheetContent className="w-[300px] flex flex-col justify-center items-center gap-10">
          <NavList classList="flex-col justify-center" />

          <Button
            onClick={() => router.push("/#contact")}
            variant="outline"
            size="lg"
          >
            Hire me
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideBar;
