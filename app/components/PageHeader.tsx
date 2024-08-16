interface PageHeaderProps {
    title: string;
    text: string;
}

export function PageHeader({ title, text }: PageHeaderProps) {
    return (
        <div className="flex flex-col gap-6 py-10">
            <h2 className="text-base leading-6">{title}</h2>
            <p className="text-sm left-5 text-secondary">{text}</p>
        </div>
    )
}