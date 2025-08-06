import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Accordion from "@/components/Accordion";
import FQA from "@/components/FQA";
import FaqLast from "@/components/FaqLast";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero/>
        <Accordion/>
        <FQA/>
        <FaqLast/>
        <Footer/>
      </main>
    </div>
  );
}
