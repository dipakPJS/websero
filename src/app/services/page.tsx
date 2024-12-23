"use client";

import ServicesListComponent from "@/components/servicesComponent/servicesList.component"; 
import ServiceIndustriesComponent from "@/components/servicesComponent/serviceIndustries.component";
import { ShootingStarsComponent } from "@/components/ShootingStarsComponent/ShootingStars.component";
import ServiceBookingComponent from "@/components/servicesComponent/serviceBooking.component";
import { AnimatedTestimonialsComponent } from "@/components/TestimonalComponent/Testimonal.component";
import WorkflowComponent from "@/components/servicesComponent/Workflow.component";
import ContactGradientComponent from "@/components/contactGradientComponent/contactGradient.component";
import FooterComponent from "@/components/footerComponent/footer.component";
import ServiceIntroComponent from "@/components/servicesComponent/ServiceIntro.component";
 

export default function ServicesPage() {
 

  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      {/* shooting stars component */}
      <div className="absolute inset-0">
          <ShootingStarsComponent />
        </div>

      {/* Services Intro Section */}
     <ServiceIntroComponent />
      <ServicesListComponent />
      <ServiceIndustriesComponent />
      <ServiceBookingComponent />
      <AnimatedTestimonialsComponent bgColor="transparent"/>
      <WorkflowComponent />
      <ContactGradientComponent />
      <FooterComponent />
    </div>
  );
}
