interface PageHeaderProps {
  title: string;
  text: string;
}

export function PageHeader({ title, text }: PageHeaderProps) {
  return (
    <div
      className="flex flex-col gap-6 py-10"
      aria-labelledby="page-header-title"
    >
      <h2 id="page-header-title" className="text-base leading-6">
        {title}
      </h2>
      <p className="text-base left-5 text-secondary">{text}</p>
    </div>
  );
}
