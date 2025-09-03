import { useState, useEffect } from 'react';
import { fetchPinnedRepositories } from '../services/githubService';
import type { Project } from '../types/Project';

interface CacheData {
    projects: Project[];
    timestamp: number;
    lastUpdated: string;
}

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);

    const CACHE_KEY = 'github-projects-gillemta'
    const CACHE_EXPIRATION = 1000 * 60 * 60;    // 1 hour

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchPinnedRepositories();
                setProjects(data);
                setLastUpdated(new Date().toISOString());
                
                const cacheData: CacheData = {
                    projects: data,
                    timestamp: Date.now(),
                    lastUpdated: new Date().toISOString()
                };
                localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const checkCache = () => {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                // Parse the cached data and check if it's still valid
                const cacheData: CacheData = JSON.parse(cached);
                const isExpired = Date.now() - cacheData.timestamp > CACHE_EXPIRATION;

                if (isExpired) {
                    // Use cached data + fetch new data in background
                    setProjects(cacheData.projects);
                    setLastUpdated(cacheData.lastUpdated);
                    fetchData();
                } else {
                    // Use cached data
                    setProjects(cacheData.projects);
                    setLastUpdated(cacheData.lastUpdated);
                }
            } else {
                // Fetch new data
                fetchData();
            }

        }
        checkCache();
    }, []);

    return { projects, loading, error, lastUpdated }
}