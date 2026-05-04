import { Code2 } from 'lucide-react';
import { skillsData } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 border-y border-slate-200 bg-grid-pattern">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900">
          <Code2 className="text-indigo-600" /> Technical Skills
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${category.bgClass} ${category.colorClass}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(item => (
                    <span key={item} className={`px-3 py-1 bg-slate-50 text-slate-700 text-sm font-medium font-mono rounded-md border border-slate-200 transition-colors cursor-default ${category.hoverBorder} ${category.hoverText}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;