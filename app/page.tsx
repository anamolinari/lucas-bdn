"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Divider } from "./components/Divider";
import { IconArrow } from "./components/Icons";
import { Project } from "./components/Project";
import { SocialMedia } from "./components/SocialMedia";
import GlobalCover from "../public/assets/global-sonic/img-global-cover.png";
import spain from "../public/assets/icons/icon-spain.svg";
import LuxuryCover from "../public/assets/luxury-card/img-luxury-cover.png";
import RareCover from "../public/assets/rare-edition/img-rare-cover.png";
import TellusCover from "../public/assets/tellus/img-tellus-cover.png";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex flex-col text-base text-secondary">
      <div className="mt-10 space-y-4">
        <div className="flex items-center gap-1">
          <p className="">
            Designer with focus on beautiful experiences — Based in{" "}
            <span className="hidden sm:inline">Spain.</span>
          </p>
          <a
            href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDc4MTM3MTM0NDMyMzEx/?igsh=ZGl4cmZlOHJ3Z3Nw"
            target="_blank"
            className="photo relative flex items-center gap-1"
            rel="noopener noreferrer"
          >
            <Image
              src={spain}
              alt="Flag of Spain"
              className="w-6 h-6 sm:hidden"
            />
            <p className="block sm:hidden">Spain</p>
            <span
              className="photo absolute bottom-[10%] left-[-10%] z-[1] flex items-center justify-center
            w-[93px] h-6 gap-1 text-xs leading-4 tracking-wide text-primary whitespace-nowrap bg-card
            border border-line rounded-full opacity-0 invisible transition-all duration-200 ease sm:hidden"
            >
              My Photos
              <span className="rotate=20">
                <IconArrow />
              </span>
            </span>
          </a>
        </div>

        <div>
          <div>
            I fuse branding with digital product design, specializing in{" "}
            <span
              className="relative group underline text-primary cursor-pointer sm:text-secondary sm:decoration-transparent"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Animations
              <div
                className="absolute z-10 w-[420px] right-[-16px] cursor-default sm:invisible pointer-events-none"
                onMouseEnter={() => setIsHovering(false)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isHovering ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    mass: 1,
                    stiffness: 1200,
                    damping: 40,
                  }}
                  className="origin-top-right"
                >
                  <video
                    src="/animations.mp4"
                    autoPlay
                    muted
                    loop
                    className="video w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            </span>{" "}
            and Design Ops. My work spans from startups to big companies,
            offering a rich perspective on diverse design needs.
          </div>
        </div>

        <p>
          I lead projects from concept to testing, constantly exploring new tech
          to push boundaries.
        </p>
      </div>

      <Divider title="Projects" />

      <div className="flex flex-col gap-6 sm:gap-12">
        <Project
          title="Tellus App"
          text="Mobile app for passive income with savings account and boost account."
          img={TellusCover}
          alt="Tellus Cover"
          link="/tellus"
        />

        <Project
          title="Global Sonic"
          text="Reinventing a fire alarm system for a touch screen experience."
          img={GlobalCover}
          alt="Global Sonic Cover"
          link="/global-sonic"
        />

        <Project
          title="Rare Edition"
          text="Card Grading company with web platform."
          img={RareCover}
          alt="Rare Edition Cover"
          link="/rare-edition"
        />

        <Project
          title="Luxury Card"
          text="iOS and Android app for a deluxe credit card with exclusive perks and concierge."
          img={LuxuryCover}
          alt="Luxury Card Cover"
          link="/luxury-card"
          marginB="mb-0"
        />
      </div>

      <Divider title="Connect" />

      <SocialMedia />
    </div>
  );
}

/*
<span
              className="photo absolute bottom-[10%] left-[-10%] z-[1] flex items-center justify-center
            w-[93px] h-6 gap-1 text-xs leading-4 tracking-wide text-primary whitespace-nowrap bg-card
            border rounded-full opacity-0 invisible transition-all duration-200 ease"
            >
              My Photos
              <span className="rotate=20">
                <IconArrow />
              </span>
            </span>
    */
