### React Portfolio

## Purpose
I will be creating a React portfolio, so I can work with popular tools and languages. This portfolio will be used to demonstrate my skills with these tools and languages, but also be an opportunity to show the reader a little bit about me and my capabilities.

## Portfolio Guidlines
# Sections
- Hero Page w/ button to download resume
- About Me
- Projects
- Experience
- Contact Form 

# Constraints
- Should be neat and minimalistic
- smooth scrolling and animations
- Contains dark mode toggle
- Projects section should automatically grab 3-4 projects from my github page (github.com/gillemta) and

# Note
I have a figma mockup of the mobile and desktop versions of my portfolio, I can provide the colors and fonts used so we can set up the infrastucture

## Tools
# Frontend
- React + Vite
- TypeScript
- Tailwind
- framer

# Backend
- Vercel (hosting)
- Emailjs

# Not

## Project Roadmap - Step by Step

### Phase 1: Project Setup & Infrastructure
1. **Install Dependencies**
   - Add Tailwind CSS
   - Add Framer Motion
   - Add EmailJS for contact form
   - Add React Router (if needed for smooth scrolling)

2. **Configure Tailwind CSS**
   - Set up custom color palette from Figma
   - Configure custom fonts from Figma
   - Set up responsive breakpoints (mobile-first)
   - Create base component styles

3. **Project Structure Setup**
   - Create components folder structure
   - Set up types/interfaces
   - Create utility functions
   - Set up environment variables

### Phase 2: Core Components & Layout
4. **Layout & Navigation**
   - Create main layout component
   - Implement smooth scrolling navigation
   - Add scroll-to-top functionality
   - Create mobile-responsive navigation

5. **Dark Mode Implementation**
   - Create theme context/provider
   - Implement theme toggle
   - Add localStorage persistence
   - Create theme-aware color variables

### Phase 3: Section Development
6. **Hero Section**
   - Create hero component with your intro
   - Add download resume button
   - Implement hero animations
   - Make it mobile-responsive

7. **About Me Section**
   - Create about component
   - Add your bio and skills
   - Implement scroll-triggered animations
   - Add skill icons/visuals

8. **Projects Section**
   - Create projects component
   - Implement GitHub API integration for pinned repos
   - Create project cards with animations
   - Add project filtering/sorting

9. **Experience Section**
   - Create experience timeline
   - Add your work history
   - Implement scroll animations
   - Make it mobile-friendly

10. **Contact Form**
    - Create contact component
    - Integrate EmailJS
    - Add form validation
    - Implement success/error states

### Phase 4: Polish & Optimization
11. **Animations & Interactions**
    - Add page load animations
    - Implement scroll-triggered effects
    - Add hover states and micro-interactions
    - Optimize animation performance

12. **Responsive Design**
    - Test and refine mobile experience
    - Ensure tablet compatibility
    - Optimize desktop layout
    - Test across different devices

13. **Performance & SEO**
    - Optimize bundle size
    - Add meta tags and SEO
    - Implement lazy loading
    - Add loading states

14. **Testing & Deployment**
    - Test all functionality
    - Fix any bugs
    - Deploy to Vercel
    - Test live site

## Learning Focus Areas
- **React Hooks**: useState, useEffect, useContext, useRef
- **TypeScript**: Interfaces, types, generics
- **Tailwind CSS**: Utility classes, responsive design, custom configurations
- **Framer Motion**: Animations, transitions, gesture handling
- **GitHub API**: Fetching data, error handling, data transformation
- **Responsive Design**: Mobile-first approach, breakpoints, flexible layouts

## Best Practices to Follow
- **Component Structure**: Keep components small and focused
- **Type Safety**: Use TypeScript interfaces for all props and data
- **Performance**: Use React.memo, useMemo, useCallback when appropriate
- **Accessibility**: Add proper ARIA labels, keyboard navigation
- **Code Organization**: Separate concerns, use custom hooks for logic
- **Error Handling**: Implement proper error boundaries and user feedback

## Current Status
- ✅ React + Vite + TypeScript setup
- ✅ Basic project structure
- ✅ Deployed to Vercel
- 🔄 Ready to start Phase 1: Project Setup & Infrastructure

## Next Steps
1. Install Tailwind CSS and configure with your Figma colors/fonts
2. Set up Framer Motion for animations
3. Create the basic project folder structure
4. Begin implementing the layout and navigation

# Cursor Instructions
Based on everything I have wrote in this markdown file I want you to help me lay out a step by step outline of this project such as the steps I need to take, best practices, etc. This project is supposed to be a learning opportunity, so rather than me depending on you to code for me, I plan to follow a Plan -> Code -> Explain process. This process will consist of me giving you my game plan for each step that, I code it out then you explain to me what I could do better and the tradeoffs of that etc. Do not modify any of my src files or commits unless I tell you to. Before you modify this file with what all I have told you to do, please ask clarifying questions to understand you are understanding me correctly. I ca