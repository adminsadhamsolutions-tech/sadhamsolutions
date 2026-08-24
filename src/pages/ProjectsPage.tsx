import React, { useState } from 'react';
import { ExternalLink, Globe, Phone, Sparkles, CheckCircle2, ArrowUpRight, Laptop } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  url: string;
  description: string;
  tags: string[];
  fallbackImage: string;
}

const clientProjects: Project[] = [
  {
    id: 1,
    title: 'Elite Swim Club HSR',
    category: 'Sports & Academy Portal',
    url: 'https://eliteswimclubhsr.com',
    description: 'Premier swimming club portal with training program showcases, timetable schedules, and online membership registration.',
    tags: ['Web Design', 'Booking Portal', 'Responsive UI'],
    fallbackImage: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Identity Physio Care',
    category: 'Healthcare & Physiotherapy',
    url: 'https://identityphysiocare.in',
    description: 'Modern healthcare portal showcasing specialized clinical therapies, doctor profiles, and direct patient appointment bookings.',
    tags: ['Healthcare', 'SEO Optimized', 'Fast Load'],
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'RD Swim For Life',
    category: 'Fitness & Aquatics',
    url: 'https://rdswimforlife.com',
    description: 'Dynamic swimming academy website featuring training schedules, coach profiles, and digital lead capture tools.',
    tags: ['Modern Layout', 'Lead Capture', 'Mobile First'],
    fallbackImage: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Hosur Aquatic Association',
    category: 'Sports Association',
    url: 'https://hosuraquaticassociation.com/',
    description: 'Official regional aquatic association platform for event registrations, tournament tracking, and member announcements.',
    tags: ['Dynamic CMS', 'Event Management', 'Scalable'],
    fallbackImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Star Trading & Co',
    category: 'Commerce & Industrial Trading',
    url: 'https://startradingandco.com/',
    description: 'Industrial trading platform designed with complete B2B product catalogs, spec sheets, and wholesale inquiry management.',
    tags: ['B2B Catalog', 'Industrial', 'Clean Design'],
    fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Elora Technologies',
    category: 'Software & Technology Solutions',
    url: 'https://eloratechnologies.com/',
    description: 'Corporate tech presence presenting enterprise IT infrastructure, cloud engineering services, and business consulting solutions.',
    tags: ['Enterprise Tech', 'Custom UI/UX', 'Cloud Ready'],
    fallbackImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Ziya Traders',
    category: 'B2B Trade & Distribution',
    url: 'https://www.ziyatraders.com/',
    description: 'Trade showcase and wholesale distribution portal engineered for easy inventory browsing and partner lead generation.',
    tags: ['E-Commerce UI', 'Wholesale Catalog', 'Trading'],
    fallbackImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=900&auto=format&fit=crop'
  }
];

export const ProjectsPage: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number, fallbackUrl: string, target: HTMLImageElement) => {
    // If microlink fails, try WordPress mshots; if that fails, use fallback UI image
    if (!target.dataset.triedBackup) {
      target.dataset.triedBackup = 'true';
      const encoded = encodeURIComponent(target.dataset.originalUrl || '');
      target.src = `https://s.wordpress.com/mshots/v1/${encoded}?w=1000`;
    } else {
      target.src = fallbackUrl;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20 relative">
      
      {/* Subtle Light 3D Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-100/70 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] right-0 w-[500px] h-[500px] bg-indigo-50/80 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
            <Sparkles size={14} className="text-blue-600 animate-pulse" /> Live Client Portfolio
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Our Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover real-world websites, web applications, and digital platforms built by{' '}
            <span className="text-slate-900 font-semibold">Sadham Solutions</span>. Click any card to launch the live website.
          </p>
        </div>

        {/* 3D Elevated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {clientProjects.map((project) => {
            const primaryScreenshot = `https://api.microlink.io?url=${encodeURIComponent(
              project.url
            )}&screenshot=true&meta=false&embed=screenshot.url`;

            return (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl p-3 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.14)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image & Live Browser Frame */}
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    
                    {/* Browser Mockup Bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900/10 backdrop-blur-md z-10 px-3 flex items-center gap-1.5 border-b border-black/5">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>

                    <img
                      src={primaryScreenshot}
                      alt={project.title}
                      data-original-url={project.url}
                      onLoad={() => setLoadedImages((prev) => ({ ...prev, [project.id]: true }))}
                      onError={(e) => handleImageError(project.id, project.fallbackImage, e.target as HTMLImageElement)}
                      className={`w-full h-full object-cover object-top pt-6 transition-all duration-700 ease-out group-hover:scale-105 ${
                        loadedImages[project.id] ? 'opacity-100' : 'opacity-90'
                      }`}
                    />

                    {/* Category Glass Tag */}
                    <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-slate-100">
                      {project.category}
                    </span>

                    {/* Direct Quick Launch Icon */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-blue-600 text-white shadow-md group-hover:bg-blue-700 group-hover:scale-110 transition-all"
                      title="Open Live Site"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  {/* Text Details */}
                  <div className="px-3 pt-5 pb-3">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Button */}
                <div className="p-3 pt-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
                  >
                    <Laptop size={16} /> Visit Live Website <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Light Theme Contact Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 sm:p-12 text-white shadow-xl shadow-blue-600/10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">
                Sadham Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Have a project in mind? Let’s talk.
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-xl mb-4">
                We deliver high-speed Websites, custom ERP & Billing software, and complete commercial painting services.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-semibold text-blue-50">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-blue-200" /> Professional Websites</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-blue-200" /> ERP & Billing Systems</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-blue-200" /> Painting Services</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="tel:6362676484"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold transition shadow-md active:scale-95 whitespace-nowrap"
              >
                <Phone size={18} /> Call: 63626 76484
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-bold border border-white/20 transition active:scale-95 whitespace-nowrap"
              >
                <Globe size={18} /> Contact Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};