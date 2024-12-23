"use client";
 

interface ParallaxText {
  title: string;
  description: string;
}
 

const colors: string[] = ["#FC427B", "#008cff", "#ffa502"]; 

export default function ServiceParallaxComponent({
  title,
  description,
}: ParallaxText) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
 
  return (
    <div
      className="flex flex-col items-center text-center gap-4 p-6 rounded-[40px] text-white
         transition duration-300 w-[20rem] sm:w-[35rem] md:w-[40rem] lg:w-[50rem] bg-black"
      style={{
        boxShadow: `0 0 10px 2px ${randomColor}`,
        
      }}
       
    >
      <h2 className=" text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-eagleLake">{title}</h2>
      <p className=" text-lg sm:text-xl md:text-2xl lg:text-3xl">{description}</p>
    </div>
  );
}
