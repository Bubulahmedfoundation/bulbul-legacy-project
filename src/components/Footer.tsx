
import { Link } from "react-router-dom";
import { Facebook, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-baft-darkgray text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Foundation Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-playfair text-xl mb-4 font-semibold">Bulbul Ahmed Foundation Trust</h3>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Preserving a legacy. Empowering generations through cultural initiatives and
              humanitarian efforts since 2015.
            </p>
            <div className="flex space-x-3 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-baft-gold/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-baft-gold/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-baft-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-baft-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-baft-gold transition-colors">Programs</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-baft-gold transition-colors">News & Events</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-baft-gold transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-playfair text-xl mb-4 font-semibold">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs#awards" className="text-gray-300 hover:text-baft-gold transition-colors">Memorial Award</Link></li>
              <li><Link to="/programs#winter" className="text-gray-300 hover:text-baft-gold transition-colors">Winter Drives</Link></li>
              <li><Link to="/programs#refugee" className="text-gray-300 hover:text-baft-gold transition-colors">Refugee Support</Link></li>
              <li><Link to="/programs#schools" className="text-gray-300 hover:text-baft-gold transition-colors">School Support</Link></li>
              <li><Link to="/programs#covid" className="text-gray-300 hover:text-baft-gold transition-colors">COVID-19 Relief</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-baft-gold" />
                <span className="text-gray-300">contact@bulbulahmedfoundation.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-baft-gold" />
                <span className="text-gray-300">+880 2-222222222</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 mt-1 text-baft-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="text-gray-300 not-italic">
                  House 123, Road 456<br />
                  Gulshan, Dhaka<br />
                  Bangladesh
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>
            &copy; {currentYear} Bulbul Ahmed Foundation Trust. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
