import HomeCTA from "@/components/sections/HomeCTA";
import HomeFeaturedProjects from "@/components/sections/HomeFeaturedProjects";
import HomeHero from "@/components/sections/HomeHero";

export default function Home() {
  return (
    <div className="soft-grid-bg">
      <HomeHero />
      <HomeFeaturedProjects />
      <HomeCTA />
    </div>
  );
}
