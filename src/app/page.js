import BrandSlider from "@/components/desktop and laptop/pages/home componets/BrandSlider";
import HeroSlider from "@/components/desktop and laptop/pages/home componets/HeroSlider";
import NewArrivals from "@/components/desktop and laptop/pages/home componets/NewArrivals";
import ProductsByCat from "@/components/desktop and laptop/pages/home componets/ProductsByCat";
import MobileHeroSlider from "@/components/mobile and tab/pages/mobile home components/MobileHeroSlider";
import TopSelling from "@/components/desktop and laptop/pages/home componets/TopSelling";
import BrowsByStyle from "@/components/desktop and laptop/pages/home componets/BrowsByStyle";
import StayUpToDate from "@/components/desktop and laptop/pages/home componets/StayUpToDate";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <MobileHeroSlider />
      <BrandSlider />
      <ProductsByCat />
      <NewArrivals />
      <TopSelling />
      <BrowsByStyle />
      <StayUpToDate />
    </main>
  );
}
