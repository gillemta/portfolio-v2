// Environment Variables Configuration
// Copy this file to .env.local and fill in your actual values

export const ENV_CONFIG = {
  // GitHub API Configuration
  GITHUB_TOKEN: import.meta.env.VITE_GITHUB_TOKEN || '',
  GITHUB_USERNAME: import.meta.env.VITE_GITHUB_USERNAME || 'gillemta',
  
  // EmailJS Configuration
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  
  // App Configuration
  APP_URL: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Tashan Portfolio',
};

// Environment variable validation
export const validateEnvVars = () => {
  const required = [
    'GITHUB_TOKEN',
    'EMAILJS_SERVICE_ID', 
    'EMAILJS_TEMPLATE_ID',
    'EMAILJS_PUBLIC_KEY'
  ];
  
  const missing = required.filter(key => !ENV_CONFIG[key as keyof typeof ENV_CONFIG]);
  
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}`);
    return false;
  }
  
  return true;
};



