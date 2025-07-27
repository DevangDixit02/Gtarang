'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Rocket,
  Brain,
  PackageCheck,
  Users
} from 'lucide-react';


export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden py-28 lg:py-40">
        {/* Background blur circles */}
        <div className="absolute w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-0 -left-20 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 bottom-0 -right-20 animate-pulse"></div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Satellite & AI Innovation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                GTarang is a leading provider of cutting-edge satellite and AI solutions, offering comprehensive consulting services to help you navigate the complex world of space technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-8 text-center rounded-md font-medium hover:shadow-xl hover:scale-105 transition duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-8 text-center rounded-md font-medium transition duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Image Card */}
            <div className="relative bg-white/30 backdrop-blur-xl border border-indigo-100 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center transition hover:scale-105 duration-300">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-indigo-100 shadow-md z-10 mb-6">
                <Image
                  src="/images/roc.jpg"
                  alt="Satellite Showcase"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="z-50">
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">GTarang </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Accelerating Intelligence in Orbit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Leading Innovators</h2>
            <div className="mt-3 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4">
              Collaborating with top enterprises across satellite, defense, and automation sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[{
              logo: "/images/transcend.png",
              name: "Transcend Satellite",
              subtitle: "Satellite System Engineering",
              quote: "GTarang's strategic input in telemetry, ground systems, and lifecycle modeling pushed our satellite project from feasibility to launch-ready."
            }, {
              logo: "/images/armstrong.png",
              name: "Armstrong Dematic",
              subtitle: "Robotic Automation",
              quote: "Their AI-backed warehouse solutions cut delays and manual effort by over 40%. GTarang gets the job done right."
            }].map((client, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="w-24 h-24 relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <Image src={client.logo} alt={client.name + ' Logo'} width={100} height={100} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                    <p className="text-sm text-gray-500">{client.subtitle}</p>
                  </div>
                </div>
                <p className="italic text-gray-600 pl-6">"{client.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Core Services</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32 mx-auto my-4"></div>
            <p className="text-xl text-gray-600">Delivering impact through Satellite Engineering, AI, and Automation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              emoji: "🛰️",
              title: "Satellite Systems",
              desc: "Design, development, and integration of satellite payloads, platforms, and communication architecture.",
              link: "/services#satellite"
            }, {
              emoji: "🧠",
              title: "AI & Analytics",
              desc: "Machine learning solutions for signal processing, anomaly detection, predictive diagnostics, and telemetry analytics.",
              link: "/ai-solutions"
            }, {
              emoji: "🏭",
              title: "Warehouse Automation",
              desc: "Scalable automation systems—robotic picking, storage, and inventory control for modern logistics.",
              link: "/services#warehouse"
            }].map((service, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href={service.link} className="text-indigo-600 hover:underline">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
  <div className="container-custom text-center">
    <h2 className="text-4xl font-bold mb-6">Why Choose GTarang</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      {/* Space Tech Focus */}
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <div className="flex justify-center mb-4 text-indigo-600">
          <Rocket size={36} />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">Space Tech Focus</h4>
        <p className="text-gray-600">
          Deep domain expertise in satellite system architecture, AI, and mission-critical aerospace workflows.
        </p>
      </div>

      {/* AI-Powered Engineering */}
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <div className="flex justify-center mb-4 text-indigo-600">
          <Brain size={36} />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Engineering</h4>
        <p className="text-gray-600">
          Seamless fusion of ML pipelines, signal processing, and sensor analytics into space-grade platforms.
        </p>
      </div>

      {/* End-to-End Delivery */}
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <div className="flex justify-center mb-4 text-indigo-600">
          <PackageCheck size={36} />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Delivery</h4>
        <p className="text-gray-600">
          From concept and simulation to testing, GTarang supports the full product lifecycle.
        </p>
      </div>

      {/* Client-Driven Culture */}
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <div className="flex justify-center mb-4 text-indigo-600">
          <Users size={36} />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">Client-Driven Culture</h4>
        <p className="text-gray-600">
          Collaborative, agile teams delivering value with precision and measurable results.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Launch Your Next-Gen Mission with Us
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Transform your business with Satellite and Ai intelligence
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-indigo-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition">Contact Us</Link>
            <Link href="/services" className="border-2 border-white py-3 px-8 rounded-md font-semibold hover:bg-white hover:text-indigo-600 transition">Explore Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
