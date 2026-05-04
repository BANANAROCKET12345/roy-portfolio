
const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm bg-white border-t border-slate-200">
      <p>© {new Date().getFullYear()} Roy Yang Sisong. All Rights Reserved.</p>
      <p className="mt-2 text-xs text-slate-400">
        Built with <span className="font-medium text-indigo-600">React</span> & <span className="font-medium text-indigo-600">Tailwind CSS</span>
      </p>
    </footer>
  );
};

export default Footer;