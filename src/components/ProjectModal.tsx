import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="fixed top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors z-50"
      >
        <X className="w-6 h-6" />
      </button>

      <div 
        className="relative max-w-6xl mx-auto mt-12"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto rounded-lg shadow-xl"
        />
        
        <div className="bg-white rounded-lg p-6 mt-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>
    </div>
  );
}