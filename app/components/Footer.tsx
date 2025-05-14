import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GTarang Solutions</h3>
            <p className="text-gray-300 mb-4">
              Providing expert consulting in Robotics, AI, Warehouse Automation,
              and Satellite Technologies for innovative business solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/gtarang-energy-solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.68,2.5a.5.5,0,0,0-.5-.5H2.5a.5.5,0,0,0-.5.5v20a.5.5,0,0,0,.5.5h19.68a.5.5,0,0,0,.5-.5ZM8.78,20.19H5.05V9.48H8.78Zm-1.86-12a2.16,2.16,0,1,1,2.15-2.16A2.16,2.16,0,0,1,6.92,8.15ZM20.19,20.19H16.46V15.06c0-1.38,0-3.16-1.92-3.16s-2.22,1.5-2.22,3.05v5.24H8.59V9.48h3.57v1.62h.05a3.9,3.9,0,0,1,3.5-1.92c3.75,0,4.44,2.47,4.44,5.68Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions" className="text-gray-300 hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#robotics" className="text-gray-300 hover:text-white transition-colors">
                  Robotics Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#ai-ml" className="text-gray-300 hover:text-white transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#warehouse" className="text-gray-300 hover:text-white transition-colors">
                  Warehouse Automation
                </Link>
              </li>
              <li>
                <Link href="/services#satellite" className="text-gray-300 hover:text-white transition-colors">
                  Satellite Technology
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.41,12.42A3.28,3.28,0,0,1,12,16.58,3.28,3.28,0,0,1,8.59,14.4a13.38,13.38,0,0,1-.59-4.4,13.38,13.38,0,0,1,.59-4.38A3.25,3.25,0,0,1,12,3.42a3.28,3.28,0,0,1,3.41,2.22,13.38,13.38,0,0,1,.59,4.38A13.38,13.38,0,0,1,15.41,14.42Zm-2.18-3H10.77V12H8.54a1,1,0,0,0,0,2h1.23v3.9a1,1,0,0,0,2,0V14h1.46a1,1,0,0,0,0-2H11.77V9.42h1.46a1,1,0,0,0,0-2H10.77a1,1,0,0,0,0,2h0Z"/>
                </svg>
                <span className="text-gray-300">
                  Flat 702, Balaji Residency<br />
                  Sec-15, Kharghar, Raigarh<br />
                  Maharashtra - 410210
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/>
                </svg>
                <span className="text-gray-300">
                  info@gtarangenergy.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18.16A8.16,8.16,0,1,1,20.16,12,8.16,8.16,0,0,1,12,20.16Zm3.33-3.73a4.33,4.33,0,0,1-6.66,0,4.33,4.33,0,0,1,0-6.66,4.33,4.33,0,0,1,6.66,0A4.33,4.33,0,0,1,15.33,16.43Zm-.94-5.72a3.47,3.47,0,0,0-4.78,0,3.47,3.47,0,0,0,0,4.78,3.47,3.47,0,0,0,4.78,0A3.47,3.47,0,0,0,14.39,10.71Z"/>
                </svg>
                <span className="text-gray-300">
                  +91 8879476341
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} GTarang Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 