"use client"
import Image from "next/image"
import GradientTextComponent from "../GradientTextComponent/GradientText.component"
import Link from "next/link"

export default function LogoComponent() {
    return (
        <div className="absolute top-5 flex justify-between items-center  pl-[50px] z-[200]">
        <Link href={"/"} className="flex space-x-3 items-center">
        <Image 
         src={"/images/logo.png"}
         height={100}
         width={100}
         alt="logo Image"
         className=" h-[50px] sm:h-[50px] md:h-[70px] lg:h-[80px] w-auto"
         priority={true}
         
         />
         <p className="text-white text-xl lg-1:text-2xl lg:text-2xl">Websero <GradientTextComponent texts="Creative" span={true} classNames="text-xl font-bold lg-1:text-2xl lg:text-3xl " /> </p>
        </Link>
         
       </div>
    )
}