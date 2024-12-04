import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Twitter, 
      href: 'https://twitter.com/mahilo', 
      color: 'text-blue-400' 
    },
    { 
      icon: Github, 
      href: 'https://github.com/mahilo', 
      color: 'text-gray-800' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/mahilo', 
      color: 'text-blue-600' 
    },
    { 
      icon: Mail, 
      href: 'mailto:contact@mahilo.ai', 
      color: 'text-red-500' 
    }
  ];

  const footerNavigation = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Use Cases', href: '#use-cases' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Documentation', href: '/docs' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookies', href: '/cookies' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Branding and Description */}
          <div>
            <div className="flex items-center mb-4">
              <svg 
                className="w-6 h-6 text-blue-600" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"     
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="ml-3 text-2xl font-bold">mahilo</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing AI collaboration through intelligent, interconnected multi-agent systems.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:opacity-75`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-3 col-span-2 gap-8">
            {Object.entries(footerNavigation).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-white mb-4 capitalize">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} wjayesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;