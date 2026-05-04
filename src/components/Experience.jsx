import { Briefcase } from 'lucide-react';
import { experienceData } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900">
          <Briefcase className="text-indigo-600" /> Work Experience
        </h2>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 space-y-12">
          {experienceData.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-indigo-600 ring-4 ring-white"></span>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <p className="text-indigo-600 font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-slate-500 font-mono mt-1 sm:mt-0 bg-slate-100 px-2 py-1 rounded">{job.period}</span>
              </div>

              <ul className="list-disc list-outside ml-5 text-slate-600 space-y-2 leading-relaxed">
                {job.description.map((desc, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: desc }}></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
