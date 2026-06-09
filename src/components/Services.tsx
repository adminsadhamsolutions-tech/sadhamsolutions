import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code2, Smartphone, Palette, TrendingUp, Hammer, Paintbrush, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  route?: string;
  slug?: string;
}

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      icon: <Code2 size={40} />,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies for optimal performance and user experience.',
      color: 'from-blue-500 to-cyan-500',
      route: '/website-development',
      slug: 'website-development',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional functionality and user interface.',
      color: 'from-purple-500 to-pink-500',
      route: '/app-development',
      slug: 'app-development',
    },
    {
      icon: <Palette size={40} />,
      title: 'Logo Design',
      description: 'Creative and memorable logo designs that perfectly represent your brand identity and values.',
      color: 'from-orange-500 to-red-500',
      route: '/logo-design',
      slug: 'logo-design',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to boost your online presence, engagement, and conversions.',
      color: 'from-green-500 to-emerald-500',
      route: '/digital-marketing',
      slug: 'digital-marketing',
    },
    {
      icon: <Hammer size={40} />,
      title: 'Construction Services',
      description: 'Professional construction services with quality craftsmanship and on-time project delivery.',
      color: 'from-yellow-500 to-orange-500',
      route: '/construction-services',
      slug: 'construction-services',
    },
    {
      icon: <Paintbrush size={40} />,
      title: 'Painting Services',
      description: 'Expert painting services for residential and commercial projects with premium finishes.',
      color: 'from-indigo-500 to-blue-500',
      route: '/painting-services',
      slug: 'painting-services',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive solutions tailored to elevate your business and achieve your goals
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => service.route && navigate(service.route)}
              className={`card-hover bg-white rounded-xl p-8 shadow-lg ${service.route ? 'cursor-pointer' : ''}`}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-6`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>

              {/* CTA */}
              {service.route ? (
                <motion.button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    navigate(service.route!);
                  }}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </motion.button>
              ) : (
                <motion.a
                  href="/#contact"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and exceed expectations.
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300"
          >
            Get in Touch Today
            <ArrowRight className="ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
