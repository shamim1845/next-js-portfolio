import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavList from "./NavList";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();

  return (
    <div className="lg:hidden h-full">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" role="menubar" />
        </SheetTrigger>

        <SheetContent className="w-[300px] flex flex-col justify-center items-center gap-10">
          <NavList classList="flex-col justify-center" />

          <Button
            variant="outline"
            onClick={() => router.push("/#contact")}
            size={"lg"}
            aria-label="Hire me"
          >
            Hire me
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideBar;
