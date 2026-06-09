import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brush,
  Droplets,
  Sparkles,
  CheckCircle2,
  Phone,
  PaintBucket,
  Hammer,
  ShieldCheck,
  ArrowRight,
  Star,
  BadgeCheck,
  Clock3,
} from 'lucide-react';

const services = [
  {
    icon: <Brush size={30} className="text-white" />,
    title: 'Interior Painting',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop',
    desc: 'Premium interior painting with smooth finishing, elegant color combinations, and long-lasting durability.',
  },
  {
    icon: <Droplets size={30} className="text-white" />,
    title: 'Exterior Painting',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop',
    desc: 'Weather-resistant exterior painting solutions for homes, villas, apartments, and commercial buildings.',
  },
  {
    icon: <Sparkles size={30} className="text-white" />,
    title: 'Texture Painting',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop',
    desc: 'Luxury texture finishes and designer wall effects to create premium modern interiors.',
  },
  {
    icon: <PaintBucket size={30} className="text-white" />,
    title: 'Re-Painting Services',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop',
    desc: 'Complete repainting and renovation painting services for old buildings and damaged walls.',
  },
  {
    icon: <Hammer size={30} className="text-white" />,
    title: 'Structure Work',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
    desc: 'Professional structure and civil work services with strong quality construction support.',
  },
  {
    icon: <ShieldCheck size={30} className="text-white" />,
    title: 'Waterproof & Putty',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1400&auto=format&fit=crop',
    desc: 'Waterproof coating, putty works, crack filling, and wall preparation for perfect finishing.',
  },
];

const pricing = [
  {
    title: 'Labour Contract',
    sqft: '₹50 / Sq.ft',
    chaduram: '₹5000',
    quote: '1000 Sq.ft = ₹50,000',
  },
  {
    title: 'Material Contract',
    sqft: '₹90 / Sq.ft',
    chaduram: '₹9000',
    quote: '1000 Sq.ft = ₹90,000',
  },
  {
    title: 'Re-Painting',
    sqft: '₹30 / Sq.ft',
    chaduram: '₹3000',
    quote: '1000 Sq.ft = ₹30,000',
  },
  {
    title: 'Structure Work',
    sqft: '₹55 / Sq.ft',
    chaduram: '-',
    quote: '1000 Sq.ft = ₹55,000',
  },
];

export function PaintingServicesPage() {
  return (
    <div className="bg-[#f5f9ff] min-h-screen overflow-hidden font-['Roboto'] text-gray-900">

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sky-400/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold shadow-md mb-6">
              <BadgeCheck size={18} />
              Premium Painting & Structure Services
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              Professional
              <span className="text-blue-600 block mt-2">
                Painting Solutions
              </span>
              for Modern Spaces
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
              Sadham Solutions provides high-quality interior painting,
              exterior painting, texture painting, repainting,
              waterproof coating, putty works, and structure services
              for homes, villas, apartments, offices, and commercial projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <a
                href="https://wa.me/916362676484"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Free Consultation
                <ArrowRight size={20} />
              </a>

              <a
                href="#pricing"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Pricing
              </a>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="bg-white rounded-3xl p-5 shadow-xl border border-blue-100 text-center">
                <h3 className="text-3xl font-black text-blue-600">24+</h3>
                <p className="text-sm text-gray-600 mt-1">Projects</p>
              </div>

              <div className="bg-white rounded-3xl p-5 shadow-xl border border-blue-100 text-center">
                <h3 className="text-3xl font-black text-blue-600">98%</h3>
                <p className="text-sm text-gray-600 mt-1">Clients</p>
              </div>

              <div className="bg-white rounded-3xl p-5 shadow-xl border border-blue-100 text-center">
                <h3 className="text-3xl font-black text-blue-600">5★</h3>
                <p className="text-sm text-gray-600 mt-1">Ratings</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] border border-white/40">

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
                alt="Painting Services"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-lg">
                    Trusted Professional Team
                  </span>
                </div>

                <p className="text-white/90 leading-relaxed">
                  High-quality painting services with modern finishing,
                  affordable pricing, and on-time project delivery.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-blue-600 uppercase tracking-[0.3em] font-bold text-sm">
              Our Services
            </span>

            <h2 className="text-4xl lg:text-5xl font-black mt-4">
              Complete Painting Services
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-relaxed">
              We deliver premium painting and structure services with modern tools,
              experienced professionals, and high-quality materials.
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
                className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-3 transition-all duration-500"
              >

                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">

                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-2xl mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-black mb-4 text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-[16px]">
                    {service.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gray-100">

            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 p-10 text-center text-white">
              <h2 className="text-4xl lg:text-5xl font-black">
                Pricing Details
              </h2>

              <p className="mt-4 text-blue-100 text-lg">
                Affordable pricing with premium quality work
              </p>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px]">

                <thead className="bg-blue-50">
                  <tr>
                    <th className="p-6 text-left text-lg font-black text-gray-900">
                      Service Type
                    </th>

                    <th className="p-6 text-left text-lg font-black text-gray-900">
                      Per Sq.ft
                    </th>

                    <th className="p-6 text-left text-lg font-black text-gray-900">
                      Per Chaduram
                    </th>

                    <th className="p-6 text-left text-lg font-black text-gray-900">
                      Example Quotation
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {pricing.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-blue-50/40 transition"
                    >

                      <td className="p-6 font-bold text-gray-900 text-lg">
                        {item.title}
                      </td>

                      <td className="p-6 text-blue-600 font-black text-2xl">
                        {item.sqft}
                      </td>

                      <td className="p-6 text-green-600 font-black text-2xl">
                        {item.chaduram}
                      </td>

                      <td className="p-6 text-orange-500 font-bold text-lg">
                        {item.quote}
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-10 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
            <CheckCircle2 className="text-blue-600" size={36} />
            <div>
              <h3 className="font-black">Premium Quality</h3>
              <p className="text-sm text-gray-600">Best materials used</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
            <Clock3 className="text-blue-600" size={36} />
            <div>
              <h3 className="font-black">On-Time Delivery</h3>
              <p className="text-sm text-gray-600">Fast project completion</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
            <Star className="text-blue-600" size={36} />
            <div>
              <h3 className="font-black">Experienced Team</h3>
              <p className="text-sm text-gray-600">Professional workers</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
            <Phone className="text-blue-600" size={36} />
            <div>
              <h3 className="font-black">Free Estimation</h3>
              <p className="text-sm text-gray-600">Site visit & consultation</p>
            </div>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-10">

        <div className="max-w-6xl mx-auto">

          <div className="bg-gradient-to-r from-blue-700 to-sky-600 rounded-[40px] p-10 lg:p-16 text-center text-white shadow-[0_20px_80px_rgba(37,99,235,0.35)] relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >

              <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                Get FREE Estimation
                <span className="block mt-2">
                  for Your Painting Project
                </span>
              </h2>

              <p className="mt-6 text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
                Contact Sadham Solutions today for professional painting,
                structure work, free consultation, and affordable pricing.
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

                <Link
                  to="/"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300"
                >
                  Back to Home
                </Link>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
}
