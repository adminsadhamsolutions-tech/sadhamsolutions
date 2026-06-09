import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Palette, TrendingUp, Hammer, Paintbrush } from 'lucide-react';

const servicePages: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  details: string[];
  icon: React.ReactNode;
  color: string;
}> = {
  'website-development': {
    title: 'Website Development',
    subtitle: 'Modern websites crafted to perform, convert, and scale.',
    description: 'We build clean, responsive websites that load fast, look great on every device, and help your brand stand out online.',
    highlights: [
      'Custom designs tailored to your brand',
      'Mobile-first, responsive layouts',
      'SEO-friendly structure and performance',
      'Fast loading and conversion focused',
    ],
    details: [
      'Landing pages, business sites, and e-commerce stores built with modern web technologies.',
      'Optimized page speed, accessibility, and usability to keep visitors engaged.',
      'Integration with analytics, payment providers, and content management tools.',
    ],
    icon: <Code2 size={28} className="text-white" />,
    color: 'from-blue-500 to-cyan-500',
  },
  'app-development': {
    title: 'App Development',
    subtitle: 'Native and cross-platform apps that delight users.',
    description: 'From mobile to web, we deliver app experiences that feel intuitive, fast, and polished across every screen.',
    highlights: [
      'Cross-platform and native app expertise',
      'User-centered interaction design',
      'Backend APIs and cloud integration',
      'Maintenance and feature scaling',
    ],
    details: [
      'Mobile and progressive web apps built for performance and reliability.',
      'Robust backend systems to support user accounts, data sync, and notifications.',
      'Design systems that keep your product consistent across devices.',
    ],
    icon: <Smartphone size={28} className="text-white" />,
    color: 'from-purple-500 to-pink-500',
  },
  'logo-design': {
    title: 'Logo Design',
    subtitle: 'Brand identity that feels memorable and professional.',
    description: 'A strong logo is the foundation of a trusted brand. We create visual marks that communicate your values clearly.',
    highlights: [
      'Custom logo concepts and revisions',
      'Brand color and typography guidance',
      'Versatile mark designs for print and digital',
      'Brand assets delivered in multiple formats',
    ],
    details: [
      'Logo work that balances creativity with clarity for every audience.',
      'Identity systems built to work across websites, social media, packaging, and signage.',
      'Fast, collaborative design process with clear feedback rounds.',
    ],
    icon: <Palette size={28} className="text-white" />,
    color: 'from-orange-500 to-red-500',
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Marketing campaigns that increase visibility and conversions.',
    description: 'We create strategic campaigns across search, social media, and content to grow traffic, leads, and sales.',
    highlights: [
      'Campaign strategy and audience targeting',
      'Ad creative, copy, and optimization',
      'Analytics tracking and performance reporting',
      'Brand awareness and lead generation',
    ],
    details: [
      'Holistic digital marketing plans aligned to your business goals.',
      'Regular campaign analysis and optimization for better ROI.',
      'Content, ads, and social campaigns that support long-term growth.',
    ],
    icon: <TrendingUp size={28} className="text-white" />,
    color: 'from-green-500 to-emerald-500',
  },
  'construction-services': {
    title: 'Construction Services',
    subtitle: 'Trusted construction support for projects large and small.',
    description: 'From planning to delivery, we manage construction work with quality craftsmanship, clear communication, and reliable scheduling.',
    highlights: [
      'Skilled craftsmanship for residential and commercial builds',
      'Project management and site coordination',
      'Quality-first workmanship and attention to detail',
      'On-time delivery with strong safety standards',
    ],
    details: [
      'Comprehensive construction services including renovation and build-out work.',
      'Professional teams that keep each phase clean, efficient, and well documented.',
      'Focus on high-quality materials and finishes that last.',
    ],
    icon: <Hammer size={28} className="text-white" />,
    color: 'from-yellow-500 to-orange-500',
  },
  'painting-services': {
    title: 'Painting Services',
    subtitle: 'Complete painting solutions for residential and commercial projects.',
    description: 'We deliver beautiful, durable paint finishes with professional prep work, color guidance, and careful application.',
    highlights: [
      'Interior and exterior painting',
      'Color consultation and design support',
      'Surface preparation and repair',
      'Residential and commercial expertise',
    ],
    details: [
      'Interior painting for walls, trim, cabinetry, and ceilings with smooth, flawless coverage.',
      'Exterior coatings that stand up to weather and keep properties looking refreshed.',
      'Detailed preparation including cleaning, patching, sanding, and priming for lasting results.',
    ],
    icon: <Paintbrush size={28} className="text-white" />,
    color: 'from-indigo-500 to-blue-500',
  },
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? servicePages[slug] : undefined;

  useEffect(() => {
    if (slug && !service) {
      navigate('/', { replace: true });
    }
  }, [slug, service, navigate]);

  if (!service) {
    return null;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm border border-blue-100">
            <span>Service</span>
            <span className="text-gray-400">•</span>
            <span>{service.title}</span>
          </div>
          <h1 className="mt-8 text-4xl md:text-5xl font-bold text-gray-900">{service.title}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">{service.subtitle}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[auto_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`rounded-3xl bg-gradient-to-br ${service.color} p-10 shadow-2xl text-white`}
          >
            <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-6 shadow-lg">
              {service.icon}
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/80">Focused Service</p>
            <h2 className="mt-6 text-3xl font-bold">Why choose this service?</h2>
            <p className="mt-4 text-white/90 leading-relaxed">{service.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What we deliver</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <ul className="mt-6 space-y-4">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-blue-600">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How it works</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {service.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Next step</h3>
              <p className="text-gray-600 leading-relaxed">
                Ready to move forward? Contact us now and we’ll prepare a custom estimate based on your needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white font-bold shadow-lg hover:bg-blue-700 transition"
                >
                  Contact Us
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full border border-blue-600 px-8 py-4 text-blue-600 font-semibold hover:bg-blue-50 transition"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
