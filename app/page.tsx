import Footer from "@/components/sections/Footer";
import Profile from "../components/sections/Profile";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Profile />
      <Projects />
      <Footer />
    </main>
  );
}
