import { ReactNode } from "react";
import { InstagramIcon, SpotifyIcon, TwitterIcon } from "./Icons";

interface SocialMediaProps {
  text: string;
  url: string;
  icon: ReactNode;
  name: string;
}

const SocialMediaData: SocialMediaProps[] = [
  {
    text: "Listen with me on",
    url: "https://open.spotify.com/user/1286479861?si=0584eaece4534444&nd=1&dlsi=3e0604c287bb4fbb",
    icon: <SpotifyIcon />,
    name: "Spotify",
  },
  {
    text: "Find me on",
    url: "https://x.com/i/flow/login?redirect_after_login=%2FLucas_bordignon",
    icon: <TwitterIcon />,
    name: "Twitter/X",
  },
  {
    text: "My photography on",
    url: "https://www.instagram.com/lucasbordignon/",
    icon: <InstagramIcon />,
    name: "Instagram",
  },
];

export function SocialMedia() {
  return (
    <div>
      {SocialMediaData.map((social) => (
        <div
          key={social.name}
          className="flex items-center gap-1 mb-10 text-sm leading-5 hover:text-primary transition-all duration-300 ease"
        >
          <p>{social.text}</p>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social flex items-center gap-1 text-primary cursor-pointer"
            aria-label={`Visit ${social.name} profile`}
            title={social.name}
          >
            <span className="flex items-center">{social.icon}</span>
            <p>{social.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
