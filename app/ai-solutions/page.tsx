import Link from 'next/link';

export default function AISolutions() {
  return (
    <div className="min-h-screen py-16 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-india-orange opacity-30"></div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-india-green opacity-30"></div>
            <div className="inline-block bg-gradient-to-r from-india-blue to-purple-600 text-white px-4 py-2 rounded-full font-medium mb-4 relative z-10">
              Coming Soon
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Intelligent AI Solutions for Your Business
          </h1>
          <p className="text-xl text-gray-600">
            We're developing cutting-edge AI solutions that can transform every aspect of your business operations.
            From data analysis to process automation, our AI technology will give you a competitive edge.
          </p>
        </div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-purple-600 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">AI-Powered Business Intelligence</h3>
            <p className="text-gray-600">
              Utilize advanced machine learning algorithms to analyze your data, uncover hidden patterns, and make smarter business decisions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-india-blue hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Intelligent Automation</h3>
            <p className="text-gray-600">
              Implement AI-driven solutions to automate repetitive tasks, streamline workflows, and boost productivity across your organization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-india-green hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
            <p className="text-gray-600">
              Leverage AI to forecast trends, predict customer behavior, and anticipate market changes before they happen.
            </p>
          </div>
        </div>

        {/* Coming Soon Graphic */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-10 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Our AI Platform is Under Development</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our team of Indian tech experts is building next-generation AI solutions that will revolutionize how businesses operate. We're creating custom algorithms tailored to diverse industry needs, with a focus on practical, results-driven applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-india-blue to-purple-600 text-white text-center py-2 px-6 rounded-md font-medium hover:opacity-90 transition-opacity">
                  Get Early Access
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
                  <div className="text-6xl mb-2">🤖</div>
                  <div className="text-xl font-bold text-india-blue">AI Solutions</div>
                  <div className="text-sm text-gray-500">Launching Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming AI Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Natural Language Processing</h3>
                <p className="text-gray-600">
                  Interact with your systems using natural language commands and queries. Simplify complex data analysis with conversational AI interfaces and customer service bots.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-india-blue bg-opacity-10 rounded-lg p-3">
                <svg className="w-8 h-8 text-india-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Computer Vision</h3>
                <p className="text-gray-600">
                  Monitor facilities, analyze images, and extract valuable information with AI-powered visual recognition. Enhance security systems and automate quality control.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-india-green bg-opacity-10 rounded-lg p-3">
                <svg className="w-8 h-8 text-india-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reinforcement Learning</h3>
                <p className="text-gray-600">
                  Optimize business processes in real-time with reinforcement learning algorithms that continuously adapt to changing market conditions and requirements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-india-orange bg-opacity-10 rounded-lg p-3">
                <svg className="w-8 h-8 text-india-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Anomaly Detection</h3>
                <p className="text-gray-600">
                  Identify unusual patterns and potential issues in your data before they become critical problems, ensuring smooth business operations and preventing fraud.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-india-blue to-purple-600 rounded-xl p-10 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Be the First to Experience Our AI Solutions</h2>
            <p className="text-lg text-gray-100 mb-8">
              Join our waitlist to get early access to our cutting-edge AI technologies and receive exclusive updates on our development progress.
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
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 