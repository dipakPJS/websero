 "use client"
 
import Marquee from "react-fast-marquee";

export default function BrandsComponent() {
 

  return (
    <div
      className="w-full h-[8vh] overflow-x-hidden flex justify-center items-center bg-black"
      
    >
      <Marquee
        speed={100}
        autoFill={true}
        pauseOnHover={true}
        loop={0}
        gradient={true}
        gradientColor="black"
        gradientWidth={300}
        className="h-full w-full bg-gradient-to-r from-purple-600 via-blue-800 to-sky-700"
      >
        <div className="text-center flex capitalize font-iceBerg ">
          <p className=" mr-[30px] text-xl text-white">&#9679;</p>
          <p className=" mr-[30px] text-xl text-white tracking-widest font-bold">
            Founded in 2024
          </p>
          <p className=" mr-[30px] text-xl text-white">&#9679;</p>
          <p className=" mr-[30px] text-xl text-white tracking-widest font-bold">
            Award Winning Agency
          </p>
          <p className=" mr-[30px] text-xl text-white">&#9679;</p>
          <p className=" mr-[30px] text-xl text-white tracking-widest font-bold">
            Commitment
          </p>
          <p className=" mr-[30px] text-xl text-white">&#9679;</p>
          <p className=" mr-[30px] text-xl text-white tracking-widest font-bold">
            Technology
          </p>
          <p className=" mr-[30px] text-xl text-white">&#9679;</p>
          <p className=" mr-[30px] text-xl text-white tracking-widest font-bold">
            Strategy
          </p>
          <p className=" mr-[30px] text-xl text-white">&#9679;</p>
          <p className=" mr-[30px] text-xl text-white tracking-widest font-bold">
            Design
          </p>
        </div>
      </Marquee>
    </div>
  );
}
