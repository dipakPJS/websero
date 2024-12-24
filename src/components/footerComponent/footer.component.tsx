"use client";
import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { useCursor } from "@/context/CursorContext";
import GradientTextComponent from "../GradientTextComponent/GradientText.component";

export default function FooterComponent() {
  const { textEnter, textLeave } = useCursor();

  const DATE = new Date().getFullYear();

  return (
    <div className="w-full min-h-[100vh]  pb-[50px]">
      <div className="relative h-full w-full">
        <div className="w-full  py-10 px-10  grid grid-cols-1 lg:grid-cols-[45%_55%] md:grid-cols-1 sm:grid-cols-1">
          <div className="w-full flex flex-col gap-3 justify-around min-h-[18rem]">
            <Image
              src={"/images/logo.png"}
              height={100}
              width={100}
              alt="websero creatives"
            />
            <p className="text-left w-full ml-5 text-slate-200 font-eagleLake text-2xl sm:text-3xl md-1:text-5xl md:text-6xl lg-1:text-4xl lg:text-4xl font-extrabold">
              Thanks For ch<span className="text-purple-600">oooo</span>sing{" "}
              <br />
              US<span className="text-purple-600">!</span>
            </p>
          </div>
          <div className="w-full min-h-[20rem] gap-y-10 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 text-center pt-10">
            <div className="w-auto flex flex-col gap-2">
              <p className="text-xl text-left font-audioWide font-extrabold text-slate-600">
                Company
              </p>
              <Link
                href={"/"}
                className="text-white text-left font-iceBerg text-lg pl-5"
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="text-white text-left font-iceBerg text-lg pl-5 "
              >
                About Us
              </Link>
             
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-xl text-left  font-audioWide font-extrabold text-slate-600 ">
                Work
              </p>
              <Link
                href={"/work"}
                className="text-left text-white text-lg font-iceBerg pl-5"
              >
                Our Work
              </Link>
              <Link
                href={"/services"}
                className="text-white text-left font-iceBerg text-lg pl-5 "
              >
                Services
              </Link>
              <Link
                href={"/contact"}
                className="text-left text-white text-lg font-iceBerg pl-5 "
              >
                Contact Us
              </Link>
            </div>
            <div className="w-full flex flex-col  gap-2">
              <p className="text-xl text-left  font-audioWide font-extrabold text-slate-600">
                Socials
              </p>
              <a
                href="https://www.instagram.com/diwakar_codess/"
                target="_blank"
                className="text-left flex gap-1 text-pink-500 text-xl font-iceBerg    pl-5"
              >
                <RiInstagramFill className="text-2xl" /> Instagram
              </a>
              <a
                href="https://www.facebook.com/dipak.light.roshni.diyo"
                target="_blank"
                className="text-left flex gap-1 text-blue-600 text-xl font-iceBerg pl-5 "
              >
                <BsFacebook className="text-2xl" /> Facebook
              </a>
              <a
                href="https://www.youtube.com/@WebseroCreations"
                target="_blank"
                className="text-left flex gap-1 text-[red] text-xl font-iceBerg pl-5 "
              >
                <ImYoutube className="text-2xl" /> YouTube
              </a>
              <a
                href="https://x.com/DeepakP18273070"
                target="_blank"
                className="text-left flex gap-1 text-white text-xl font-iceBerg pl-5 "
              >
                <BsTwitterX className=" text-2xl " /> Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[25vh] md:h-[30vh] lg:h-[40vh] items-center border-y-[0.5px] border-y-white">
          <Marquee
            speed={300}
            autoFill={true}
            pauseOnHover={false}
            loop={0}
            gradient={true}
            gradientColor="black"
            gradientWidth={300}
            className="h-full w-full"
          >
            <div className="w-full flex items-center">
              <p className="text-white text-[200px] md:text-[250px] lg:text-[300px] font-iceBerg uppercase px-5">
                Let's make your vision a reality{" "}
                <sub>
                  <GradientTextComponent span={true} texts="*" />
                </sub>
              </p>
            </div>
          </Marquee>
        </div>
        <div className="w-full min-h-[50px] grid-cols-2 grid mt-2 pt-3 px-5 lg:px-[100px] md:px-[100px] sm:px-[100px]">
          <div className="w-full mt-5">
            <p className="text-gray-200 text-[16px] font-bold">
              &copy; {DATE}, Wesero{" "}
              <GradientTextComponent span={true} texts="Creative." /> All
              Rights Reserved.
            </p>
          </div>
          <div className=" w-full flex justify-between text-right mt-5">
            <div></div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group cursor-pointer flex justify-between items-center p-0 h-[50px] min-w-[100px] gap-2  rounded-[50px] border-[1px] border-white
            py-3 px-4 transition duration-700 hover:bg-white hover:shadow-blurWhite text-right hover:text-black text-white text-sm sm:text-xl md:text-2xl lg:text-2xl font-extrabold"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Back to Top{" "}
              <FaArrowAltCircleUp className="group-hover:text-black text-sm sm:text-xl md:text-2xl lg:text-3xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
