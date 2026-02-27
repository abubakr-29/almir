import FeaturedCollection from "@/components/featuredCollection/FeaturedCollection";
import Hero from "@/components/heroSection/Hero";
import PromoBanner from "@/components/promoBanner/PromoBanner";
import WhyChooseUs from "@/components/whyChooseUsSection/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="container mx-auto overflow-hidden font-lato">
        <Hero />
        <FeaturedCollection />
        <PromoBanner />
        <WhyChooseUs />
      </main>
    </>
  );
}
