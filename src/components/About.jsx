import { BookOpen, MapPin, Mail } from 'lucide-react';
import { educationData, personalInfo } from '../data';

const About = () => {
  return (
    <section id="about" className="pt-40 pb-24 px-6 bg-slate-50 border-y border-slate-200 bg-grid-pattern">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900">
          <BookOpen className="text-indigo-600" /> Education & Background
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">About Me</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {personalInfo.about}
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <MapPin size={18} className="text-indigo-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Mail size={18} className="text-indigo-600" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative border-l-2 border-slate-200 pl-8 ml-2">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-indigo-600 ring-4 ring-slate-50"></span>
                <span className="text-sm text-indigo-600 font-bold mb-1 block">{edu.period}</span>
                <h4 className="text-lg font-bold text-slate-900">{edu.title}</h4>
                <p className="text-slate-600 mt-1">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;