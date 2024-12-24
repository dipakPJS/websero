"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";

import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const navVariants = {
  hidden: {
    clipPath: "circle(0% at 100% 0%)", // Starts as a small circle at the top-right corner
  },
  visible: {
    clipPath: "circle(150% at 50% 50%)", // Expands to cover the entire screen
    transition: {
      duration: 1.5,
      ease: [0.25, 0.8, 0.25, 1], // Easing for the circle expansion
    },
  },
  exit: {
    clipPath: "circle(0% at 100% 0%)", // Shrinks back to the top-right corner
    transition: {
      duration: 1.5,
      ease: [0.25, 0.8, 0.25, 1], // Easing for the circle contraction
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const buttonTextVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const FullPageNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navigation menu when a link is clicked
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-2 sm:right-3 md:right-4 lg:right-5 z-[400] text-black text-sm md:text-xl lg:text-xl font-iceBerg mix-blend-hard-light bg-white font-extrabold focus:outline-none h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg-1:h-[80px] lg-1:w-[80px] lg:h-[80px] lg:w-[80px] rounded-[50%] flex justify-center items-center"
        style={{ boxShadow: "inset 0 0 5px 5px black" }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isOpen ? "Close" : "Menu"}
            variants={buttonTextVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="block"
          >
            {isOpen ? "Close" : "Menu"}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navVariants}
            className="fixed inset-0 z-[350] bg-[#f702ff1e] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px]"
          >
            <div className="logo p-5 w-full">
              <Link href={"/"}  onClick={handleLinkClick}>
              <Image
                alt="logo image"
                height={100}
                width={100}
                src={"/images/logo.png"}
                className="mx-auto h-[70px] lg:h-[100px] w-auto"
                />
                </Link>
            </div>

            <div className="relative h-full w-full flex items-center">
              <motion.nav
                className="flex flex-col gap-y-5 absolute left-[10%] top-[20%] transform -translate-y-1/2 p-10"
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {["Home", "About", "Services", "Work", "Contact"].map(
                  (label, index) => (
                    <motion.div
                      key={index}
                      variants={linkVariants}
                      className="duration-1000 ease-in-out"
                      transition={{
                        delay: index * 0.3, // Staggered delay based on the index
                        duration: 0.1,
                      }}
                    >
                      <Link
                        href={
                          label === "Home" ? "/" : `/${label.toLowerCase()}`
                        }
                        onClick={handleLinkClick}
                        className=" text-2xl cursor-pointer sm:text-3xl md:text-4xl lg:text-5xl font-eagleLake text-white hover:text-purple-700"
                      >
                        {label}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.nav>

              <div className="flex flex-wrap gap-10 justify-around items-center w-full  px-[100px] absolute bottom-[25%]">
                <ul className="text-slate-300 flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                  <li>
                    <a href="https://www.facebook.com/dipak.light.roshni.diyo" target="_blank">
                      <TiSocialFacebookCircular className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl duration-300 ease-in-out hover:text-blue-700 transform hover:scale-[1.5]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/diwakar_codess/" target="_blank">
                      <TiSocialInstagramCircular className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl duration-300 ease-in-out hover:text-pink-500 transform hover:scale-[1.5]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/DeepakP18273070" target="_blank">
                      <TiSocialTwitterCircular className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl duration-300 ease-in-out hover:text-white transform hover:scale-[1.5]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/dipak-developer/" target="_blank">
                      <TiSocialLinkedinCircular className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl duration-300 ease-in-out hover:text-sky-500 transform hover:scale-[1.5]" />
                    </a>
                  </li>
                </ul>
                <div className="text-slate-300">
                  <p className="text-sm font-audioWide">info@websero.com</p>
                  <code>+977 - 986 721 663 0</code>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullPageNav;
