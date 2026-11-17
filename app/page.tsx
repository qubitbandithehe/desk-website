import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Story from "./components/Story";
import Benefits from "./components/Benefits";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Story />
        <Benefits />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
