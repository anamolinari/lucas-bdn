"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const CardsTest = () => {
  const controlsRed = useAnimation();
  const controlsBlue = useAnimation();
  const controlsPink = useAnimation();

  const [zIndices, setZIndices] = useState([3, 2, 1]);

  // useRef to keep track of mounting status
  const isMountedRef = useRef(false);

  const animateBox = async (index: number) => {
    const controls = [controlsRed, controlsBlue, controlsPink];

    // Ensure the component is mounted before starting animation
    if (isMountedRef.current) {
      console.log(`Animating box ${index}`);

      await controls[index].start({ y: -75 });

      setZIndices((prevZIndices) => {
        const newZIndices = [...prevZIndices];
        newZIndices[index] = 4;
        return newZIndices.map((z, i) => (i !== index ? z - 1 : z));
      });

      await controls[index].start({ y: 0 });

      setZIndices((prevZIndices) => {
        const newZIndices = [...prevZIndices];
        newZIndices[index] = 3;
        return newZIndices;
      });

      const nextIndex = (index + 1) % 3;
      animateBox(nextIndex);
    }
  };

  useEffect(() => {
    // Set mounted status to true
    isMountedRef.current = true;

    // Start the animation after the component mounts
    animateBox(0);

    // Cleanup function to set mounted status to false
    return () => {
      isMountedRef.current = false;
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <div className="relative w-24 h-16">
      <motion.div
        className="absolute w-24 h-16 rounded-[12px] border-[5px] border-white shadow overflow-hidden"
        style={{ zIndex: zIndices[0] }}
        animate={controlsRed}
        initial={{ rotate: 0 }}
      >
        <Image
          src="/assets/playground/fitness1.jpg"
          alt="Fitness"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="absolute w-24 h-16 rounded-[12px] border-[5px] border-white shadow overflow-hidden"
        style={{ zIndex: zIndices[1] }}
        animate={controlsBlue}
        initial={{ rotate: 14 }}
      >
        <Image
          src="/assets/playground/fitness2.jpg"
          alt="Fitness"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="absolute w-24 h-16 rounded-[12px] border-[5px] border-white shadow overflow-hidden"
        style={{ zIndex: zIndices[2] }}
        animate={controlsPink}
        initial={{ rotate: -8 }}
      >
        <Image
          src="/assets/playground/fitness3.jpg"
          alt="Fitness"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
};

export default CardsTest;
