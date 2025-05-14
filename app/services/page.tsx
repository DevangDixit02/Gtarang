import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-1.5 px-3 mb-4 rounded-full bg-gradient-to-r from-india-orange/20 to-india-green/20 text-gray-800 text-sm font-medium">
              Our Consulting Services
            </div>
            <div className="relative mb-8">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-india-orange opacity-10"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-india-green opacity-10"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
                Technology <span className="text-india-blue">Consulting</span> Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              We provide specialized consulting services in Robotics, AI, Warehouse Automation, 
              and Satellite technologies with comprehensive design, development, and testing support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Robotics Consulting */}
            <div id="robotics" className="service-item">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-india-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,11A3,3,0,1,0,9,8,3,3,0,0,0,12,11Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,12,7ZM17.91,8.08,15.8,6a1,1,0,0,0-1.42,1.42l.29.29H12.5a1,1,0,0,0,0,2h2.17l-.29.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2.11-2.12a1,1,0,0,0,0-1.42ZM8.5,8.29l.29-.3A1,1,0,0,0,7.37,6.58L5.26,8.69a1,1,0,0,0,0,1.41L7.37,12.2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41l-.29-.29H11a1,1,0,0,0,0-2H8.79ZM12,13a3,3,0,1,0,3,3A3,3,0,0,0,12,13Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,17ZM19,6H18V5a3,3,0,0,0-3-3H9A3,3,0,0,0,6,5V6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H6v1a3,3,0,0,0,3,3h6a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM8,5a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1V6H8ZM16,19a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V18h8Zm5-4a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V9A1,1,0,0,1,4,8H20a1,1,0,0,1,1,1Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Robotics Consulting</h2>
                  <p className="text-gray-600 mb-6">
                    Our robotics consulting services help businesses identify, implement, and optimize robotic 
                    systems to enhance productivity, reduce costs, and improve operational efficiency.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Technology Assessment</h3>
                      <p className="text-gray-600">
                        Evaluate your current operations and identify opportunities for robotic implementation 
                        with comprehensive ROI analysis and implementation roadmaps.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">System Design</h3>
                      <p className="text-gray-600">
                        Expert design of robotic systems including hardware selection, integration planning, 
                        and custom end-effector design for your specific applications.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Implementation Support</h3>
                      <p className="text-gray-600">
                        Guidance through the implementation process including programming, integration with 
                        existing systems, testing, and staff training.
                      </p>
                    </div>
                  </div>
                  <Link href="/contact" className="mt-6 inline-flex items-center text-india-blue hover:text-india-blue/80">
                    Discuss your robotics needs
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* AI Consulting */}
            <div id="ai-ml" className="service-item">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-india-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,22a4.5,4.5,0,0,1-1.5-.26,4.48,4.48,0,0,1-2.74-2.74,4.5,4.5,0,0,1-.26-1.5V15.92l-1-1v1.33a1,1,0,0,1-2,0v-2a1,1,0,0,1,.29-.71l2-2A1,1,0,0,1,7.5,11.25H9.26A4.5,4.5,0,0,1,10.5,9.75a4.48,4.48,0,0,1,2.74-2.74,4.5,4.5,0,0,1,1.5-.26h.92l1-1H15.33a1,1,0,0,1,0-2h2a1,1,0,0,1,.71.29l2,2A1,1,0,0,1,20.25,6.5V8.26a4.5,4.5,0,0,1,1.5,1.24,4.48,4.48,0,0,1,2.74,2.74,4.5,4.5,0,0,1,.26,1.5A4.49,4.49,0,0,1,20.26,18,4.5,4.5,0,0,1,17.5,17.5a4.48,4.48,0,0,1-2.74-2.74,4.5,4.5,0,0,1-.26-1.5V12.33l-1,1v1.42a4.5,4.5,0,0,1,.26,1.5,4.48,4.48,0,0,1,2.74,2.74,4.5,4.5,0,0,1,.26,1.5A4.49,4.49,0,0,1,12,22Zm0-2a2.5,2.5,0,0,0,1.77-.73,2.51,2.51,0,0,0,0-3.54A2.45,2.45,0,0,0,12,15a2.5,2.5,0,0,0-1.77.73,2.51,2.51,0,0,0,0,3.54A2.45,2.45,0,0,0,12,20ZM6.5,9.75a1,1,0,1,0,1,1A1,1,0,0,0,6.5,9.75ZM17.5,2a4.5,4.5,0,0,1,1.5.26,4.48,4.48,0,0,1,2.74,2.74,4.5,4.5,0,0,1,.26,1.5,4.49,4.49,0,0,1-4.5,4.5,4.5,4.5,0,0,1-1.5-.26,4.48,4.48,0,0,1-2.74-2.74,4.5,4.5,0,0,1-.26-1.5A4.49,4.49,0,0,1,17.5,2Zm0,7a2.5,2.5,0,0,0,1.77-.73,2.51,2.51,0,0,0,0-3.54A2.45,2.45,0,0,0,17.5,4a2.5,2.5,0,0,0-1.77.73,2.51,2.51,0,0,0,0,3.54A2.45,2.45,0,0,0,17.5,9Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Consulting</h2>
                  <p className="text-gray-600 mb-6">
                    Our AI consulting services help organizations leverage artificial intelligence 
                    technologies to solve complex business problems and create competitive advantages.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">AI Strategy Development</h3>
                      <p className="text-gray-600">
                        Develop comprehensive AI strategies aligned with your business goals, including 
                        use case identification, feasibility analysis, and implementation roadmaps.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Algorithm Selection & Design</h3>
                      <p className="text-gray-600">
                        Expert guidance on selecting and designing the right AI algorithms and models 
                        for your specific business challenges and data environments.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">AI Integration & Deployment</h3>
                      <p className="text-gray-600">
                        Support for integrating AI solutions into your existing systems and processes, 
                        with focus on scalability, performance, and maintainability.
                      </p>
                    </div>
                  </div>
                  <Link href="/ai-solutions" className="mt-6 inline-flex items-center text-india-orange hover:text-india-orange/80">
                    Explore our AI consulting approach
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Warehouse Automation Consulting */}
            <div id="warehouse" className="service-item">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-india-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,8H18V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V11A3,3,0,0,0,19,8ZM5,4H15a1,1,0,0,1,1,1V8H5a1,1,0,0,0-1,1V6A2,2,0,0,1,5,4ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1ZM10,14h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Warehouse Automation Consulting</h2>
                  <p className="text-gray-600 mb-6">
                    Our warehouse automation consulting services help organizations design and implement 
                    efficient, scalable automated warehouse solutions that optimize operations and reduce costs.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Warehouse Assessment</h3>
                      <p className="text-gray-600">
                        Thorough analysis of your current warehouse operations, including material flow, 
                        inventory management, and order fulfillment processes to identify automation opportunities.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">System Design & Selection</h3>
                      <p className="text-gray-600">
                        Expert guidance on selecting the right automation technologies for your needs, 
                        including AS/RS, AMRs, conveyor systems, and warehouse management software.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Implementation Planning</h3>
                      <p className="text-gray-600">
                        Detailed implementation planning, including phasing strategies, integration requirements, 
                        and operational transition approaches to minimize disruption.
                      </p>
                    </div>
                  </div>
                  <Link href="/contact" className="mt-6 inline-flex items-center text-india-green hover:text-india-green/80">
                    Schedule a warehouse consultation
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Satellite Technology Consulting */}
            <div id="satellite" className="service-item">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.92,2.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H16a1,1,0,0,0,0,2h2.59L13.29,9.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V8a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62ZM19,19H5V5h6a1,1,0,0,0,0-2H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V13a1,1,0,0,0-2,0ZM12.29,16.71c.23-.23,1.71-1.68,1.71-3.08s-1.48-2.85-1.71-3.08a1,1,0,0,0-1.42,0C10.64,10.78,9,12.38,9,13.63s1.64,2.85,1.87,3.08a1,1,0,0,0,1.42,0ZM12,12c.17.19.45.56.63.88a5.73,5.73,0,0,1-.63.88,5.73,5.73,0,0,1-.63-.88A5.41,5.41,0,0,1,12,12Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Satellite Technology Consulting</h2>
                  <p className="text-gray-600 mb-6">
                    Our satellite technology consulting services provide expert guidance on satellite system design, 
                    development, and testing for communications and earth observation applications.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">System Design & Architecture</h3>
                      <p className="text-gray-600">
                        Expert design of satellite systems including payload configuration, communications architecture, 
                        power systems, and orbital mechanics planning.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Development Support</h3>
                      <p className="text-gray-600">
                        Technical support throughout the development process, including component selection, 
                        interface design, subsystem integration, and software development.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Testing & Validation</h3>
                      <p className="text-gray-600">
                        Comprehensive testing and validation services including environmental testing, 
                        performance verification, integration testing, and pre-launch certification.
                      </p>
                    </div>
                  </div>
                  <Link href="/contact" className="mt-6 inline-flex items-center text-purple-600 hover:text-purple-700">
                    Discuss your satellite project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Approach</h2>
            <p className="text-lg text-gray-600">
              We follow a systematic approach to deliver technology consulting services that drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-india-blue flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Analysis</h3>
              <p className="text-gray-600">
                We thoroughly analyze your business goals, technical requirements, and operational challenges to understand your unique needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-india-blue flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy Development</h3>
              <p className="text-gray-600">
                Our experts develop customized technology strategies and implementation roadmaps aligned with your business objectives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-india-blue flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Guidance</h3>
              <p className="text-gray-600">
                We provide expert technical guidance throughout the implementation process, ensuring optimal technology selection and integration.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-india-blue flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Our team offers continuous support to ensure successful adoption and maximize the value of your technology investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-india-blue to-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Technology Strategy?</h2>
            <p className="text-xl mb-8">
              Partner with GTarang to leverage our expertise in robotics, AI, warehouse automation, and satellite technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-india-blue hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors text-center">
                Schedule a Consultation
              </Link>
              <Link href="/ai-solutions" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 py-3 px-8 rounded-md font-medium transition-colors text-center">
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 