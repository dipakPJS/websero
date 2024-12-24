"use client";

import AchievementsComponent from "@/components/achievementsComponent/achievements.component";
import BrandsComponent from "@/components/brandComponent/brands.component";
import ContactGradientComponent from "@/components/contactGradientComponent/contactGradient.component";
import DesignersComponent from "@/components/designerComponent/designers.component";
import FooterComponent from "@/components/footerComponent/footer.component";
import HomeComponent from "@/components/homeComponent/home.component";
import PricingComponent from "@/components/pricingComponent/pricing.component";
import ProcessComponent from "@/components/processComponent/process.component";
import ServicesComponent from "@/components/servicesComponent/mainServices.component";
import { ShootingStarsComponent } from "@/components/ShootingStarsComponent/ShootingStars.component";
import { AnimatedTestimonialsComponent } from "@/components/TestimonalComponent/Testimonal.component";
import WorkComponent from "@/components/workComponent/work.component";

export default function Home() {
  return (
    <>
      <HomeComponent />
      <WorkComponent />
      <ServicesComponent />
      <ProcessComponent />
      <BrandsComponent />
      <div className="relative">
        <div className="absolute inset-0">
          <ShootingStarsComponent />
        </div>
        <DesignersComponent />
        <AchievementsComponent />
        <PricingComponent />
        <AnimatedTestimonialsComponent bgColor="black" />
        <ContactGradientComponent />
        <FooterComponent />
      </div>
    </>
  );
}
