import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Apple,
  Tablet,
  Cloud,
  Database,
  CheckCircle2,
  Cpu,
  Server,
  MonitorSmartphone,
  ArrowRight,
  Zap,
  Shield,
  Headphones,
  MousePointer2,
} from 'lucide-react';

const appDetails = [
  {
    icon: <Smartphone size={28} className="text-white" />,
    title: 'Cross-Platform Apps',
    description: 'Build once, deploy everywhere with React Native, Flutter, and modern hybrid frameworks.',
  },
  {
    icon: <Apple size={28} className="text-white" />,
    title: 'iOS App Development',
    description: 'Beautiful native iOS apps with smooth performance, great UX, and App Store readiness.',
  },
  {
    icon: <Tablet size={28} className="text-white" />,
    title: 'Android App Development',
    description: 'Modern Android applications built with Kotlin and Jetpack for polished mobile experiences.',
  },
  {
    icon: <Cloud size={28} className="text-white" />,
    title: 'Cloud Integration',
    description: 'Scalable backends, sync services, and push notifications using AWS, Firebase, or Azure.',
  },
  {
    icon: <Database size={28} className="text-white" />,
    title: 'API & Backend',
    description: 'Secure REST and GraphQL APIs for reliable app data management and business workflows.',
  },
  {
    icon: <CheckCircle2 size={28} className="text-white" />,
    title: 'App Store Launch',
    description: 'Complete deployment support for Apple App Store and Google Play Store approvals.',
  },
];

const pricing = [
  {
    title: 'MVP Mobile App',
    price: 'Starts From ₹8000',
    details: 'Basic app features, onboarding, and analytics integration.',
  },
  {
    title: 'Business App',
    price: 'Starts From ₹15000',
    details: 'User accounts, payments, notifications, and admin dashboard.',
  },
  {
    title: 'Enterprise App',
    price: 'Starts From ₹25000',
    details: 'Advanced workflows, cloud sync, and multi-platform architecture.',
  },
  {
    title: 'Custom App Solution',
    price: 'Custom Pricing',
    details: 'Tailored mobile app built around your exact business requirements.',
  },
];

export function AppDevelopmentPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-hidden font-['Roboto'] relative">
      <div
        className="fixed pointer-events-none z-50 hidden md:flex items-center justify-center"
        style={{ left: position.x - 40, top: position.y - 40 }}
      >
        <div className="w-20 h-20 rounded-full bg-purple-500/20 backdrop-blur-xl border border-purple-400/30 flex items-center justify-center shadow-2xl">
          <Smartphone className="text-purple-400" size={30} />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>

      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-5 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-xl">
              <Cpu size={18} />
              Premium App Development Services
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Build Your
              <span className="block text-purple-400 mt-2">Mobile App Vision</span>
            </h1>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-2xl">
              We create fast, reliable mobile apps for Android and iOS with modern user experiences, secure
              backends, and launch-ready deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <a
                href="https://wa.me/916362676484"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 px-8 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Your App
                <ArrowRight size={22} />
              </a>

              <a
                href="#pricing"
                className="border border-purple-500/30 bg-white/5 backdrop-blur-xl hover:bg-purple-500/10 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300"
              >
                View Pricing
              </a>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-12">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 text-center">
                <h3 className="text-3xl font-black text-purple-400">4+</h3>
                <p className="text-sm text-gray-400 mt-1">Years Experience </p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 text-center">
                <h3 className="text-3xl font-black text-purple-400">100%</h3>
                <p className="text-sm text-gray-400 mt-1">Satisfied Clients</p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 text-center">
                <h3 className="text-3xl font-black text-purple-400">24/7</h3>
                <p className="text-sm text-gray-400 mt-1">Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop"
                alt="App Development"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent"></div>

              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Server className="text-purple-400" />
                  <div>
                    <h3 className="font-bold">Backend APIs</h3>
                    <p className="text-sm text-gray-300">Cloud-ready services</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <MonitorSmartphone className="text-purple-400" />
                  <div>
                    <h3 className="font-bold">Native UI</h3>
                    <p className="text-sm text-gray-300">Pixel-perfect apps</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 uppercase tracking-[0.3em] font-bold text-sm">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mt-5">Complete App Development Solutions</h2>
            <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              From MVPs to enterprise-grade mobile platforms, we build secure, scalable, and engaging applications for
              every device.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {appDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] overflow-hidden hover:-translate-y-3 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-2xl mb-6">
                    {detail.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4">{detail.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{detail.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-10 text-center">
              <h2 className="text-4xl lg:text-5xl font-black">App Development Pricing</h2>
              <p className="mt-4 text-purple-100 text-lg">Pricing packages built for startups, growing businesses, and enterprise apps.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {pricing.map((item, index) => (
                <div key={index} className="bg-[#0b1120] border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <div className="mt-5 text-4xl font-black text-purple-400">{item.price}</div>
                  <p className="mt-4 text-gray-400 leading-relaxed">{item.details}</p>
                  <button className="mt-8 w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl font-bold transition">Get Quote</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex items-center gap-4">
            <Zap className="text-purple-400" size={36} />
            <div>
              <h3 className="font-black">Fast Performance</h3>
              <p className="text-sm text-gray-400">Optimized for speed</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex items-center gap-4">
            <Shield className="text-purple-400" size={36} />
            <div>
              <h3 className="font-black">Secure Architecture</h3>
              <p className="text-sm text-gray-400">Built with safety</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex items-center gap-4">
            <Headphones className="text-purple-400" size={36} />
            <div>
              <h3 className="font-black">24/7 Support</h3>
              <p className="text-sm text-gray-400">Dedicated help</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex items-center gap-4">
            <MousePointer2 className="text-purple-400" size={36} />
            <div>
              <h3 className="font-black">Premium UX</h3>
              <p className="text-sm text-gray-400">Seamless interfaces</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-700 to-pink-500 rounded-[40px] p-12 lg:p-16 text-center shadow-[0_20px_80px_rgba(139,92,246,0.4)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                Ready to Launch
                <span className="block mt-2">Your Mobile App?</span>
              </h2>
              <p className="mt-6 text-purple-100 max-w-3xl mx-auto text-lg leading-relaxed">
                Contact us today for app strategy, design, development, and launch support.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
                <a
                  href="https://wa.me/916362676484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-700 hover:bg-purple-50 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  WhatsApp Now
                </a>
                <button className="border-2 border-white hover:bg-white hover:text-purple-700 px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300">
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
