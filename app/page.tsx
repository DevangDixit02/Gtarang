import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-6 w-16 h-16 rounded-full bg-india-orange opacity-20"></div>
                <div className="absolute -bottom-4 -right-6 w-16 h-16 rounded-full bg-india-green opacity-20"></div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 relative z-10">
                  Advanced <span className="text-india-blue">Technology Solutions</span> for Tomorrow
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with cutting-edge robotics, AI, and automation solutions. We help Indian companies innovate, optimize, and lead in the technological revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-india-blue to-gtarang-blue text-white py-3 px-8 text-center rounded-md font-medium hover:opacity-90 transition-opacity">
                  Get Started
                </Link>
                <Link href="/services" className="btn border border-india-blue text-india-blue hover:bg-gray-50 py-3 px-8 text-center">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-india-orange to-india-blue opacity-10 z-10 rounded-lg"></div>
              <div className="h-full w-full bg-white flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-32 h-32 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-6xl">🤖</div>
                  </div>
                  <h3 className="text-2xl font-bold text-india-blue mb-2">GTarang Technologies</h3>
                  <p className="text-gray-600">Innovating for a Digital India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="relative mb-4">
              <div className="absolute -top-4 -right-6 w-12 h-12 rounded-full bg-india-orange opacity-20"></div>
              <div className="absolute -bottom-4 -left-6 w-12 h-12 rounded-full bg-india-green opacity-20"></div>
              <h2 className="text-3xl font-bold text-gray-900 relative z-10">Trusted by Leading Businesses</h2>
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Client 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-24 h-24 relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <Image 
                    src="/images/armstrong.png" 
                    alt="Armstrong Dematic Logo" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Armstrong Dematic</h3>
                  <p className="text-sm text-gray-500">Warehouse Automation</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 text-4xl text-india-orange opacity-20">"</div>
                <p className="pl-6 pr-4 italic text-gray-600">
                  "GTarang's warehouse automation solution has transformed our operations. Their robotics expertise and implementation support were exceptional, resulting in a 40% increase in our processing capacity."
                </p>
                <div className="mt-4 text-right">
                 
                </div>
              </div>
            </div>
            
            {/* Client 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-24 h-24 relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <Image 
                    src="/images/transcend.png" 
                    alt="Transcend Satellite Logo" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Transcend Satellite</h3>
                  <p className="text-sm text-gray-500">Satellite Technology</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 text-4xl text-india-orange opacity-20">"</div>
                <p className="pl-6 pr-4 italic text-gray-600">
                  "The satellite technology consulting from GTarang was instrumental in our project's success. Their team's technical knowledge and innovative solutions helped us overcome significant engineering challenges."
                </p>
                <div className="mt-4 text-right">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="relative mb-4">
              <div className="absolute -top-4 -right-8 w-14 h-14 rounded-full bg-india-orange opacity-20"></div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 rounded-full bg-india-green opacity-20"></div>
              <h2 className="text-4xl font-bold text-gray-900 relative z-10">Our Technology Expertise</h2>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32"></div>
            </div>
            <p className="text-xl text-gray-600">
              We offer specialized tech consulting in robotics, AI, automation, and satellite technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-3 bg-gtarang-blue"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gtarang-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z M12,6a3.5,3.5,0,0,0,0,7h0a3.5,3.5,0,0,0,0-7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Robotics & Automation</h3>
                <p className="text-gray-600 mb-4">
                  Custom robotics solutions and warehouse automation systems designed to enhance efficiency and reduce operational costs.
                </p>
                <Link href="/services#robotics" className="text-gtarang-blue font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-3 bg-gtarang-green"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gtarang-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2a10,10,0,1,0,10,10A10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm1.91-3.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0l-3-3a1,1,0,0,1-.29-.7l0-4a1,1,0,0,1,2,0l0,3.59Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent solutions powered by advanced AI algorithms to automate processes, analyze data, and deliver actionable insights.
                </p>
                <Link href="/ai-solutions" className="text-gtarang-green font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-3 bg-india-orange"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-india-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.86,13.73a1,1,0,0,0-.86-.5H14a1,1,0,0,0-1,1v7a1,1,0,0,0,.51.87A1,1,0,0,0,14,22a1,1,0,0,0,.45-.11l3-1.5,3,1.5A1,1,0,0,0,21,22a1,1,0,0,0,.5-.13,1,1,0,0,0,.5-.87v-7A1,1,0,0,0,21.86,13.73ZM19,19.31l-2-1a1,1,0,0,0-.9,0l-2,1V15.23h4.86Zm-1-10.46V6H4V17.85H13v-4.12a3,3,0,0,1,3-3h4.61A3,3,0,0,1,18,8.85ZM12,14H6a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm0-4H6a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Satellite Technology</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end satellite systems development, integration, testing, and support for communications and earth observation applications.
                </p>
                <Link href="/services#satellite" className="text-india-orange font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-block border-2 border-india-blue text-india-blue hover:bg-india-blue hover:text-white py-3 px-8 rounded-md font-medium transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="relative mb-4">
              <div className="absolute -top-4 -right-6 w-12 h-12 rounded-full bg-india-orange opacity-20"></div>
              <div className="absolute -bottom-4 -left-6 w-12 h-12 rounded-full bg-india-green opacity-20"></div>
              <h2 className="text-4xl font-bold text-gray-900 relative z-10">Our Technology Solutions</h2>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32"></div>
            </div>
            <p className="text-xl text-gray-600">
              Delivering cutting-edge technology solutions across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Warehouse Automation</h3>
                <p className="text-gray-600">
                  Our advanced warehouse automation solutions include robotic picking systems, autonomous mobile robots (AMRs), automated storage and retrieval systems (AS/RS), and intelligent warehouse management systems.
                </p>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-india-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Inventory tracking and management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-india-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Order fulfillment optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-india-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Material handling robotics
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-orange-50 rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <div className="text-5xl mb-4">🛰️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Satellite Technology</h3>
                <p className="text-gray-600">
                  We provide comprehensive solutions for satellite design, development, testing, and operational support, enabling advanced communication networks and earth observation capabilities.
                </p>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-india-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Satellite systems design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-india-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ground station implementation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-india-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Testing and validation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
    

      {/* Why Choose Us */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="relative mb-4">
              <div className="absolute -top-4 -right-6 w-12 h-12 rounded-full bg-india-orange opacity-20"></div>
              <div className="absolute -bottom-4 -left-6 w-12 h-12 rounded-full bg-india-green opacity-20"></div>
              <h2 className="text-4xl font-bold text-gray-900 relative z-10">Why Choose GTarang</h2>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32"></div>
            </div>
            <p className="text-xl text-gray-600">
              We combine deep technical expertise with a customer-centric approach to deliver solutions that drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-india-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.83,11.17,16.41,2.6A1,1,0,0,0,14.45,2L7.82,6.77A3,3,0,0,0,6.56,8.83L2.38,20.66a1,1,0,0,0,.7,1.26,1,1,0,0,0,.28,0,1,1,0,0,0,1-.7l4.18-11.83a1,1,0,0,1,.42-.69l6.64-4.78Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Expertise</h3>
              <p className="text-gray-600">
                Our team brings decades of combined experience in robotics, AI, and satellite technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-india-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.63,3.65a1,1,0,0,0-.84-.2,8,8,0,0,1-6.22-1.27,1,1,0,0,0-1.14,0A8,8,0,0,1,5.21,3.45a1,1,0,0,0-.84.2A1,1,0,0,0,4,4.43v7.45a9,9,0,0,0,3.77,7.33l3.65,2.6a1,1,0,0,0,1.16,0l3.65-2.6A9,9,0,0,0,20,11.88V4.43A1,1,0,0,0,19.63,3.65ZM18,11.88a7,7,0,0,1-2.93,5.7L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V5.58a10,10,0,0,0,6-1.39,10,10,0,0,0,6,1.39Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-End Development</h3>
              <p className="text-gray-600">
                We handle design, development, testing, and support for complete technology solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-india-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.86,13.73a1,1,0,0,0-.86-.5H14a1,1,0,0,0-1,1v7a1,1,0,0,0,.51.87A1,1,0,0,0,14,22a1,1,0,0,0,.45-.11l3-1.5,3,1.5A1,1,0,0,0,21,22a1,1,0,0,0,.5-.13,1,1,0,0,0,.5-.87v-7A1,1,0,0,0,21.86,13.73ZM19,19.31l-2-1a1,1,0,0,0-.9,0l-2,1V15.23h4.86Zm-1-10.46V6H4V17.85H13v-4.12a3,3,0,0,1,3-3h4.61A3,3,0,0,1,18,8.85ZM12,14H6a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm0-4H6a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly research and adopt emerging technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-india-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.88,18.47c.44-1.4.62-2.11.62-5.47a8,8,0,0,0-16,0c0,3.36.18,4.07.62,5.47a2.32,2.32,0,0,0,2.26,1.53H17.6A2.32,2.32,0,0,0,19.88,18.47ZM17.6,18H6.4c-.37,0-.58-.15-.77-.79C5.33,16.09,5.09,15.38,5,12a7,7,0,0,1,14,0c-.06,3.38-.29,4.09-.58,5.21C18.18,17.85,18,18,17.6,18Zm-1.94-3.2A4.58,4.58,0,0,1,12,16.5a4.61,4.61,0,0,1-3.66-1.7,1,1,0,1,0-1.56,1.3A6.5,6.5,0,0,0,12,18.5a6.5,6.5,0,0,0,5.22-2.4,1,1,0,1,0-1.56-1.3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide comprehensive testing and ongoing technical support for all our implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-india-blue to-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how our robotics, AI, and satellite solutions can help you achieve your technological goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-india-blue hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors text-center">
                Contact Us
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 py-3 px-8 rounded-md font-medium transition-colors text-center">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 