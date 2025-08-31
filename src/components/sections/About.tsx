import { BaseSection } from "../ui/BaseSection"

export function About() {
    return (
        <BaseSection id="about">
            <h2 className="text-primary py-12">About Me</h2>
            <div className="flex justify-center mb-12">
                <img 
                    src="/src/assets/profile.jpeg" 
                    alt="Tashan Gillem" 
                    className="w-64 h-64 rounded-full object-cover object-center shadow-lg" 
                />
            </div>
            <p className="text-justify hyphens-auto leading-relaxed max-w-prose mx-auto pb-8">
                I am a backend-focused software engineer passionate about building reliable and scalable APIs while modernizing enterprise systems. 
                At Western & Southern Financial Group, I have architected .NET Core services, streamlined CI/CD pipelines, and led migrations that improved efficiency across dozens of applications. 
                My foundation also includes frontend experience with frameworks such as Angular, Blazor, and React, which I am currently using to build this portfolio. 
                This allows me to connect backend logic with intuitive user experiences.
                <br />
                <br />
                Looking ahead, I am focused on growing into a backend API specialist while continuing to strengthen my full-stack versatility. 
                Outside of coding, I enjoy hiking new trails and watching soccer.
            </p>
        </BaseSection>
    )
}
