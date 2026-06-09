import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, FileImage, Users, Lightbulb, Award, CheckCircle2 } from 'lucide-react';

const logoDetails = [
  {
    icon: <Palette size={28} className="text-white" />,
    title: 'Brand Identity Design',
    description: 'Complete brand identity systems including logos, color palettes, typography, and brand guidelines.',
  },
  {
    icon: <FileImage size={28} className="text-white" />,
    title: 'Logo Variations',
    description: 'Multiple logo formats including horizontal, stacked, icon-only, and monochrome versions for different uses.',
  },
  {
    icon: <Users size={28} className="text-white" />,
    title: 'Client Collaboration',
    description: 'Iterative design process with regular feedback rounds to ensure the final logo meets your vision.',
  },
  {
    icon: <Lightbulb size={28} className="text-white" />,
    title: 'Creative Concepts',
    description: 'Initial concepts exploring different styles and directions before refining the perfect logo design.',
  },
  {
    icon: <Award size={28} className="text-white" />,
    title: 'Professional Quality',
    description: 'High-resolution files in all major formats (AI, EPS, PNG, JPG, SVG) ready for print and digital use.',
  },
  {
    icon: <CheckCircle2 size={28} className="text-white" />,
    title: 'Brand Assets Package',
    description: 'Complete brand asset package including social media templates, business cards, and presentation materials.',
  },
];

export const LogoDesignPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Logo Design
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Logos That Define Your Brand
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            A great logo is the foundation of a strong brand. We create memorable, versatile logos that communicate
            your values and stand out in any context, from business cards to billboards.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {logoDetails.map((detail) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
            >
              <div className="w-16 h-16 rounded-3xl bg-orange-600 flex items-center justify-center mb-6 shadow-lg">
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
          className="mt-16 bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-10 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Brand Identity?</h2>
          <p className="text-orange-100 max-w-2xl mx-auto mb-8">
            Let's discuss your brand vision and create a logo that perfectly represents your business and resonates with your audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-orange-600 font-bold shadow-lg hover:bg-orange-50 transition"
            >
              Start Logo Design
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