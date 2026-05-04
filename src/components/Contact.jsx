import { useState } from 'react';
import { Phone, Mail, Check } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Get In Touch</h2>
        <p className="text-slate-600 mb-12 max-w-xl mx-auto text-lg">
          I&apos;m always open to new opportunities and interesting projects. If you need someone who can build AI-powered web applications, let&apos;s talk!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={handleCopyPhone}
            className={`flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-xl hover:border-green-600 hover:text-green-600 hover:shadow-lg transition-all group ${phoneCopied ? 'border-green-600 text-green-600 bg-green-50' : ''}`}
          >
            {phoneCopied ? <Check className="text-green-600" /> : <Phone className="text-slate-600 group-hover:text-green-600 transition-colors" />}
            <span className="font-medium">{phoneCopied ? 'Phone Copied!' : personalInfo.phone}</span>
          </button>
          <button
            onClick={handleCopyEmail}
            className={`flex items-center gap-3 px-8 py-4 bg-slate-900 text-white border border-slate-900 rounded-xl hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all ${emailCopied ? 'bg-green-600 border-green-600 hover:bg-green-700' : ''}`}
          >
            {emailCopied ? <Check /> : <Mail />}
            <span className="font-medium">{emailCopied ? 'Email Copied!' : personalInfo.email}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;