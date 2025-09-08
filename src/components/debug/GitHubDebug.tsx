import { useState, useEffect } from 'react';
import { fetchPinnedRepositories } from '../../services/githubService';

export function GitHubDebug() {
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const runDiagnostics = async () => {
    setLoading(true);
    
    const info = {
      // Check if environment variables are available
      hasToken: !!import.meta.env.VITE_GITHUB_TOKEN,
      tokenLength: import.meta.env.VITE_GITHUB_TOKEN?.length || 0,
      tokenStart: import.meta.env.VITE_GITHUB_TOKEN?.substring(0, 8) || 'N/A',
      
      // Check other env vars
      hasEmailService: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
      hasEmailTemplate: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      hasEmailKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      
      // Environment info
      mode: import.meta.env.MODE,
      dev: import.meta.env.DEV,
      prod: import.meta.env.PROD,
      
      // Test API call
      apiTest: null as any,
      error: null as string | null
    };

    try {
      // Test the GitHub API call
      const projects = await fetchPinnedRepositories();
      info.apiTest = {
        success: true,
        projectCount: projects.length,
        firstProject: projects[0] ? {
          name: projects[0].name,
          hasTopics: projects[0].topics?.length > 0,
          topicsCount: projects[0].topics?.length || 0
        } : null
      };
    } catch (error: any) {
      info.apiTest = {
        success: false,
        error: error.message
      };
      info.error = error.message;
    }

    setDebugInfo(info);
    setLoading(false);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-4">GitHub API Debug Information</h3>
      
      <button 
        onClick={runDiagnostics}
        disabled={loading}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Running Diagnostics...' : 'Run Diagnostics'}
      </button>

      {debugInfo && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border">
            <h4 className="font-semibold mb-2">Environment Variables:</h4>
            <pre className="text-sm bg-gray-50 p-2 rounded overflow-x-auto">
              {JSON.stringify({
                hasToken: debugInfo.hasToken,
                tokenLength: debugInfo.tokenLength,
                tokenStart: debugInfo.tokenStart,
                hasEmailService: debugInfo.hasEmailService,
                hasEmailTemplate: debugInfo.hasEmailTemplate,
                hasEmailKey: debugInfo.hasEmailKey
              }, null, 2)}
            </pre>
          </div>

          <div className="bg-white p-4 rounded border">
            <h4 className="font-semibold mb-2">Environment Info:</h4>
            <pre className="text-sm bg-gray-50 p-2 rounded overflow-x-auto">
              {JSON.stringify({
                mode: debugInfo.mode,
                dev: debugInfo.dev,
                prod: debugInfo.prod
              }, null, 2)}
            </pre>
          </div>

          <div className="bg-white p-4 rounded border">
            <h4 className="font-semibold mb-2">API Test Results:</h4>
            <pre className="text-sm bg-gray-50 p-2 rounded overflow-x-auto">
              {JSON.stringify(debugInfo.apiTest, null, 2)}
            </pre>
          </div>

          {debugInfo.error && (
            <div className="bg-red-100 p-4 rounded border border-red-300">
              <h4 className="font-semibold text-red-800 mb-2">Error:</h4>
              <p className="text-red-700">{debugInfo.error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
