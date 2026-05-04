import { Award } from 'lucide-react';
import { projectsData } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900">
          <Award className="text-indigo-600" /> Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className={`group bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-300 flex flex-col h-full ${project.hoverBorder} ${project.hoverShadow}`}>
                {project.image ? (
                   <div className="h-48 bg-slate-50 overflow-hidden relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-indigo-900/5 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-auto object-contain p-2 transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <Icon size={48} className={`text-slate-400 transition-colors ${project.colorClass}`} />
                  </div>
                )}

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className={`text-xs px-2 py-1 rounded border ${project.tagColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;