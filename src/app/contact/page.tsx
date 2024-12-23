"use client";

import MainContactFormComponent from "@/components/ContactPageComponent/MainContactForm.component";
import FooterComponent from "@/components/footerComponent/footer.component";
import { ShootingStarsComponent } from "@/components/ShootingStarsComponent/ShootingStars.component";

export default function ContactPage() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0">
          <ShootingStarsComponent />
        </div>
        <MainContactFormComponent />
        <FooterComponent />
      </div>
    </>
  );
}
