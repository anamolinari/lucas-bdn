"use client";

import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { Collapsed, Expanded, Phone } from "./F1Components";

export default function F1Live() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="flex items-center justify-center w-full h-dvh bg-[#B2B2B2] antialiased">
      <div className="relative flex w-[380px] h-[200px] justify-center">
        <span className="absolute left-1/2 -top-2 -translate-x-1/2">
          <Phone />
        </span>
        <AnimatePresence initial={false}>
          {!open ? (
            <motion.div
              layoutId="pill"
              className="flex min-w-[100px] h-fit bg-black overflow-hidden cursor-pointer"
              onClick={() => setOpen(true)}
              style={{ borderRadius: 32 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}
            >
              <motion.div
                key="collapsedContent"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}
              >
                <Collapsed />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              ref={ref}
              key="expandedContent"
              layoutId="pill"
              className="absolute flex w-[380px] h-[180px] bg-black overflow-hidden"
              style={{ borderRadius: 48 }}
              onClick={() => setOpen(false)}
              transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}
              >
                <Expanded Sector="S1" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
