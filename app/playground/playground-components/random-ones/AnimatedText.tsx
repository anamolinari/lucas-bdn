"use client";

import { useState, useEffect } from "react";
import { motion, cubicBezier } from "framer-motion";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import National from "public/assets/playground/national2.png";
import { url } from "inspector";

export default function AnimatedText() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, []);

  const text = "THE NATIONAL";

  const customEasing = cubicBezier(0.6, 0.01, 0.05, 1);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
        staggerDirection: 1,
        ease: customEasing,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        mass: 1,
      },
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        mass: 1,
      },
    },
  };

  function handleResetAnimation() {
    setKey((prevKey) => prevKey + 1);
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black w-full h-full relative">
      <motion.div
        key={key}
        className="overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block text-6xl font-bold text-white"
            variants={childVariants}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
      <button
        onClick={handleResetAnimation}
        className="absolute flex items-center justify-center gap-1 bottom-6 px-3 py-1.5 border border-white/10 bg-neutral-900 text-neutral-500 text-xs font-mono rounded-full hover:bg-neutral-800 hover:text-neutral-400 transition-colors duration-300 active:bg-neutral-900 group"
      >
        <ArrowPathIcon className="w-3 h-3 group-hover:scale-105" />
        Reset
      </button>
    </div>
  );
}
