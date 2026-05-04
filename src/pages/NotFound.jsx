import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 bg-grid-pattern text-center relative">
      <h1 className="text-9xl font-extrabold text-indigo-600 opacity-20 select-none">404</h1>
      <div className="-mt-16 flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold text-slate-900">Page Not Found</h2>
        <p className="text-slate-600 mb-2 max-w-sm">
          Oops! The page you&apos;re looking for doesn&apos;t exist. Maybe the link is broken or the page was moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-indigo-600/20 hover:-translate-y-1"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
