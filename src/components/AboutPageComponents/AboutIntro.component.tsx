"use client";
import VideoComponent from "../videoComponent/video.component";
import IntroTitleComponent from "./IntroTitle.component";


export default function AboutIntroComponent() {

 

    return (
        <div className=" bg-black flex items-center relative justify-center h-[110vh] w-full overflow-hidden px-0 lg:px-5 md:px-3 sm:px-3 py-2">
        
        {/* Video Wrapper */}

        <VideoComponent
          videoUrl="/videos/hole.mp4"
          classNames="absolute top-0 left-0 w-full h-full object-cover rounded-[50px]"
        />
        
    <IntroTitleComponent />
        
      </div>
    )
}