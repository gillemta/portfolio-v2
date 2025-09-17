interface BaseSectionProps {
    id: string;
    children: React.ReactNode;
    bgColor?: string;
    className?: string;
    fullScreen?: boolean;
}

export function BaseSection({ id, children, bgColor = "bg-light", className = "", fullScreen = false }: BaseSectionProps) {
    const sectionClasses = fullScreen 
        ? `w-full ${bgColor} min-h-screen flex items-center justify-center py-20 ${className}`
        : `w-full ${bgColor} flex items-center justify-center pt-24 pb-0 ${className}`;
    
    return (
        <section 
            id={id} 
            className={sectionClasses}
        >
            <div className="container">
                <div className="text-center space-y-4">
                    {children}
                </div>
            </div>
        </section>
    )
}
