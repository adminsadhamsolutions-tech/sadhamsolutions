import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Phone } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border border-blue-200 rounded-full shadow-sm">
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">
              Premium IT + Construction Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Brand with{" "}
            <span className="text-blue-600">Powerful Digital</span> &{" "}
            <span className="text-blue-600">Construction Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg max-w-xl">
            We create websites, apps, logos, and also provide professional painting
            & construction services — everything your business needs to grow 🚀
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/916362676484"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-green-600 hover:scale-105 transition"
            >
              <Phone size={18} />
              WhatsApp Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">24+</p>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">98%</p>
              <p className="text-sm text-gray-600">Clients</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">5★</p>
              <p className="text-sm text-gray-600">Rating</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] md:h-[400px]"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl flex items-center justify-center">

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Premium</h2>
              <p className="text-blue-100">Solutions</p>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 border-4 border-blue-300 rounded-3xl opacity-20"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-20 border-4 border-blue-200 rounded-3xl opacity-10"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};