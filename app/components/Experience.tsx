type ExperienceType = {
  id: number;
  position: string;
  period: string;
  company: string;
};

export function Experience({ experiences }: { experiences: ExperienceType[] }) {
  return (
    <section
      className="flex flex-row sm:flex-col gap-6 py-10 mt-10 text-sm leading-5 text-secondary border-y-[0.75px] border-line"
      aria-labelledby="experience-title"
    >
      <h3 id="experience-title" className="flex-shrink-0 w-[135px]">
        Experiences
      </h3>
      <ul className="flex flex-col space-y-4 flex-grow">
        {experiences.map((exp) => (
          <li key={exp.id} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <strong className="text-primary">{exp.position}</strong>
              <p className="mr-3">{exp.period}</p>
            </div>
            <span>{exp.company}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
