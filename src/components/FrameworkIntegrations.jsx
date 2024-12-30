import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Video } from 'lucide-react';

const FrameworkCard = ({ name, description, status = 'Available', comingSoon = false }) => {
  return (
    <motion.div 
      className={`
        p-6 rounded-xl shadow-lg 
        ${comingSoon ? 'bg-gray-50' : 'bg-white'} 
        border-2 border-transparent hover:border-blue-300
        transition-all duration-300
      `}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <span className={`
          px-3 py-1 rounded-full text-sm font-medium
          ${comingSoon ? 'bg-gray-200 text-gray-600' : 'bg-green-100 text-green-800'}
        `}>
          {status}
        </span>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const IntegrationDiagram = () => {
  return (
    <div className="relative w-full h-full">
      <img 
        src="/landing_control_plane_cropped_2.png"
        alt="AI Agents Integration Diagram"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

const FrameworkIntegrations = () => {
  const frameworks = [
    {
      name: 'LangGraph',
      description: 'Connect agents built with LangChain\'s LangGraph framework for complex agent workflows and state machines.',
      status: 'Available'
    },
    {
      name: 'Pydantic AI',
      description: 'Integrate agents using Pydantic AI\'s structured data models and validation system.',
      status: 'Available'
    },
    {
      name: 'Custom API Agents',
      description: 'Build agents through our mahilo\'s BaseAgent interface over any API.',
      status: 'Available'
    },
    {
      name: 'AutoGen',
      description: 'Support for Microsoft\'s AutoGen framework for multi-agent conversations.',
      status: 'Coming Soon',
      comingSoon: true
    },
    {
      name: 'CrewAI',
      description: 'Integration with CrewAI for role-based agent collaboration systems.',
      status: 'Coming Soon',
      comingSoon: true
    },
    {
      name: 'More Frameworks and Services',
      description: 'More frameworks and propreitary services coming soon. Request your preferred integration!',
      status: 'Coming Soon',
      comingSoon: true
    }
  ];

  return (
    <div className="overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero Section with Split Layout */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-24">
          <div className="md:col-span-5 md:pr-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Let your agents know they are not alone
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Enable your AI agents to collaborate and share information intelligently, just like humans do. Mahilo brings them together while keeping you in control.
            </p>
            <a 
              href="https://x.com/wjayesh/status/1872263352254427458"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Video size={20} />
              Watch Demo
              <ArrowRight size={20} />
            </a>
          </div>
          <div className="md:col-span-7 md:-mr-24 lg:-mr-24">
            <IntegrationDiagram />
          </div>
        </div>

        {/* Framework Cards Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Supported Frameworks
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Connect agents from popular frameworks or bring your own through our standardized API.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {frameworks.map((framework, index) => (
              <FrameworkCard key={index} {...framework} />
            ))}
          </div>

          <Link 
            href="/integrations" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Check out the integrations
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrameworkIntegrations; 