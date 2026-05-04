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
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-xs px-2 py-1 rounded border ${project.tagColor}`}>
                        {tag}
                      </span>
                    ))}
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