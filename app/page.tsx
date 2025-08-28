import Footer from "@/components/sections/Footer";
import Profile from "../components/sections/Profile";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Quotes from "@/components/sections/Quotes";
import Technologies from "@/components/sections/Technologies";
import MobileNavBar from "@/components/MobileNavBar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <MobileNavBar />
      <Profile />
      <Quotes />
      <Technologies />
      <Projects />
      <Footer />
    </main>
  );
}
