import FooterComponent from "@/components/footerComponent/footer.component";
import { ShootingStarsComponent } from "@/components/ShootingStarsComponent/ShootingStars.component";
import WorkPageComponent from "@/components/WorkPageComponents/WorkPage.component";

export default function WorkPage() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0">
          <ShootingStarsComponent />
        </div>
        {/* Work Page Content */}
        <WorkPageComponent />

        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  );
}
