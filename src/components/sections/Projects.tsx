import { BaseSection } from "../ui/BaseSection";
import { ProjectCard } from '../ui/ProjectCard';
import { useProjects } from '../../hooks/useProjects';

// Helper function to format relative time
function formatRelativeTime(timestamp: string): string {
  const now = new Date();
  const lastUpdate = new Date(timestamp);
  const diffInMinutes = Math.floor((now.getTime() - lastUpdate.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return "less than 1 minute ago";
  if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
}

export function Projects() {

  const { projects, loading, error, lastUpdated } = useProjects();

  if (loading) {
    return (
      <BaseSection id="projects" bgColor="bg-light">
        <h2 className="text-primary pb-16 text-center">Projects</h2>
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <span className="ml-4 text-primary">Fetching from GitHub...</span>
        </div>
      </BaseSection>
    )
  }
  if (error) {
    return (
      <BaseSection id="projects" bgColor="bg-light">
        <h2 className="text-primary pb-16 text-center">Projects</h2>
        <div className="text-center py-16">
          <p className="text-red-600 mb-4">Error loading projects: {error}</p>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </BaseSection>
    )
  }

  return (
    <BaseSection className="mb-16" id="projects" bgColor="bg-light">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-primary pb-16 text-center">Projects</h2>

        {lastUpdated && (
          <p className="text-gray-600 text-sm text-center mb-8">
            Last updated: {formatRelativeTime(lastUpdated)}
          </p>
        )}
        
        {/* 3 Cards Vertically */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {projects.length > 0 ? (  
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.imageUrl}
                title={project.name}
                description={project.description}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                technologies={project.topics}
              />
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600">No projects found. Please check your GitHub profile.</p>
            </div>
          )}
        </div>
      </div>
    </BaseSection>
  );
}