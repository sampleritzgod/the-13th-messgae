import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Characters from "@/components/sections/Characters";
import Timeline from "@/components/sections/Timeline";
import Screenplay from "@/components/sections/Screenplay";
import Production from "@/components/sections/Production";
import Download from "@/components/sections/Download";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Characters />
        <Timeline />
        <Screenplay />
        <Production />
        <Download />
      </main>
      <Footer />
    </>
  );
}
