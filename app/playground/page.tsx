"use client";

import Badge from "../components/Badge";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import CardsTest from "./playground-components/animated-card/CardsTest";
import FileDrop from "./playground-components/file-drop/FileDrop";
import ItemDescription from "./playground-components/item-description";
import NavBarTest from "./playground-components/nav-bar-playground/NavBarTest";
import AudioSlider from "./playground-components/random-ones/AudioSlider";
import LocationCard from "./playground-components/random-ones/LocationCard";

export default function Playground() {
  return (
    <div className="flex flex-col gap-6 pb-10">
      <FadeInWhenVisible delay={0}>
        <section className="flex flex-col gap-6">
          <h2 className="mt-10 text-base leading-6 text-primary">Playground</h2>
          <div className="text-sm leading-5 text-secondary space-y-2">
            Next.js, Tailwind CSS, and Framer Motion are my go-to tools for
            transforming designs into reality. This space showcases the exciting
            projects I've created while experimenting with these powerful
            technologies.
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <section className="flex flex-col gap-6 mt-4">
          <div className="w-full aspect-video rounded-xl border border-[#1D1F1E]/10 bg-neutral-100 hover:bg-neutral-200 transition-colors duration-500 overflow-hidden">
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

      <FadeInWhenVisible delay={0.2}>
        <section className="flex flex-col gap-6 mt-4">
          <div className="w-full aspect-video rounded-xl border border-[#1D1F1E]/10 bg-black overflow-hidden">
            <span className="flex w-full h-full p-3 items-center justify-center">
              <AudioSlider />
            </span>
          </div>
          <ItemDescription
            title="Audio Slider"
            description="Playing with CSS shadows, masks and gradients. Added a small animated SVG there too. Functional slider is a work in progress."
            badges={["Tailwind CSS"]}
          />
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
            description="Simple navbar I created to work on the logic of only having one item active at a time."
            badges={["Tailwind CSS"]}
          />
        </section>
      </FadeInWhenVisible>
    </div>
  );
}
