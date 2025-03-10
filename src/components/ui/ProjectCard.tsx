import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
}

export function ProjectCard({ title, description, image, link, github, tags }: ProjectCardProps) {
  return (
    <div className="relative group">
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 rounded-xl blur-xl opacity-30 group-hover:opacity-60 pointer-events-none" />

      {/* Card Content */}
      <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-transform duration-300">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {/* External Link */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-blue-600 hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg"
              title="Visit Project"
            >
              <ExternalLink className="w-6 h-6 text-white" />
            </a>
            {/* GitHub Link */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-gray-900 hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg"
              title="View Source Code"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full shadow-sm transform hover:scale-105 transition-transform duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
