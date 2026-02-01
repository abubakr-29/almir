import FeaturedCollection from "@/components/featuredCollection/FeaturedCollection";
import Hero from "@/components/heroSection/Hero";
import PromoBanner from "@/components/promoBanner/PromoBanner";

export default function Home() {
  return (
    <>
      <main className="container mx-auto overflow-hidden font-lato">
        <Hero />
        <FeaturedCollection />
        <PromoBanner />
        {/* <div className="h-screen"/> */}
      </main>
    </>
  );
}
