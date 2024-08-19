import { FadeInWhenVisible } from "./FadeInWhenVisible";

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export function PageContent({ title, children }: ContentSectionProps) {
  return (
    <div className="flex flex-col text-start space-y-3">
      <h3 className="text-base leading-6">{title}</h3>
      <div className="text-sm leading-5 text-secondary space-y-3">
        {children}
      </div>
    </div>
  );
}
