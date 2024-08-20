import { FC } from "react";

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export const PageContent: FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <section
      className="flex flex-col text-start space-y-3"
      aria-labelledby={title}
    >
      <h3 className="text-base leading-6" aria-level={3}>
        {title}
      </h3>
      <div className="text-sm leading-5 text-secondary space-y-3">
        {children}
      </div>
    </section>
  );
};
