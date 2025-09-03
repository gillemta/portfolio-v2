import React, { useState } from 'react';
import { Card } from './Card';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
    technologies: string[];
}

export function ProjectCard({
    image,
    title,
    description,
    githubUrl,
    liveUrl,
    technologies,
}: ProjectCardProps) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <Card size="md" className="project-card">
            {/* Image Section */}
            <div className="project-image-container">
                {imageError ? (
                    <div className="project-image-fallback">
                    </div>
                ) : (
                    <img 
                        src={image} 
                        alt={title}
                        className="project-image"
                        onError={handleImageError}
                    />
                )}
            </div>
            {/* Content Section - Dark Background */}
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                
                {/* Technologies */}
                <div className="project-technologies">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                    {tech}
                    </span>
                ))}
                </div>
                
                {/* Action Buttons */}
                <div className="project-buttons">
                {githubUrl && (
                    <a 
                    href={githubUrl} 
                    className="project-button project-button-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    GitHub
                    </a>
                )}
                {liveUrl && (
                    <a 
                    href={liveUrl} 
                    className="project-button project-button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Live Demo
                    </a>
                )}
                </div>
            </div>
    </Card>
  );
}