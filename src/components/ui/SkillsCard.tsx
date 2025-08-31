import React from 'react';
import { Card } from './Card';

interface SkillsCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export function SkillsCard({ icon, title, skills }: SkillsCardProps) {
  return (
    <Card size="sm">
      {/* Header: Icon + Title */}
      <div className="flex flex-col items-center mb-4">
        <div className="text-primary mr-3">
          {icon}
        </div>
        <h3 className="text-primary font-bold text-lg">{title}</h3>
      </div>
      
      {/* Skills as Pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}