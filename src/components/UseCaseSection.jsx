import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  AlertCircle, 
  Home, 
  ArrowRight 
} from 'lucide-react';

const USE_CASES = [
  {
    id: 'story-weaver',
    title: 'Story Weaver',
    icon: BookOpen,
    iconColor: 'purple',
    problem: 'Creating complex, coherent narratives with multiple perspectives and intricate plotlines is challenging for single AI models.',
    solution: 'A multi-agent collaborative storytelling framework where specialized agents handle character development, plot progression, dialogue, and world-building.',
    results: [
      'Generated 50,000-word novels with consistent narrative arcs',
      'Reduced story development time by 75%',
      'Maintained character consistency across complex narratives'
    ],
    screenshots: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ]
  },
  {
    id: 'emergency-response',
    title: '911 Emergency Response',
    icon: AlertCircle,
    iconColor: 'red',
    problem: 'Emergency dispatch systems struggle to quickly prioritize and coordinate complex multi-faceted emergency scenarios.',
    solution: 'An AI agent network that simultaneously assesses threat levels, coordinates emergency services, provides real-time communication, and manages resource allocation.',
    results: [
      'Reduced emergency response times by 40%',
      'Improved accuracy of initial threat assessment',
      'Enhanced inter-agency communication protocols'
    ],
    screenshots: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ]
  },
  {
    id: 'rentmate-ai',
    title: 'RentMate AI',
    icon: Home,
    iconColor: 'blue',
    problem: 'Finding the perfect rental is time-consuming and involves complex decision-making across multiple dimensions.',
    solution: 'A collaborative AI system that breaks down rental search into specialized agents handling location analysis, budget optimization, preference matching, and negotiation.',
    results: [
      'Reduced rental search time by 60%',
      'Matched users with 95% accuracy to ideal properties',
      'Automated comprehensive rental application process'
    ],
    screenshots: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ]
  }
];

const UseCaseSection = () => {
  const [activeCase, setActiveCase] = useState(USE_CASES[0]);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Real-World AI Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mahilo's multi-agent framework solving complex challenges across industries
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4 space-y-4">
            {USE_CASES.map((useCase) => (
              <motion.div
                key={useCase.id}
                onClick={() => setActiveCase(useCase)}
                className={`
                  cursor-pointer p-4 rounded-lg 
                  flex items-center 
                  ${activeCase.id === useCase.id 
                    ? `bg-${useCase.iconColor}-100 border-2 border-${useCase.iconColor}-300` 
                    : 'bg-white hover:bg-gray-100'
                  }
                  shadow-md transition-all
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <useCase.icon 
                  className={`mr-4 text-${useCase.iconColor}-600`} 
                  size={32} 
                />
                <span className="font-semibold text-gray-800">
                  {useCase.title}
                </span>
                {activeCase.id === useCase.id && (
                  <ArrowRight className="ml-auto text-gray-600" size={24} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Active Use Case Details */}
          <motion.div 
            key={activeCase.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-3/4 bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <activeCase.icon 
                className={`mr-4 text-${activeCase.iconColor}-600`} 
                size={48} 
              />
              <h3 className="text-3xl font-bold text-gray-800">
                {activeCase.title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-700">
                  The Problem
                </h4>
                <p className="text-gray-600 mb-6">
                  {activeCase.problem}
                </p>

                <h4 className="text-xl font-semibold mb-4 text-gray-700">
                  Our Solution
                </h4>
                <p className="text-gray-600 mb-6">
                  {activeCase.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-700">
                  Breakthrough Results
                </h4>
                <ul className="space-y-3">
                  {activeCase.results.map((result, index) => (
                    <li 
                      key={index} 
                      className="flex items-start text-gray-600"
                    >
                      <span className={`mr-3 mt-1 w-3 h-3 rounded-full bg-${activeCase.iconColor}-500`}></span>
                      {result}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {activeCase.screenshots.map((screenshot, index) => (
                    <motion.img 
                      key={index}
                      src={screenshot} 
                      alt={`${activeCase.title} Screenshot ${index + 1}`}
                      className="rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseSection;