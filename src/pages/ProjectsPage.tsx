import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { websiteProjects, graphicsProjects } from '../data/projects';
import type { Project } from '../types/project';

const PROJECTS_PER_PAGE = 6;

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [websiteCount, setWebsiteCount] = useState(PROJECTS_PER_PAGE);
  const [graphicsCount, setGraphicsCount] = useState(PROJECTS_PER_PAGE);

  const displayedWebsites = websiteProjects.slice(0, websiteCount);
  const displayedGraphics = graphicsProjects.slice(0, graphicsCount);

  const hasMoreWebsites = websiteCount < websiteProjects.length;
  const hasMoreGraphics = graphicsCount < graphicsProjects.length;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Websites I've Created</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedWebsites.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {hasMoreWebsites && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setWebsiteCount(prev => prev + PROJECTS_PER_PAGE)}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">3D & 2D Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedGraphics.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {hasMoreGraphics && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setGraphicsCount(prev => prev + PROJECTS_PER_PAGE)}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </section>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}