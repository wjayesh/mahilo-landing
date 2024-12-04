import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Zap, 
  Shield, 
  Cpu, 
  CodeIcon 
} from 'lucide-react';

// Predefined icon map for easy reference
const ICONS = {
  Brain: Brain,
  Network: Network,
  Zap: Zap,
  Shield: Shield,
  Cpu: Cpu,
  Code: CodeIcon
};

const FeatureCard = ({ 
  title, 
  description, 
  icon = 'Brain', 
  color = 'indigo',
  details = [] 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = ICONS[icon] || Brain;

  return (
    <motion.div 
      className={`
        relative overflow-hidden rounded-xl 
        bg-white shadow-lg p-6 
        border-2 border-transparent 
        hover:border-${color}-300 
        transition-all duration-300 
        transform hover:-translate-y-2
      `}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
    >
      {/* Top Section with Icon */}
      <div className="flex items-center mb-4">
        <IconComponent 
          className={`text-${color}-600 mr-4`} 
          size={40} 
        />
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {/* Expandable Details */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? 'auto' : 0, 
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {details.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-700">
            {details.map((detail, index) => (
              <li key={index} className="mb-1">{detail}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
};

const FeatureGrid = () => {
  // Default features - easily replaceable
  const features = [
    {
      title: 'Multi-Agent Collaboration',
      description: 'Intelligent agents working together to solve complex problems.',
      icon: 'Network',
      color: 'purple',
      details: [
        'Dynamic task allocation',
        'Real-time knowledge sharing',
        'Adaptive problem-solving strategies'
      ]
    },
    {
      title: 'Advanced Learning Capabilities',
      description: 'Continuous improvement through collective intelligence.',
      icon: 'Brain',
      color: 'blue',
      details: [
        'Meta-learning techniques',
        'Cross-agent knowledge transfer',
        'Adaptive learning algorithms'
      ]
    },
    {
      title: 'Scalable Architecture',
      description: 'Flexible framework that grows with your needs.',
      icon: 'Cpu',
      color: 'green',
      details: [
        'Horizontal agent scaling',
        'Cloud-native design',
        'Microservice architecture'
      ]
    },
    {
      title: 'Secure Interactions',
      description: 'Robust security and privacy at the core of our design.',
      icon: 'Shield',
      color: 'red',
      details: [
        'End-to-end encryption',
        'Granular access controls',
        'Compliance-ready infrastructure'
      ]
    },
    {
      title: 'Rapid Prototyping',
      description: 'Build and deploy agent networks in minutes.',
      icon: 'Zap',
      color: 'yellow',
      details: [
        'No-code agent configuration',
        'Pre-built agent templates',
        'Instant deployment tools'
      ]
    },
    {
      title: 'Extensible Framework',
      description: 'Integrate with existing tools and technologies.',
      icon: 'Code',
      color: 'indigo',
      details: [
        'Plugin-based architecture',
        'REST and GraphQL APIs',
        'Multi-language support'
      ]
    }
  ];

  return (
    <div id="features">
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Powerful Features, Infinite Possibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mahilo provides a comprehensive suite of features designed to revolutionize multi-agent AI development.
            </p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;