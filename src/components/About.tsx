import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle size={24} />,
      title: 'Proven Track Record',
      description: '24+ successful projects completed for clients worldwide',
    },
    {
      icon: <Users size={24} />,
      title: 'Expert Team',
      description: 'Dedicated professionals with industry expertise and passion',
    },
    {
      icon: <Award size={24} />,
      title: 'Quality Assured',
      description: 'Premium quality standards in every project we deliver',
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Delivery',
      description: 'Efficient processes ensuring timely project completion',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-6">Why Choose Sadham Solutions?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in IT services, digital marketing, construction, and design, 
              Sadham Solutions has established itself as a trusted partner for businesses of all sizes. 
              Our commitment to excellence, innovation, and customer satisfaction drives everything we do.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in building long-term relationships with our clients by delivering exceptional 
              results that exceed expectations and drive real business growth.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 text-blue-600 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Visual Stats */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white shadow-lg"
              >
                <p className="text-4xl font-bold mb-2">4+</p>
                <p className="text-blue-100">Years Experience</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white shadow-lg"
              >
                <p className="text-4xl font-bold mb-2">24+</p>
                <p className="text-purple-100">Projects Done</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white shadow-lg col-span-2"
              >
                <p className="text-4xl font-bold mb-2">98%</p>
                <p className="text-green-100">Client Satisfaction Rate</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
