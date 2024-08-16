interface DividerProps {
  title: string;
}

export function Divider({ title }: DividerProps) {
  return (
    <div className="pt-6 pb-3 my-10 border-b" aria-label={title}>
      <h2 className="text-sm leading-5">{title}</h2>
    </div>
  );
}
