import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Search, Users, Target, BarChart3, CheckCircle2 } from 'lucide-react';

const marketingDetails = [
  {
    icon: <Search size={28} className="text-white" />,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve search rankings, drive organic traffic, and increase visibility.',
  },
  {
    icon: <Users size={28} className="text-white" />,
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter.',
  },
  {
    icon: <Target size={28} className="text-white" />,
    title: 'PPC Advertising',
    description: 'Pay-per-click campaigns on Google Ads and social media platforms for immediate traffic and conversions.',
  },
  {
    icon: <BarChart3 size={28} className="text-white" />,
    title: 'Analytics & Reporting',
    description: 'Detailed performance tracking and monthly reports to measure ROI and optimize campaign effectiveness.',
  },
  {
    icon: <TrendingUp size={28} className="text-white" />,
    title: 'Content Marketing',
    description: 'Engaging content creation including blog posts, videos, and infographics to build authority and trust.',
  },
  {
    icon: <CheckCircle2 size={28} className="text-white" />,
    title: 'Email Marketing',
    description: 'Automated email campaigns and newsletters to nurture leads and maintain customer relationships.',
  },
];

export const DigitalMarketingPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
            Digital Marketing
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Grow Your Business Online
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Strategic digital marketing campaigns that increase visibility, drive traffic, and boost conversions.
            From SEO to social media, we help you reach your target audience and achieve measurable results.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketingDetails.map((detail) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
            >
              <div className="w-16 h-16 rounded-3xl bg-green-600 flex items-center justify-center mb-6 shadow-lg">
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
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-10 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Online Presence?</h2>
          <p className="text-green-100 max-w-2xl mx-auto mb-8">
            Let's analyze your current marketing efforts and create a customized strategy to achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-green-600 font-bold shadow-lg hover:bg-green-50 transition"
            >
              Start Marketing Campaign
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