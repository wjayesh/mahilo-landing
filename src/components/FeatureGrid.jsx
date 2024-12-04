import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Zap, 
  Shield, 
  Cpu, 
  CodeIcon,
  User,
  User2,
  AudioLines
} from 'lucide-react';

// Predefined icon map for easy reference
const ICONS = {
  Brain: Brain,
  Network: Network,
  Zap: Zap,
  Shield: Shield,
  Cpu: Cpu,
  User: User,
  User2: User2,
  Code: CodeIcon,
  AudioLines: AudioLines
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

  // Create a color mapping object
  const colorClasses = {
    purple: 'text-purple-600 hover:border-purple-300',
    blue: 'text-blue-600 hover:border-blue-300',
    yellow: 'text-yellow-600 hover:border-yellow-300',
    red: 'text-red-600 hover:border-red-300',
    fuchsia: 'text-fuchsia-600 hover:border-fuchsia-300',
    indigo: 'text-indigo-600 hover:border-indigo-300',
    green: 'text-green-600 hover:border-green-300',
    orange: 'text-orange-600 hover:border-orange-300',
    pink: 'text-pink-600 hover:border-pink-300',
    teal: 'text-teal-600 hover:border-teal-300',
    lime: 'text-lime-600 hover:border-lime-300',
    emerald: 'text-emerald-600 hover:border-emerald-300',
    cyan: 'text-cyan-600 hover:border-cyan-300',
    sky: 'text-sky-600 hover:border-sky-300',
    violet: 'text-violet-600 hover:border-violet-300',
    // Add more colors as needed
  };

  return (
    <motion.div 
      className={`
        relative overflow-hidden rounded-xl 
        bg-white shadow-lg p-6 
        border-2 border-transparent 
        ${colorClasses[color] || colorClasses.indigo}
        transition-all duration-300 
        transform hover:-translate-y-2
      `}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
    >
      {/* Top Section with Icon */}
      <div className="flex items-center mb-4 gap-3">
        <IconComponent 
          className={colorClasses[color]?.split(' ')[0] || 'text-indigo-600'} 
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
  const features = [
    {
      title: 'True Multi-Player AI',
      description: 'Enable simultaneous interactions between multiple users and AI agents in a shared intelligent space.',
      icon: 'Network',
      color: 'purple',
      details: [
        'Multiple users interact with AI agents simultaneously',
        'Sophisticated shared context management',
        'Configurable communication patterns between agents'
      ]
    },
    {
        title: 'Human-Centric Design',
        description: 'Keep humans in control while AI agents handle complex interactions seamlessly.',
        icon: 'User2',
        color: 'teal',
        details: [
          'Perfect balance of automation and oversight',
          'Enhanced team efficiency',
          'Intuitive human-AI interaction patterns'
        ]
    },
    {
        title: 'Voice-Enabled Intelligence',
        description: 'Natural voice interactions powered by OpenAI\'s cutting-edge Realtime API.',
        icon: 'AudioLines',
        color: 'sky', 
        details: [
          'Cutting-edge voice interaction capabilities',
          'Natural conversations with AI agents',
          'Enhanced accessibility through voice commands'
        ]
    },
    {
      title: 'Intelligent Collaboration',
      description: 'AI agents that autonomously share context and information when needed.',
      icon: 'Brain',
      color: 'lime',
      details: [
        'Smart context sharing between agents',
        'Real-time information querying across users',
        'Context windowing to prevent overload'
      ]
    },
    {
        title: 'Flexible Integration',
        description: 'Adapt and extend the framework for any collaborative AI use case.',
        icon: 'Code',
        color: 'indigo',
        details: [
          'Simple installation process',
          'Extensive documentation and templates',
          'Support for custom agent types'
        ]
    },
    {
      title: 'Advanced Agent Controls',
      description: 'Built with advanced agent communication patterns in mind.',
      icon: 'Shield',
      color: 'orange',
      details: [
        'Session management for persistence',
        'Flexible communication patterns like peer-to-peer and hierarchical',
      ]
    },
  ];

  return (
    <div id="features">
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              A Multi-Agent Human-in-the-Loop Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on the principles of extensibility, intelligent context sharing, and human oversight, mahilo lets you build sophisticated multi-agent AI apps with ease.
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