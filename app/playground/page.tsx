"use client";

import Badge from "../components/Badge";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import CardsTest from "./playground-components/animated-card/CardsTest";
import FileDrop from "./playground-components/file-drop/FileDrop";
import ItemDescription from "./playground-components/item-description";
import NavBarTest from "./playground-components/nav-bar-playground/NavBarTest";
import LocationCard from "./playground-components/random-ones/LocationCard";

export default function Playground() {
  return (
    <div className="flex flex-col gap-6 pb-10">
      <FadeInWhenVisible delay={0}>
        <section className="flex flex-col gap-6">
          <h2 className="mt-10 text-base leading-6 text-primary">
            Experiments
          </h2>
          <div className="text-sm leading-5 text-secondary space-y-2">
            This is a compilation of various designs, explorations, rejected
            versions, and any other content that I haven't had the opportunity
            to showcase elsewhere.
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <section className="flex flex-col gap-6 mt-4">
          <div className="w-full aspect-video rounded-xl border border-[#1D1F1E]/10 bg-black overflow-hidden">
            <span className="flex w-full h-full items-center justify-center">
              <NavBarTest />
            </span>
          </div>
          <ItemDescription
            title="Floating Navbar"
            description="First iteration of the floating navbar to figure out the logic behind it, using functions to keep only one active at a time."
            badges={["Next.js", "Tailwind CSS"]}
          />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <section className="flex flex-col gap-6 mt-4">
          <div className="w-full aspect-video rounded-xl border border-[#1D1F1E]/10 bg-neutral-100 hover:bg-neutral-200/30 transition-colors duration-500 overflow-hidden">
            <span className="flex w-full h-full items-center justify-center">
              <FileDrop />
            </span>
          </div>
          <ItemDescription
            title="File Drop"
            description="Animated empty state with illustration and hover state."
            badges={["Next.js", "Tailwind CSS"]}
          />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <section className="flex flex-col gap-6 mt-4">
          <div className="w-full aspect-video rounded-xl border border-[#1D1F1E]/10 bg-stone-200 overflow-hidden">
            <span className="flex w-full h-full items-center justify-center gap-4">
              <p className="text-sm text-primary font-mono font-semibold">
                Join Our
              </p>
              <CardsTest />
              <p className="text-sm text-primary font-mono font-semibold">
                Community
              </p>
            </span>
          </div>
          <ItemDescription
            title="Animated Images"
            description="Inline animation with Framer Motion. Bringing life to regular headings with snappy transitions."
            badges={["Next.js", "Tailwind CSS", "Framer Motion"]}
          />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <section className="flex flex-col gap-6 mt-4">
          <div className="w-full aspect-video rounded-xl border border-[#1D1F1E]/10 bg-white overflow-hidden">
            <span className="flex w-full h-full p-3 items-center justify-center">
              <LocationCard />
            </span>
          </div>
          <ItemDescription
            title="Progressive Blur"
            description="Playing around with CSS masks and background blur. I also applied various CSS filters to the video."
            badges={["Next.js", "Tailwind CSS"]}
          />
        </section>
      </FadeInWhenVisible>
    </div>
  );
}
