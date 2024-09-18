import React from "react";
import InterlagosCircuit from "./Circuit";
import { motion } from "framer-motion";

interface ExpandedProps {
  Sector: string;
}

export function Collapsed() {
  return (
    <motion.div className="flex h-10 w-[224px] justify-between items-center px-[14px]">
      <CarIcon />
      <motion.p className="text-[#F74951] text-sm font-medium">Lap 25</motion.p>
    </motion.div>
  );
}

export function Expanded({ Sector }: ExpandedProps) {
  return (
    <motion.div className="flex w-[380px] h-[180px]">
      <motion.div className="relative h-full w-1/2">
        <p className="absolute bottom-8 left-8 text-[#F74951] font-semibold text-sm">
          {Sector}
        </p>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[108px] w-[167px] items-center justify-center">
          <InterlagosCircuit />
        </span>
      </motion.div>
      <motion.div className="flex flex-col gap-1 h-full w-1/2 pl-6 pr-8 py-8">
        <motion.div className="flex w-full items-center justify-between">
          <HamiltonNumber />
          <motion.p className="text-[#F74951] font-medium">Lap 25</motion.p>
        </motion.div>
        <LapInfo LapNumber="Lap 24" LapTime="1:14.423" />
        <LapInfo LapNumber="Lap 23" LapTime="1:13.945" />
        <LapInfo LapNumber="Lap 22" LapTime="1:14.092" />
      </motion.div>
    </motion.div>
  );
}

export function LapInfo({
  LapNumber,
  LapTime,
}: {
  LapNumber: string;
  LapTime: string;
}) {
  return (
    <div className="flex w-full justify-between pt-1 border-t-[0.5px] border-[#F74951]/50">
      <p className="text-[#F74951]">{LapNumber}</p>
      <p className="text-[#F74951]">{LapTime}</p>
    </div>
  );
}

export function CarIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H9C9.55228 17 10 16.5523 10 16C10 15.4477 9.55228 15 9 15H3Z"
        fill="#FB3B48"
      />
      <path
        d="M10.3656 17.3119L10.6081 17.0362C11.7472 15.7418 13.3881 15 15.1124 15H17.9V18H26.5995C25.4678 18.963 24.75 20.3977 24.75 22C24.75 23.1154 25.0979 24.1496 25.691 25H12.309C12.9021 24.1496 13.25 23.1154 13.25 22C13.25 19.9515 12.0767 18.177 10.3656 17.3119Z"
        fill="#FB3B48"
      />
      <path
        d="M34.309 25H37C37.5523 25 38 24.5523 38 24C38 23.4477 37.5523 23 37 23H35.1549C35.0137 23.7323 34.7203 24.4103 34.309 25Z"
        fill="#FB3B48"
      />
      <path
        d="M8 18C5.79086 18 4 19.7909 4 22C4 24.2091 5.79086 26 8 26C10.2091 26 12 24.2091 12 22C12 19.7909 10.2091 18 8 18Z"
        fill="#FB3B48"
      />
      <path
        d="M30 18C27.7909 18 26 19.7909 26 22C26 24.2091 27.7909 26 30 26C32.2091 26 34 24.2091 34 22C34 19.7909 32.2091 18 30 18Z"
        fill="#FB3B48"
      />
    </svg>
  );
}

export function HamiltonNumber() {
  return (
    <svg
      width="45"
      height="14"
      viewBox="0 0 45 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.807884 10.0858L0.816881 10.0951L0.82635 10.104C1.05546 10.3186 1.3785 10.4318 1.70887 10.4979C2.05197 10.5666 2.47195 10.5972 2.95856 10.5972H14.7862L13.9879 11.7807L13.462 12.5603H14.4024H19.2024H19.4682L19.6169 12.3399L20.7924 10.5972H20.9586H23.5026H23.7684H32.7862L31.9879 11.7807L31.462 12.5603H32.4024H37.2024H37.4682L37.6169 12.3399L38.7924 10.5972H41.5026H41.7684L41.9171 10.3768L42.8297 9.02379L43.3555 8.24419H42.4152H40.3795L43.1999 4.06283C43.4406 3.7059 43.6103 3.31162 43.5721 2.91014C43.5304 2.47245 43.258 2.15877 42.9022 1.95707C42.5636 1.75931 42.1029 1.63558 41.5649 1.5574C41.0153 1.47754 40.3413 1.43945 39.549 1.43945H39.229C38.5463 1.43945 37.9104 1.46191 37.3219 1.50725C36.7299 1.55287 36.1438 1.63042 35.5634 1.73995C34.9812 1.84984 34.3794 2.00042 33.7583 2.191C33.1396 2.38081 32.4584 2.61919 31.7152 2.90537C31.7152 2.90539 31.7151 2.90541 31.7151 2.90543L23.9713 5.88427L25.1999 4.06283C25.4406 3.7059 25.6103 3.31162 25.5721 2.91014C25.5304 2.47245 25.258 2.15877 24.9022 1.95707C24.5636 1.75931 24.1029 1.63558 23.5649 1.5574C23.0153 1.47754 22.3413 1.43945 21.549 1.43945H21.229C20.5463 1.43945 19.9104 1.46191 19.3219 1.50725C18.7299 1.55287 18.1438 1.63042 17.5634 1.73995C16.9812 1.84984 16.3794 2.00042 15.7583 2.191C15.1396 2.38081 14.4584 2.61919 13.7152 2.90537C13.7152 2.90539 13.7151 2.90541 13.7151 2.90543L3.47393 6.84495L3.47213 6.84565C2.82143 7.09884 2.27039 7.35222 1.82493 7.60725L1.82492 7.60722L1.82007 7.61007C1.38261 7.86709 1.02476 8.15604 0.798745 8.49113C0.636499 8.73167 0.514597 9.00084 0.501212 9.28797C0.486852 9.59605 0.600233 9.87003 0.807884 10.0858ZM34.3733 8.24419H25.88L36.5612 4.02273L36.5613 4.02287L36.5723 4.01821C36.7589 3.93926 36.9177 3.88909 37.0508 3.86192L37.0508 3.8621L37.0642 3.85899C37.1552 3.83778 37.2542 3.82246 37.3616 3.81383L34.3733 8.24419ZM19.0508 3.86192L19.0508 3.8621L19.0642 3.85899C19.1552 3.83778 19.2542 3.82246 19.3616 3.81383L16.3733 8.24419H7.87999L18.5612 4.02273L18.5613 4.02287L18.5723 4.01821C18.7589 3.93926 18.9177 3.88909 19.0508 3.86192Z"
        fill="black"
        stroke="#F74951"
      />
    </svg>
  );
}

export function Phone() {
  return (
    <svg
      width="398"
      height="533"
      viewBox="0 0 398 533"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M397 533V90.6C397 59.2371 397 43.5556 390.896 31.5765C385.527 21.0395 376.961 12.4725 366.423 7.10364C354.444 1 338.763 1 307.4 1H90.6C59.2371 1 43.5556 1 31.5765 7.10364C21.0395 12.4725 12.4725 21.0395 7.10364 31.5765C1 43.5556 1 59.2371 1 90.6V533"
        stroke="url(#paint0_linear_362_2558)"
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_362_2558"
          x1="199"
          y1="1"
          x2="199"
          y2="533"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D9D9D9" />
          <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
