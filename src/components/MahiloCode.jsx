import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Terminal, Code, Server, Network, Play } from 'lucide-react';

const SETUP_STEPS = [
  {
    id: 'define-agents',    
    title: 'Define Agents',
    description: 'Use the BaseAgent class or create custom agent classes',
    codeLines: {
      start: 5,
      end: 14
    },
    icon: <Code className="text-indigo-500" />
  },
  {
    id: 'create-manager',
    title: 'Create Agent Manager',
    description: 'Add agents to the AgentManager. Think of it as a team of agents',
    codeLines: {
      start: 16,
      end: 19
    },
    icon: <Network className="text-green-500" />
  },
  {
    id: 'start-server',
    title: 'Start WebSocket Server',
    description: 'Create and run the AgentWebSocketServer',
    codeLines: {
      start: 21,
      end: 24
    },
    icon: <Server className="text-blue-500" />
  }
];

const FULL_CODE = `
from mahilo.agent import BaseAgent
from mahilo.agent_manager import AgentManager
from mahilo.server import ServerManager

class BuyerAgent(BaseAgent):
    def __init__(self, name, preferences):
        super().__init__(
            name=name,
            description=PROMPT + preferences
        )
    ...

buyer_agent = BuyerAgent(name="BuyerAgentJayesh", preferences="I'm looking for a house in Koramangala")
seller_agent = BaseAgent(name="SellerAgent", description=SELLER_AGENT_PROMPT)

# Create Agent Manager
manager = AgentManager()
manager.register_agent(seller_agent)
manager.register_agent(buyer_agent)

# initialize the server manager
server = ServerManager(manager)
# Start WebSocket Server
server.run()
`.trim();

const TERMINAL_SEQUENCE = [
  { type: 'command', text: '$ python client.py --agent-name buyer_agent' },
  { type: 'response', text: 'Connecting to ws://localhost:8000/ws/buyer_agent...' },
  { type: 'response', text: 'Connected successfully!' },
  { type: 'message', text: 'You: Hello, can you show me some houses?' },
  { type: 'message', text: "buyer_agent: I'll scan the market for you!" },
  { type: 'message', text: 'You: What price range are you looking at?' },
  { type: 'message', text: 'buyer_agent: Based on preferences, searching for properties between 1-1.5Cr in Koramangala' }
];

const TerminalSimulation = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const addMessage = () => {
      if (currentIndex < TERMINAL_SEQUENCE.length) {
        setMessages(prev => [...prev, TERMINAL_SEQUENCE[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Reset after a delay when sequence is complete
        setTimeout(() => {
          setMessages([]);
          setCurrentIndex(0);
        }, 2000);
      }
    };

    const timer = setTimeout(() => {
      addMessage();
    }, getDelay(currentIndex));

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Helper function to get varying delays based on message type
  const getDelay = (index) => {
    const msg = TERMINAL_SEQUENCE[index];
    if (!msg) return 2000; // Default delay
    
    switch (msg.type) {
      case 'command':
        return 1000;
      case 'response':
        return 800;
      case 'message':
        return 1500;
      default:
        return 1000;
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono p-6 rounded-lg">
      <div className="overflow-y-auto max-h-72">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`
              mb-2 
              ${msg.type === 'command' ? 'text-yellow-400' : 
                msg.type === 'response' ? 'text-green-300' : 
                'text-white'}
            `}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const MahiloSetupWalkthrough = () => {
  const [activeStep, setActiveStep] = useState(SETUP_STEPS[0]);

  return (
    <div id="setup" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Build Your Multi-Agent System
        </h2>

        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Steps Sidebar */}
          <div className="space-y-4">
            {SETUP_STEPS.map((step) => (
              <motion.div
                key={step.id}
                onClick={() => setActiveStep(step)}
                className={`
                  cursor-pointer p-4 rounded-lg 
                  flex items-center 
                  ${activeStep.id === step.id 
                    ? 'bg-indigo-100 border-2 border-indigo-300' 
                    : 'bg-white hover:bg-gray-100'
                  }
                  shadow-md transition-all
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {step.icon}
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code View */}
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <div className="p-6">
              <SyntaxHighlighter 
                language="python"
                style={nightOwl}
                showLineNumbers
                wrapLines={true}
                lineProps={(lineNumber) => {
                  const style = {
                    display: 'block',
                    width: '100%',
                  };
                  if (
                    lineNumber >= activeStep.codeLines.start && 
                    lineNumber <= activeStep.codeLines.end
                  ) {
                    style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
                    style.borderLeft = '3px solid rgb(99, 102, 241)';
                    style.paddingLeft = '1rem';
                  }
                  return { style };
                }}
                className="rounded-lg"
              >
                {FULL_CODE}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* Terminal Simulation Section */}
        <div className="mt-12 bg-gray-100 rounded-xl p-8">
          <div className="flex items-center mb-4">
            <Terminal className="mr-2 text-gray-700" />
            <h3 className="text-2xl font-bold">Client Connection Simulation</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Connect Client</h4>
              <code className="bg-gray-300 p-2 rounded">
                $ python client.py --agent-name buyer_agent
              </code>
              <p className="text-sm text-gray-600 mt-2">
                Connects to the mahilo WebSocket server for the buyer_agent and starts interaction
              </p>
            </div>
            <TerminalSimulation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MahiloSetupWalkthrough;