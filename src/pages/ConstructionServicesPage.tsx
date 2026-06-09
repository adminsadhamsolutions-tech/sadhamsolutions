import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hammer, Home, Building2, Wrench, Shield, CheckCircle2 } from 'lucide-react';

const constructionDetails = [
  {
    icon: <Hammer size={28} className="text-white" />,
    title: 'General Construction',
    description: 'Full-service construction for residential and commercial projects, from foundation to finish.',
  },
  {
    icon: <Home size={28} className="text-white" />,
    title: 'Residential Projects',
    description: 'Custom home builds, renovations, additions, and remodeling with attention to detail and quality.',
  },
  {
    icon: <Building2 size={28} className="text-white" />,
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and commercial facilities built to meet business needs and codes.',
  },
  {
    icon: <Wrench size={28} className="text-white" />,
    title: 'Renovation & Remodeling',
    description: 'Expert renovation services to update and modernize existing spaces while preserving structural integrity.',
  },
  {
    icon: <Shield size={28} className="text-white" />,
    title: 'Safety & Compliance',
    description: 'All projects follow strict safety protocols and building codes for reliable, compliant construction.',
  },
  {
    icon: <CheckCircle2 size={28} className="text-white" />,
    title: 'Project Management',
    description: 'Dedicated project managers ensure timelines are met, budgets are controlled, and quality is maintained.',
  },
];

export const ConstructionServicesPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
            Construction Services
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Quality Construction You Can Trust
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Professional construction services with skilled craftsmanship, reliable scheduling, and attention to detail.
            From small renovations to large commercial projects, we deliver results on time and on budget.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {constructionDetails.map((detail) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
            >
              <div className="w-16 h-16 rounded-3xl bg-yellow-600 flex items-center justify-center mb-6 shadow-lg">
                {detail.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{detail.title}</h2>
              <p className="text-gray-600 leading-relaxed">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-yellow-600 to-orange-700 rounded-3xl p-10 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Construction Project?</h2>
          <p className="text-yellow-100 max-w-2xl mx-auto mb-8">
            Let's discuss your project requirements and provide a detailed estimate with timeline and cost breakdown.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-yellow-600 font-bold shadow-lg hover:bg-yellow-50 transition"
            >
              Get Free Estimate
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};