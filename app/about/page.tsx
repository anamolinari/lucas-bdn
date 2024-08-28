"use client";
import Image from "next/image";

import ImgAbout from "../../public/assets/images/about.png";
import { Experience } from "../components/Experience";
import { PageImage } from "../components/PageImage";
import { MusicAndInspiration } from "../components/MusicAndInspiration";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";

interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
}

interface MusicAndInspirationItem {
  image: string;
  name: string;
  text: string;
  url: string;
  imageRounded?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    position: "Product Designer",
    company: "Utility Agency",
    period: "2022 — 2024",
  },
  {
    id: 2,
    position: "Design Consultant",
    company: "Rare Edition",
    period: "2021 — 2024",
  },
  {
    id: 3,
    position: "Product Designer",
    company: "Tellus App",
    period: "2021 — 2022",
  },
  {
    id: 4,
    position: "Product Designer",
    company: "Writeway",
    period: "2020 — 2021",
  },
  {
    id: 5,
    position: "Product Designer",
    company: "Arctouch",
    period: "2018 — 2019",
  },
  {
    id: 6,
    position: "Design Consultant",
    company: "Vexter",
    period: "2017 — 2019",
  },
  {
    id: 7,
    position: "UX/UI Designer",
    company: "Clint",
    period: "2015 — 2018",
  },
];

const musics: MusicAndInspirationItem[] = [
  {
    image: "/assets/music-inspiration/music-i-know-the-end.png",
    name: "I Know The End",
    text: "Phoebe Bridgers",
    url: "https://open.spotify.com/intl-pt/track/0pJW1Xw3aY4Eh6k5iuBkfI?si=d153e70e1eae4ef7&nd=1&dlsi=8e1325bdae084636",
  },
  {
    image: "/assets/music-inspiration/music-yeah-x-10.png",
    name: "Yeah x10",
    text: "Trent Reznor and Atticus Ross",
    url: "https://open.spotify.com/intl-pt/track/0kqLsYEktElJRKFprEiJsI?si=ff2a904559f44024&nd=1&dlsi=2ec669aca8ba4d91",
  },
  {
    image: "/assets/music-inspiration/music-creatures-in-heaven.png",
    name: "Creatures in Heaven",
    text: "Glass Animals",
    url: "https://open.spotify.com/track/1e7EdcxkUPFZWfuY4VI3rh?si=2aa9882e11874299",
  },
  {
    image: "/assets/music-inspiration/music-on-n-on.png",
    name: "On’n’On",
    text: "Justice",
    url: "https://open.spotify.com/intl-pt/track/3MtE0w7ARaD04f8rfxsZSS?si=4d6cc274b4ff46f8&nd=1&dlsi=e97558bfd6254040",
  },
];

const inspirations: MusicAndInspirationItem[] = [
  {
    image: "/assets/music-inspiration/people-eryc.png",
    name: "ERYC",
    text: "Design Engineer",
    url: "https://eryc.cc/lab/",
    imageRounded: "rounded-full",
  },
  {
    image: "/assets/music-inspiration/people-ya.png",
    name: "Yã Izidoro",
    text: "Visual Designer",
    url: "https://yaizidoro.com/",
    imageRounded: "rounded-full",
  },

  /*
  {
    image: "/assets/music-inspiration/people-ana.png",
    name: "Ana Molinari",
    text: "Software Engineer",
    url: "",
    imageRounded: "rounded-full",
  },*/
];

export default function About() {
  return (
    <div>
      <FadeInWhenVisible delay={0}>
        <section className="flex flex-col gap-6">
          <h2 className="mt-10 text-base leading-6 text-primary">About me</h2>
          <div className="text-sm leading-5 text-secondary space-y-2">
            <div>
              A lifelong fascination with technology and its potential to
              improve our lives sparked my journey into design. Hailing from
              south Brazil, I grew up alongside the ever-evolving landscape of
              tech, constantly curious about its impact on the way we interact
              with the world.{" "}
            </div>
            <div>
              This curiosity led me to explore the world of design. Fueled by a
              desire to bridge the gap between ideas and their tangible
              expressions, I was constantly pursuing ways to bring my ideas to
              the real world and have real people using it.{" "}
            </div>
            <div>
              Since 2022 I'm at Utility Agency, working on Web and Mobile
              projects. I'm always involved in side projects that fuel my
              interest in software development, arts and sports.{" "}
            </div>
          </div>

          <PageImage image={ImgAbout} alt="Lucas Bordignon" />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <Experience experiences={experiences} />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.6}>
        <MusicAndInspiration title="On repeat" items={musics} />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.8}>
        <MusicAndInspiration title="Inspiration" items={inspirations} />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={1}>
        <section className="flex items-start gap-6 mb-10 sm:flex-col sm:gap-4">
          <h3 className="w-[130px] text-sm leading-5 tracking-wide text-secondary">
            Let's chat
          </h3>
          <p className="flex-1 text-sm leading-5 tracking-wide">
            Do you have an idea or a project and want to collaborate?{" "}
            <a
              className="cursor-pointer underline hover:text-blue transition-colors duration-300 ease"
              href="mailto:l.bordignon0@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send me a message
            </a>
            , and we'll take it from there!
          </p>
        </section>
      </FadeInWhenVisible>
    </div>
  );
}
