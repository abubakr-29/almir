import FeaturedCollection from "@/components/featuredCollection/FeaturedCollection";
import Hero from "@/components/heroSection/Hero";
import About from "@/components/aboutSection/About";
import Testimonials from "@/components/testimonialsSection/Testimonials";
import WhyChooseUs from "@/components/whyChooseUsSection/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="container mx-auto overflow-hidden font-lato">
        <Hero />
        <FeaturedCollection />
        <About />
        <Testimonials />
        <WhyChooseUs />
      </main>
    </>
  );
}
