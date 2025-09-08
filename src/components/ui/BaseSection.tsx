interface BaseSectionProps {
    id: string;
    children: React.ReactNode;
    bgColor?: string;
    className?: string;
}

export function BaseSection({ id, children, bgColor = "bg-light", className = "" }: BaseSectionProps) {
    return (
        <section 
            id={id} 
            className={`w-full ${bgColor} min-h-screen flex items-center justify-center py-10 ${className}`}
        >
            <div className="container">
                <div className="text-center space-y-4">
                    {children}
                </div>
            </div>
        </section>
    )
}
