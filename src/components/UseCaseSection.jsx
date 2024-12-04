import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  AlertCircle, 
  Home,
  ArrowRight,
  PlayCircle,
  Github,
  Globe
} from 'lucide-react';

const USE_CASES = [
  {
    id: 'story-weaver',
    title: 'Story Weaver',
    subtitle: 'Collaborative Content Creation',
    icon: BookOpen,
    iconColor: 'purple',
    colorClasses: {
      icon: 'text-purple-500',
      border: 'border-purple-200',
      arrow: 'text-purple-500'
    },
    description: 'Multi-player storytelling game where users create stories while AI agents intelligently blend narratives.',
    demoUrl: 'https://x.com/WJayesh/status/1853802235647705403',
    githubUrl: 'https://github.com/wjayesh/mahilo/tree/main/examples/story_weavers',
    websiteUrl: 'https://story-weaver.wjayesh.com',
    features: [
      'Real-time collaborative content creation with AI',
      'Shared context management for enhanced creativity',
      'Individual narrative ownership tracking',
      'Multi-player AI interaction system'
    ]
  },
  {
    id: 'emergency-response',
    title: '911 Emergency Response',
    subtitle: 'Critical Response Coordination',
    icon: AlertCircle,
    iconColor: 'red',
    colorClasses: {
      icon: 'text-red-500',
      border: 'border-red-200',
      arrow: 'text-red-500'
    },
    description: 'Multi-agent emergency response coordination platform that intelligently routes cases to specialized agents.',
    demoUrl: 'https://x.com/WJayesh/status/1841497603110043910',
    githubUrl: 'https://github.com/wjayesh/mahilo/tree/main/examples/scenario_911',
    features: [
      'Concise and relevant context sharing in high-stakes scenarios',
      'Real-time coordination between multiple human-AI teams',
      'Smart routing of cases to specialized agents',
      'Agents relay critical information to humans as needed'
    ]
  },
  {
    id: 'rentmate-ai',
    title: 'RentMate AI',
    subtitle: 'Real Estate Matchmaking',
    icon: Home,
    iconColor: 'tan',
    colorClasses: {
      icon: 'text-[#D2B48C]',
      border: 'border-[#D2B48C]',
      arrow: 'text-[#D2B48C]'
    },
    description: 'Automated property matching and scheduling system through personalized AI agents for buyers and sellers.',
    demoUrl: 'https://x.com/WJayesh/status/1859187280885465424',
    githubUrl: 'https://github.com/wjayesh/mahilo/tree/main/examples/real_estate_management',
    websiteUrl: 'https://rentmate-ai.wjayesh.com',
    features: [
      'AI agents that remember your preferences',
      'Inter-agent autonomous communication for scheduling',
      'Agents can share important context like budget and rules',
      'Humans contacted only when needed'
    ]
  }
];

const UseCaseSection = () => {
  const [activeCase, setActiveCase] = useState(USE_CASES[0]);

  return (
    <div id="use-cases" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse range of multi-agents apps that mahilo can help you create
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/3 space-y-4">
            {USE_CASES.map((useCase) => (
              <motion.div
                key={useCase.id}
                onClick={() => setActiveCase(useCase)}
                className={`
                  cursor-pointer p-6 rounded-xl
                  flex flex-col gap-2
                  ${activeCase.id === useCase.id 
                    ? `bg-white shadow-lg border-2 ${useCase.colorClasses.border}` 
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }
                  transition-all duration-200
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <useCase.icon 
                    className={useCase.colorClasses.icon}
                    size={28}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {useCase.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Use Case Details */}
          <motion.div 
            key={activeCase.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="md:w-2/3 bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <activeCase.icon 
                className={activeCase.colorClasses.icon}
                size={36} 
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {activeCase.title}
                </h3>
                <p className="text-gray-500">{activeCase.subtitle}</p>
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-8">
              {activeCase.description}
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-700">
                Key Mahilo Features Demonstrated
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeCase.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <ArrowRight className={activeCase.colorClasses.arrow} size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={activeCase.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <PlayCircle size={20} />
                Watch Demo
              </a>
              <a 
                href={activeCase.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Github size={20} />
                View on GitHub
              </a>
              {activeCase.websiteUrl && (
                <a 
                  href={activeCase.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Globe size={20} />
                  Visit Website
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseSection;