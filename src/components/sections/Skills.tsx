import { BaseSection } from "../ui/BaseSection"
import { SkillsCard } from '../ui/SkillsCard';
import { 
  FaCode, 
  FaServer, 
  FaReact, 
  FaCloud 
} from 'react-icons/fa';

export function Skills() {
  return (
    <BaseSection id="skills">
      <h2 className="text-primary pb-16 text-center">Skills</h2>
      
      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 gap-6 justify-items-center">
        <SkillsCard 
            icon={<FaCode size={24} />}
            title="Languages"
            skills={["C#", "Java", "Python", "SQL", "JavaScript", "C++", "Go"]}
        />

        <SkillsCard
          icon={<FaServer size={24} />}
          title="Backend Development"
          skills={[".NET Core", "Spring Boot", "Flask", "Express", "Node.js"]}
        />
        
        <SkillsCard
          icon={<FaReact size={24} />}
          title="Frontend & Web"
          skills={["Angular", "JavaScript", "React", "TypeScript"]}
        />
        
        <SkillsCard
          icon={<FaCloud size={24} />}
          title="DevOps & Cloud"
          skills={["Git", "Docker", "Azure", "AWS", "Jenkins", "Jira"]}
        />
        </div>
    </BaseSection>
  );
}
