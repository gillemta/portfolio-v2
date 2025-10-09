import type { Project } from "../types/Project";

// Configuration
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'gillemta';

// GraphQL query for pinned repositories
const PINNED_REPOS_QUERY = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 3, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
            url
            homepageUrl
          }
        }
      }
    }
  }
`;

// GitHub GraphQL response interfaces
interface GraphQLRepository {
  name: string;
  description: string | null;
  repositoryTopics: {
    nodes: Array<{
      topic: {
        name: string;
      };
    }>;
  };
  url: string;
  homepageUrl: string | null;
}

interface GraphQLResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: GraphQLRepository[];
      };
    };
  };
  errors?: Array<{
    message: string;
  }>;
}

// Main function to fetch pinned repositories using GraphQL
export async function fetchPinnedRepositories(): Promise<Project[]> {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    
    if (!token) {
      console.warn('GitHub token required for pinned repositories. Using public API fallback.');
      return fetchPublicRepositories();
    }

    

    const response = await fetch(`${GITHUB_API_BASE}/graphql`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'portfolio-app'
      },
      body: JSON.stringify({
        query: PINNED_REPOS_QUERY
      })
    });

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      if (response.status === 401) {
        throw new Error('Invalid GitHub token. Please check your configuration.');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: GraphQLResponse = await response.json();
    
    if (result.errors) {
      throw new Error(`GraphQL errors: ${result.errors.map(e => e.message).join(', ')}`);
    }

    const repositories = result.data.user.pinnedItems.nodes;
    
    if (repositories.length === 0) {
      
      return [];
    }

    
    return repositories.map(repo => transformGraphQLToProject(repo));
    
  } catch (error) {
    console.error('Failed to fetch pinned repositories:', error);
    return [];
  }
}

// Fallback function for public API (no authentication)
async function fetchPublicRepositories(): Promise<Project[]> {
  try {
    
    
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const repositories = await response.json();
    
    return repositories.map((repo: any) => transformRESTToProject(repo));
    
  } catch (error) {
    console.error('Failed to fetch public repositories:', error);
    return [];
  }
}

// Transform GraphQL response to Project interface
function transformGraphQLToProject(repo: GraphQLRepository): Project {
  return {
    name: repo.name,
    description: repo.description || 'No description available',
    topics: repo.repositoryTopics.nodes.map(topic => topic.topic.name),
    imageUrl: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/assets/project-image.jpg`,
    githubUrl: repo.url,
    liveUrl: repo.homepageUrl || undefined
  };
}

// Transform REST API response to Project interface (fallback)
function transformRESTToProject(repo: any): Project {
  return {
    name: repo.name,
    description: repo.description || 'No description available',
    topics: repo.topics || [],
    imageUrl: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/assets/project-image.jpg`,
    githubUrl: repo.html_url,
    liveUrl: repo.homepage || undefined
  };
}