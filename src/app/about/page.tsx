"use client";

import AboutIntroComponent from "@/components/AboutPageComponents/AboutIntro.component";
import AboutMarqueeComponent from "@/components/AboutPageComponents/AboutMarquee.component";
import InfoTextHorizontalScrollComponent from "@/components/AboutPageComponents/InfoTextHorizontalScroll.component";
import IntroParaComponent from "@/components/AboutPageComponents/IntroPara.component";
import TextScrollComponent from "@/components/AboutPageComponents/TextScroll.component";
import ContactGradientComponent from "@/components/contactGradientComponent/contactGradient.component";
import FooterComponent from "@/components/footerComponent/footer.component";
import { ShootingStarsComponent } from "@/components/ShootingStarsComponent/ShootingStars.component";
import { AnimatedTestimonialsComponent } from "@/components/TestimonalComponent/Testimonal.component";
import { WorldMapComponent } from "@/components/WorldMapComponent/WorldMap.component";
 
 

export default function AboutPage() {
  return (
    <div className="h-full w-full">
      <AboutIntroComponent />
      <div className="relative">
        <div className="absolute inset-0">
          <ShootingStarsComponent />
        </div>
      <TextScrollComponent />
      <IntroParaComponent />
      <AboutMarqueeComponent />
      <InfoTextHorizontalScrollComponent />
       <WorldMapComponent />
       <AnimatedTestimonialsComponent bgColor="black"/>
       <ContactGradientComponent />
       <FooterComponent />
      </div>
    </div>
  );
}
