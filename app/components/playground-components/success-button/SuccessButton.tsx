"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Poppins from "next/font/google";
import { SixDotsRotate } from "react-svg-spinners";

const buttonCopy = {
  idle: "Email me a sign in code",
  loading: <SixDotsRotate color="white" />,
  success: "Sign in code sent!",
};

const variants = {
  initial: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 25 },
};

type ButtonState = keyof typeof buttonCopy;

export default function SuccessButton() {
  const [buttonState, setButtonState] = useState<ButtonState>("idle");

  return (
    <div>
      <button
        className="group w-[200px] h-10 flex items-center justify-center relative rounded-xl overflow-hidden bg-gradient-to-b from-[#7F5FFF] to-[#6645E9] text-white font-semibold text-sm font-poppins shadow-[inset_0px_-1px_2px_rgba(255,_255,_255,_0.15),_inset_0px_0.5px_0.5px_rgba(0,_0,_0,_0.15)] hover:shadow-[inset_0px_-1px_2px_rgba(0,0,0,0.15),_inset_0px_0.5px_0.5px_rgba(255,255,255,0.15),0px_1px_24px_rgba(102,69,233,0.7)] transition ease-out duration-300"
        disabled={buttonState !== "idle"}
        onClick={() => {
          if (buttonState === "success") return;

          setButtonState("loading");

          setTimeout(() => {
            setButtonState("success");
          }, 1750);

          setTimeout(() => {
            setButtonState("idle");
          }, 3500);
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            className="flex items-center justify-center w-full h-full"
            key={buttonState}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
