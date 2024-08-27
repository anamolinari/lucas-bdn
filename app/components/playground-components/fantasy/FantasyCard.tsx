"use client";

import Image from "next/image";
import * as React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Results, TeamBadge, TeamLine } from "./FantasyComp";

const containerVariants = {
  closed: { width: "300px", height: "48px" },
  open: { width: "480px", height: "267px" },
};

const imageVariants = {
  closed: { width: "32px", height: "32px", borderRadius: "50%" },
  open: { width: "64px", height: "64px", borderRadius: "16px" },
};

export default function FantasyCard() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    // Main Container
    <motion.div
      className="flex flex-col bg-black rounded-3xl font-sans cursor-pointer p-2 overflow-hidden"
      variants={containerVariants}
      animate={isOpen ? "open" : "closed"}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.5,
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header */}
      <div className="w-full justify-between items-center inline-flex">
        {/* Player Details */}
        <motion.div className="flex gap-3 items-center">
          {/* Player Image */}
          <motion.div
            className="bg-neutral-800 border border-neutral-700 overflow-hidden"
            variants={imageVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              duration: 0.5,
            }}
          >
            <Image
              src="/assets/playground/son.png"
              alt="son"
              className="w-full h-full object-cover"
              width={64}
              height={64}
            />
          </motion.div>
          {/* Player Position */}
          <motion.div className="flex flex-col">
            <motion.div
              animate={isOpen ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
            >
              {isOpen && (
                <div className=" px-1 py-0.5 mb-1 text-xs text-neutral-500 bg-neutral-800 rounded inline-flex">
                  Midfielder
                </div>
              )}
            </motion.div>
            <motion.h4
              layout
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.5,
              }}
              className="text-white text-base font-semibold"
            >
              Son Heung-min
            </motion.h4>
          </motion.div>
        </motion.div>
        {/* Header Right Side Content */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isOpen
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: -10, scale: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              duration: 0.5,
            }}
            className="text-sm text-neutral-500 absolute -ml-[72px]"
          >
            Up Next
          </motion.p>
          <motion.div className="relative">
            <span className="z-30 relative">
              <TeamBadge
                hasBackground={true}
                src="/assets/playground/arsenal.png"
                alt="arsenal"
                zIndex={30}
              />
            </span>
            <span className="z-20 relative">
              <TeamBadge
                hasBackground={true}
                src="/assets/playground/brentford.png"
                alt="brentford"
                zIndex={20}
              />
            </span>
            <span className="z-10 relative">
              <TeamBadge
                hasBackground={true}
                src="/assets/playground/united.png"
                alt="united"
                zIndex={10}
              />
            </span>
          </motion.div>
        </motion.div>
      </div>
      {/* Table */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              duration: 0.5,
            }}
          >
            {/* Table Header */}
            <motion.div className="w-full flex justify-between px-4 py-2 text-center mt-1">
              <p className="text-xs text-neutral-600 w-[32px]">GW</p>
              <p className="text-xs text-neutral-600 w-[104px]">Opponent</p>
              <p className="text-xs text-neutral-600 w-[108px]">Result</p>
              <p className="text-xs text-neutral-600 w-[64px]">Points</p>
              <p className="text-xs text-neutral-600 w-[32px]">More</p>
            </motion.div>
            {/* Table Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.5,
              }}
              className="w-full flex flex-col gap"
            >
              <TeamLine
                game="3"
                src="/assets/playground/newcastle.png"
                alt="newcastle"
                team="NEW"
                homeAway="H"
                result="win"
                pts={16}
                homeScore={5}
                awayScore={0}
              />
              <TeamLine
                game="2"
                src="/assets/playground/everton.png"
                alt="everton"
                team="EVE"
                homeAway="H"
                result="draw"
                pts={12}
                homeScore={2}
                awayScore={2}
              />
              <TeamLine
                game="1"
                src="/assets/playground/leicester.png"
                alt="leicester"
                team="LEI"
                homeAway="A"
                result="lose"
                pts={5}
                homeScore={1}
                awayScore={2}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
