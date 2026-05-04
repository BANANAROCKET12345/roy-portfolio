import { Download } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section className="pt-40 pb-24 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="animate-fade-in-up inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm md:text-base font-bold mb-8 border border-slate-200 shadow-sm">
            <span className="flex h-3 w-3 rounded-full bg-indigo-600 mr-3 animate-pulse"></span>
            {personalInfo.status}
          </div>

          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
            Hi, I&apos;m <span className="text-indigo-600">{personalInfo.name}</span>
          </h1>
          <h2 className="animate-fade-in-up delay-200 text-2xl md:text-3xl font-bold text-slate-700 mb-6">
            {personalInfo.chineseName}
          </h2>

          <p className="animate-fade-in-up delay-300 text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
            {personalInfo.about}
          </p>
          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-1 text-center">
              Contact Me
            </a>

            <a href={personalInfo.resumeUrl} download="Roy_Yang_Resume.pdf" className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-slate-700 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 rounded-lg font-medium transition-all hover:-translate-y-1 group">
              <Download size={20} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative group animate-fade-in-up delay-500">
          <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Roy Yang Sisong"
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;