import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`
    radial-gradient(
      125% 125% at 50% 0%, 
      white 50%, 
      ${color}
    )
  `;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage: backgroundImage,
      }}
      className="relative min-h-screen -mt-0 md:-mt-0 pt-4 md:pt-16 grid place-content-center overflow-hidden bg-white px-4 py-24 text-black"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          All things finance, right here.
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed text-gray-700 md:text-lg md:leading-relaxed">
          Transform your financial strategy with instant market updates,
          analytics, and essential financial news.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <Link to="/dashboard">
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative w-56 flex justify-center items-center gap-1.5 rounded-full bg-gray-200/10 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-300/50"
            >
              Get Started
              <ChevronRight className="" />
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={70} count={1000} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
