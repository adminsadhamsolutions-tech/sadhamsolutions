import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Zap,
  Shield,
  Database,
  ShoppingCart,
  LayoutDashboard,
  Headphones,
  MonitorSmartphone,
  ArrowRight,
  Cpu,
  Server,
  MousePointer2,
} from 'lucide-react';

const services = [
  {
    icon: <Code2 size={28} className="text-white" />,
    title: 'Custom Website Development',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
    desc: 'Fully customized websites developed according to your business workflow and company requirements.',
  },
  {
    icon: <Smartphone size={28} className="text-white" />,
    title: 'Responsive Website Design',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
    desc: 'Mobile-friendly and fully responsive websites that work perfectly on all devices.',
  },
  {
    icon: <ShoppingCart size={28} className="text-white" />,
    title: 'E-Commerce Development',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop',
    desc: 'Complete online store solutions with payment gateway and admin management.',
  },
  {
    icon: <LayoutDashboard size={28} className="text-white" />,
    title: 'Admin Panel Development',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop',
    desc: 'Powerful admin dashboards for managing orders, users, reports, and business operations.',
  },
  {
    icon: <Database size={28} className="text-white" />,
    title: 'ERP & Management Systems',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop',
    desc: 'ERP, billing, payroll, inventory, CRM, and custom business management systems.',
  },
  {
    icon: <Headphones size={28} className="text-white" />,
    title: '24/7 Support & Maintenance',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop',
    desc: 'Reliable technical support, maintenance, updates, bug fixes, and onsite support.',
  },
];

const pricing = [
  {
    title: 'Landing Page Website',
    price: 'Starts From ₹3000',
    details: '1 Page Modern Responsive Website',
  },
  {
    title: 'Dynamic Website',
    price: 'Starts From ₹6000',
    details: 'Database + Admin Panel + Dynamic Features',
  },
  {
    title: 'E-Commerce Website',
    price: 'Starts From ₹12000',
    details: 'Products, Payment Gateway & Admin Dashboard',
  },
  {
    title: 'Custom ERP / Software',
    price: 'Custom Pricing',
    details: 'Based on Business Workflow & Requirements',
  },
];

export function WebsiteDevelopmentPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-hidden font-['Roboto'] relative">

      {/* CURSOR EFFECT */}
      <div
        className="fixed pointer-events-none z-50 hidden md:flex items-center justify-center"
        style={{
          left: position.x - 40,
          top: position.y - 40,
        }}
      >
        <div className="w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 flex items-center justify-center shadow-2xl">
          <Code2 className="text-blue-400" size={30} />
        </div>
      </div>

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* HERO */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-xl">
              <Cpu size={18} />
              Premium Web Development Services
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Build Your
              <span className="block text-blue-500 mt-2">
                Digital Future
              </span>
            </h1>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-2xl">
              Sadham Solutions creates modern websites, admin panels,
              ERP software, billing systems, payroll systems, e-commerce stores,
              and customized web applications according to your business workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <a
                href="https://wa.me/916362676484"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight size={22} />
              </a>

              <a
                href="#pricing"
                className="border border-blue-500/30 bg-white/5 backdrop-blur-xl hover:bg-blue-500/10 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300"
              >
                View Pricing
              </a>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 text-center">
                <h3 className="text-3xl font-black text-blue-400">24+</h3>
                <p className="text-sm text-gray-400 mt-1">Projects</p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 text-center">
                <h3 className="text-3xl font-black text-blue-400">98%</h3>
                <p className="text-sm text-gray-400 mt-1">Client Satisfaction</p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 text-center">
                <h3 className="text-3xl font-black text-blue-400">24/7</h3>
                <p className="text-sm text-gray-400 mt-1">Support</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">

              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
                alt="Website Development"
                className="w-full h-[550px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent"></div>

              {/* FLOATING CARDS */}
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Server className="text-blue-400" />
                  <div>
                    <h3 className="font-bold">Admin Panel</h3>
                    <p className="text-sm text-gray-300">
                      Business Dashboard
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <MonitorSmartphone className="text-blue-400" />
                  <div>
                    <h3 className="font-bold">Responsive Design</h3>
                    <p className="text-sm text-gray-300">
                      Mobile Friendly
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <span className="text-blue-400 uppercase tracking-[0.3em] font-bold text-sm">
              Our Services
            </span>

            <h2 className="text-4xl lg:text-5xl font-black mt-5">
              Complete Web Development Solutions
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              We provide professional web development services with modern technologies,
              premium UI/UX, high performance, and business automation solutions.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] overflow-hidden hover:-translate-y-3 transition-all duration-500"
              >

                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">

                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-black mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] overflow-hidden">

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-center">
              <h2 className="text-4xl lg:text-5xl font-black">
                Website Pricing
              </h2>

              <p className="mt-4 text-blue-100 text-lg">
                Affordable plans for every business
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 p-8">

              {pricing.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0b1120] border border-white/10 rounded-3xl p-8 shadow-2xl"
                >

                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>

                  <div className="mt-5 text-4xl font-black text-blue-400">
                    {item.price}
                  </div>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {item.details}
                  </p>

                  <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-bold transition">
                    Get Quote
                  </button>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-10 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex items-center gap-4">
            <Zap className="text-blue-400" size={36} />
            <div>
              <h3 className="font-black">Fast Performance</h3>
              <p className="text-sm text-gray-400">Optimized speed</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex items-center gap-4">
            <Shield className="text-blue-400" size={36} />
            <div>
              <h3 className="font-black">Secure Development</h3>
              <p className="text-sm text-gray-400">Safe & protected</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex items-center gap-4">
            <Headphones className="text-blue-400" size={36} />
            <div>
              <h3 className="font-black">24/7 Support</h3>
              <p className="text-sm text-gray-400">Technical assistance</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex items-center gap-4">
            <MousePointer2 className="text-blue-400" size={36} />
            <div>
              <h3 className="font-black">Premium UI/UX</h3>
              <p className="text-sm text-gray-400">Modern experience</p>
            </div>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-10">

        <div className="max-w-6xl mx-auto">

          <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-[40px] p-12 lg:p-16 text-center shadow-[0_20px_80px_rgba(37,99,235,0.4)] relative overflow-hidden">

            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >

              <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                Ready to Build
                <span className="block mt-2">
                  Your Dream Website?
                </span>
              </h2>

              <p className="mt-6 text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
                Contact Sadham Solutions today for premium website development,
                admin panel systems, ERP software, and customized business solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">

                <a
                  href="https://wa.me/916362676484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  WhatsApp Now
                </a>

                <button className="border-2 border-white hover:bg-white hover:text-blue-700 px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300">
                  Free Consultation
                </button>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
}