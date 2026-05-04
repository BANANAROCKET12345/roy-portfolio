import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-slate-900 tracking-tight">
          {personalInfo.name}<span className="text-indigo-600">.Dev</span>
        </span>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl">
          <div className="flex flex-col p-4 space-y-4 font-medium text-slate-600">
            <a href="#about" className="block px-4 py-2 hover:bg-slate-50 hover:text-indigo-600 rounded-lg" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" className="block px-4 py-2 hover:bg-slate-50 hover:text-indigo-600 rounded-lg" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#projects" className="block px-4 py-2 hover:bg-slate-50 hover:text-indigo-600 rounded-lg" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#skills" className="block px-4 py-2 hover:bg-slate-50 hover:text-indigo-600 rounded-lg" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#contact" className="block px-4 py-2 hover:bg-slate-50 hover:text-indigo-600 rounded-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;