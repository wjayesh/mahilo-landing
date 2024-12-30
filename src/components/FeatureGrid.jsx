import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Zap, 
  Shield, 
  Cpu, 
  Code as CodeIcon,
  User,
  User2,
  AudioLines,
  UsersIcon
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
  AudioLines: AudioLines,
  Users: UsersIcon
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
      title: 'Universal Agent Integration',
      description: 'Connect AI agents built in any framework - LangGraph, Pydantic AI, and more.',
      icon: 'Network',
      color: 'purple',
      details: [
        'Seamless integration with popular agent frameworks',
        'Connect proprietary agents via API',
        'Framework-agnostic communication protocol'
      ]
    },
    {
      title: 'Real-Time Communication',
      description: 'Instant voice and text chat capabilities for any integrated agent.',
      icon: 'AudioLines',
      color: 'sky',
      details: [
        'Voice and text chat out of the box',
        'Real-time agent-to-agent communication',
        'Seamless human-agent interactions'
      ]
    },
    {
      title: 'Intelligent Collaboration',
      description: 'AI agents that autonomously share context and information when needed.',
      icon: 'Brain',
      color: 'lime',
      details: [
        'Smart context sharing between agents',
        'Cross-framework information exchange',
        'Autonomous agent-to-agent queries'
      ]
    },
    {
      title: 'Organization-Wide Policies',
      description: 'Enforce consistent behavior and security across all integrated agents.',
      icon: 'Shield',
      color: 'orange',
      details: [
        'Centralized policy management',
        'Consistent security controls',
        'Behavioral guidelines across agents'
      ]
    },
    {
      title: 'Human-Centric Design',
      description: 'Keep humans in control while AI agents handle complex interactions.',
      icon: 'User2',
      color: 'teal',
      details: [
        'Perfect balance of automation and oversight',
          'Humans are only contacted when needed',
          'Humans can choose to dictate AI decisions'
      ]
    },
    {
      title: 'Multi-Agent Architectures',
      description: 'Build sophisticated agent systems with flexible communication patterns.',
      icon: 'Cpu',
      color: 'indigo',
      details: [
        'Hierarchical and peer-to-peer patterns',
        'Complex workflow orchestration',
        'Scalable agent architectures'
      ]
    },
    {
      title: 'True Multi-Player AI',
      description: 'Enable simultaneous interactions between multiple users and AI agents in a shared intelligent space.',
      icon: 'Users',
      color: 'pink', 
      details: [
        'Multiple users interact with AI agents simultaneously',
        'Sophisticated shared context management',
        'Configurable communication patterns between agents'
      ]
    },
  ];

  return (
    <div id="features">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              The Universal Agent Integration Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect AI agents from any framework, enable real-time communication, and maintain human oversight - all with mahilo's powerful integration platform.
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