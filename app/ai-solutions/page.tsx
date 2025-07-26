import Link from 'next/link';

export default function SatAI() {
  return (
    <div className="min-h-screen py-16 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-india-orange opacity-30"></div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-india-green opacity-30"></div>
            <div className="inline-block bg-gradient-to-r from-india-blue to-purple-600 text-white px-4 py-2 rounded-full font-medium mb-4 relative z-10">
              Introducing SatAI
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SatAI: Smart AI for Satellite Systems
          </h1>
          <p className="text-xl text-gray-600">
            SatAI is an upcoming suite of AI tools tailored for modern satellite operations — from telemetry analysis to autonomous orbit planning.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-purple-600 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Telemetry Anomaly Detection</h3>
            <p className="text-gray-600">
              Detect faults and performance deviations in satellite telemetry using machine learning and real-time analytics.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-india-blue hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Autonomous Onboard Systems</h3>
            <p className="text-gray-600">
              Enable satellites to take intelligent actions independently based on mission context and environmental factors.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-india-green hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Communication Link Optimization</h3>
            <p className="text-gray-600">
              Predict and optimize communication windows, signal reliability, and handoffs with AI-driven planning.
            </p>
          </div>
        </div>

        {/* Development Graphic Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-10 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">The SatAI Platform is in Development</h2>
              <p className="text-lg text-gray-600 mb-6">
                Built by Gtarang’s deep-tech team, SatAI is designed to revolutionize satellite health monitoring, mission automation, and space-ground coordination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-india-blue to-purple-600 text-white text-center py-2 px-6 rounded-md font-medium hover:opacity-90 transition-opacity">
                  Request Early Access
                </Link>
                <Link href="/contact#newsletter" className="btn border border-india-blue text-india-blue hover:bg-gray-50 text-center py-2 px-6">
                  Join Waitlist
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center bg-white rounded-full shadow-lg">
                <div className="absolute w-full h-full rounded-full border-8 border-purple-200 border-t-india-blue animate-spin"></div>
                <div className="absolute w-64 h-64 rounded-full border-8 border-india-orange opacity-20 border-b-india-green animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
                <div className="z-10 text-center p-6">
                  <div className="text-6xl mb-2">🛰️</div>
                  <div className="text-xl font-bold text-india-blue">SatAI</div>
                  <div className="text-sm text-gray-500">Launching Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Thermal Load Forecasting",
                color: "purple-100",
                iconColor: "purple-600",
                desc: "Predict thermal fluctuations and optimize subsystem cooling using AI-based thermal models."
              },
              {
                title: "Earth Observation Image Intelligence",
                color: "india-blue bg-opacity-10",
                iconColor: "india-blue",
                desc: "Automatically classify and label EO images using computer vision to support geospatial analytics."
              },
              {
                title: "Satellite Health Monitoring",
                color: "india-green bg-opacity-10",
                iconColor: "india-green",
                desc: "Continuously analyze satellite subsystems for early signs of failure or performance drops."
              },
              {
                title: "AI-Powered Mission Planning",
                color: "india-orange bg-opacity-10",
                iconColor: "india-orange",
                desc: "Use reinforcement learning to dynamically plan orbits, adjust tasks, and manage power or fuel usage."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className={`bg-${feature.color} rounded-lg p-3`}>
                  <svg className={`w-8 h-8 text-${feature.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-india-blue to-purple-600 rounded-xl p-10 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Explore the Future of Satellite Intelligence with SatAI</h2>
            <p className="text-lg text-gray-100 mb-8">
              Join our waitlist to become part of the SatAI early access program and shape the next era of space-tech innovation.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
              />
              <button type="button" className="bg-white text-india-blue hover:bg-gray-100 py-3 px-6 rounded-md font-medium transition-colors">
                Join Waitlist
              </button>
            </form>
            <p className="text-sm text-gray-100 mt-4">
              Your data is safe with us. We don’t spam or share your email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
