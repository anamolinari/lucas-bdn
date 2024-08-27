import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";

// Define the possible result types
type ResultType = "win" | "draw" | "lose";

// Define the props for the component
interface ResultsProps {
  result: ResultType;
  zIndex?: number;
}

interface TeamBadgeProps {
  src: string;
  alt: string;
  hasBackground?: boolean;
  zIndex?: number;
}

interface TeamLineProps {
  game: string;
  src: string;
  alt: string;
  team: string;
  homeAway: "H" | "A";
  result: ResultType;
  pts: number;
  homeScore: number;
  awayScore: number;
}

export function Results({ result, zIndex }: ResultsProps) {
  const zIndexClass = zIndex !== undefined ? `z-[${zIndex}]` : "";

  // Define the styles for each result type
  const styles = {
    win: {
      bg: "bg-[#01FC7A]",
      text: "text-black",
      letter: "W",
    },
    draw: {
      bg: "bg-[#767676]",
      text: "text-white",
      letter: "D",
    },
    lose: {
      bg: "bg-[#FF1751]",
      text: "text-white",
      letter: "L",
    },
  };

  // Get the correct style based on the result
  const style = styles[result];

  return (
    <div
      className={`flex -ml-2 ${style.text} ${style.bg} ${zIndexClass} w-8 h-8 rounded-full items-center justify-center text-xs font-extrabold`}
    >
      <p>{style.letter}</p>
    </div>
  );
}

export function TeamBadge({
  src,
  alt,
  hasBackground = false,
  zIndex,
}: TeamBadgeProps) {
  const zIndexClass = zIndex !== undefined ? `z-[${zIndex}]` : "";

  if (hasBackground) {
    return (
      <span
        className={`relative inline-flex -ml-2 items-center justify-center h-8 w-8 rounded-full bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.40)] ${zIndexClass}`}
      >
        <Image src={src} alt={alt} width={20} height={20} />
      </span>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center h-8 w-8 ${zIndexClass}`}
    >
      <Image src={src} alt={alt} width={32} height={32} />
    </div>
  );
}

export function TeamLine({
  game,
  src,
  alt,
  team,
  homeAway,
  result,
  pts,
  homeScore,
  awayScore,
}: TeamLineProps) {
  return (
    <AnimatePresence>
      <motion.div className="w-full flex items-center justify-between px-4 py-2">
        <p className="text-sm text-neutral-500 w-8 text-center">{game}</p>
        <div className="flex w-[104px] gap-2 items-center">
          <Image src={src} alt={alt} width={32} height={32} />
          <p className="text-sm text-white">
            {team} ({homeAway})
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex text-black gap-1 w-16 h-8 rounded bg-white items-center justify-center font-bold">
            <p className="w-3">{homeScore}</p>
            <p>-</p>
            <p className="w-3">{awayScore}</p>
          </div>
          <span className="ml-2">
            <Results result={result} />
          </span>
        </div>
        <div className="flex h-8 w-16 px-2 bg-neutral-800 rounded items-center justify-center">
          <p className="text-white font-bold text-sm">{pts}pts</p>
        </div>
        <button className="bg-neutral-800 rounded-full h-8 w-8 items-center justify-center flex hover:bg-neutral-700 active:bg-neutral-800 group transition-all duration-200">
          <PlusIcon className="text-white h-5 w-5 stroke-2 group-hover:scale-110 " />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
