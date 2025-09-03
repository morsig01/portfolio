import Profile from "../components/sections/Profile";
import Projects from "@/components/sections/Projects";
import Quotes from "@/components/sections/Quotes";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
    <main>
      <Profile />
      <Technologies />
      <Quotes />
      <Projects />
    </main>
  );
}
