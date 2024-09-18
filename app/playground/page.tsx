"use client";

import Badge from "../components/Badge";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";
import FantasyCard from "../components/playground-components/fantasy/FantasyCard";
import FileDrop from "../components/playground-components/file-drop/FileDrop";
import ItemDescription from "../components/playground-components/item-description";
import NavBarTest from "../components/playground-components/nav-bar-playground/NavBarTest";
import AnimatedText from "../components/playground-components/random-ones/AnimatedText";
import AudioSlider from "../components/playground-components/random-ones/AudioSlider";
import CardParallax from "../components/playground-components/random-ones/CardParallax";
import LocationCard from "../components/playground-components/random-ones/LocationCard";
import SuccessButton from "../components/playground-components/success-button/SuccessButton";

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
            technologies. More motion projects can be found{" "}
            <a
              href="https://motion-elements-eta.vercel.app/"
              target="_blank"
              className="text-primary underline hover:text-blue cursor-pointer"
            >
              here
            </a>{" "}
            , or you can check them all out on my{" "}
            <a
              href="https://github.com/lucasbordignon0"
              target="_blank"
              className="text-primary underline hover:text-blue cursor-pointer"
            >
              Github
            </a>
            .
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <section className="flex flex-col gap-6 mt-4">
          <div className="w-full aspect-[4/3] rounded-xl border border-[#1D1F1E]/10 bg-neutral-950 bg-cover overflow-hidden">
            <span className="flex w-full h-full items-center justify-center py-10">
              <SuccessButton />
            </span>
          </div>
          <ItemDescription
            title="Success Button"
            description="Button with multiple states to indicate loading and success."
            badges={["Next.js", "Tailwind CSS", "Framer Motion"]}
          />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <section className="flex flex-col gap-6 mt-4">
          <div className="w-full aspect-[4/3] rounded-xl border border-[#1D1F1E]/10 bg-[#F5F5F5] bg-cover overflow-hidden">
            <span className="flex w-full h-full items-center justify-center py-10">
              <FantasyCard />
            </span>
          </div>
          <ItemDescription
            title="Dynamic Card"
            description="Interaction based on iOS Dynamic Island. Here used to see more info about a player in PLF."
            badges={["Next.js", "Tailwind CSS", "Framer Motion"]}
          />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <section className="flex flex-col gap-6 mt-4">
          <div className="w-full aspect-video rounded-xl border border-[#1D1F1E]/10 bg-black bg-cover overflow-hidden">
            <span className="flex w-full h-full items-center justify-center">
              <AnimatedText />
            </span>
          </div>
          <ItemDescription
            title="Text Clipping Mask"
            description="Experimenting with text clip mask. Trying to recreate standard effects from After Effects with code."
            badges={["Next.js", "Tailwind CSS", "Framer Motion"]}
          />
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
