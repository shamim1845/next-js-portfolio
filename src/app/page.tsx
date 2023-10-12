import Messanger from "@/components/Messanger";
import { ModeToggle } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <ModeToggle />
      <Messanger />
    </main>
  );
}
