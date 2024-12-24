"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useCursor } from "@/context/CursorContext";
import GradientTextComponent from "../GradientTextComponent/GradientText.component";

import ProjectSelect from "@/data/ProjectSelect.json";
import BudgetSelect from "@/data/BudgetData.json";

// toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fadeInDirections = {
  bottom: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
};

export default function MainContactFormComponent() {
  const { textEnter, textLeave } = useCursor();

  const [selectedProject, setSelectedProject] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendToServer = async (data: any) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      console.log("Email successfully sent:", data);
      toast.success("Form submitted successfully!", {
        style: {
          background: "linear-gradient(to top right, #6c5ce7, #be2edd, purple, #e84393)",
          color: "white",
          zIndex: 9999,
        },
      });

      // reseting the form
      setSelectedProject("");
      setSelectedBudget("");
      setFormData({ username: "", email: "" });

    } catch (error) {
      alert(`Error: ${error}`);
      toast.error("Error in resend API", {
        style: {
          background: "linear-gradient(to top right, red, orange, black)",
          color: "white",
          zIndex: 9999,
        },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !selectedProject ||
      !selectedBudget ||
      !formData.username ||
      !formData.email
    ) {
      setError("All fields are required.");
      return;
    }

    setError("");

    const payload = {
      userName: formData.username, // Match API key
      email: formData.email, // Match API key
      projectType: selectedProject, // Match API key
      projectBudget: selectedBudget, // Match API key
    };

    sendToServer(payload);
  };

  return (
    <div className="min-h-[100vh] relative z-10  w-full h-full pb-[200px]">
      <ToastContainer  position="top-center"/>
      <div className="main-form text-center h-full w-full px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-start gap-[50px] lg:gap-[100px] pt-[50px] lg:pt-[130px]">
        <div className="texts text-left text-white max-w-lg pt-[200px]">
          <motion.h1
            initial={fadeInDirections.left.initial}
            whileInView={fadeInDirections.left.animate}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-eagleLake"
          >
            No need to be <GradientTextComponent span={true} texts="Shy" />
          </motion.h1>
          <motion.p
            initial={fadeInDirections.left.initial}
            whileInView={fadeInDirections.left.animate}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 text-xl lg:text-2xl"
          >
            Let's collaborate & make good things together.
          </motion.p>
        </div>

        <motion.form
          initial={fadeInDirections.bottom.initial}
          whileInView={fadeInDirections.bottom.animate}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="h-auto w-full lg:w-[70%] p-6 lg:p-10 text-left bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[1px] rounded-[20px]"
        >
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Project Type */}
          <div className="mb-6">
            <p className="uppercase text-xl text-white font-bold">
              Choose the type of your project{" "}
              <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-wrap gap-4 mt-3">
              {ProjectSelect.map((item, index) => (
                <div
                  key={index}
                  className={`w-auto h-[100px] p-4 rounded-[20px] cursor-pointer transition ${
                    selectedProject === item.title
                      ? "border border-white  bg-[#ffffff53]"
                      : " bg-[#ffffff1c]"
                  }`}
                  onClick={() => setSelectedProject(item.title)}
                >
                  <span className="font-bold text-white text-2xl">
                    {item.title}
                  </span>
                  <p className=" text-slate-200 text-md leading-5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Type */}
          <div className="mb-6">
            <p className="uppercase text-xl text-white font-bold">
              Your budget on the project in EUR{" "}
              <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-wrap gap-4 mt-3">
              {BudgetSelect.map((item, index) => (
                <div
                  key={index}
                  className={`w-auto h-[50px] px-4 flex items-center justify-center rounded-[20px] cursor-pointer transition ${
                    selectedBudget === item.title
                      ? "border border-white  bg-[#ffffff53]"
                      : " bg-[#ffffff1c]"
                  }`}
                  onClick={() => setSelectedBudget(item.title)}
                >
                  <span className="font-bold text-white">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <p className="uppercase text-xl text-white font-bold">
              Your contact information <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-col lg:flex-row gap-4 mt-3">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full lg:w-[48%] p-3 rounded-[20px] bg-white/20 text-white focus:outline-none focus:bg-gray-900"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="w-full lg:w-[48%] p-3 rounded-[20px] bg-white/20 text-white focus:outline-none focus:bg-gray-900"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            type="submit"
            className="mt-6 w-full py-3 bg-white text-black font-audioWide rounded-[50px] font-bold uppercase transition duration-700 ease-in-out hover:shadow-[0_0_20px_white]"
          >
            Start a Journey
          </button>
        </motion.form>
      </div>
    </div>
  );
}
