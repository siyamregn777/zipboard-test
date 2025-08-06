import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import FQA from "../components/FQA.js";
import Accordion from "@/components/Accordion.js";
import FaqLast from "@/components/FaqLast.js";

export default function Home() {
  return (
    <div className="overflow-hidden dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Accordion />
      <FQA />
      <FaqLast />
      <Footer />
    </div>
  );
}
