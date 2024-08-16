import { IconArrow } from "./Icons";

interface PageFooterProps {
  company: string;
  url: string;
  year: string;
  list: string[];
}

export function PageFooter({ company, url, year, list }: PageFooterProps) {
  const labelClass = "w-[135px] text-sm leading-5 text-secondary";
  const textClass = "text-sm leading-5 text-primary";

  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex gap-6">
        <span className={labelClass}>Live</span>
        <div className="icon flex items-center gap-1">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${textClass} underline hover:text-blue transition-colors duration-500 ease`}
            aria-label={`Visit ${company} website`}
          >
            {company}
          </a>
          <span className="transition-colors duration-500 ease">
            <IconArrow />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className={labelClass}>Year</span>
        <p className={textClass}>{year}</p>
      </div>

      <div className="flex items-start gap-6">
        <span className={labelClass}>Services</span>
        <ul className="flex flex-col gap-3">
          {list.map((item, index) => (
            <li key={index} className={textClass}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
