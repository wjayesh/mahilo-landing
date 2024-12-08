import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AgentDemo = () => {
  const [activeTab, setActiveTab] = useState('code');
  const [terminalMessages, setTerminalMessages] = useState([
    { sender: 'system', text: 'Connecting to Mahilo agent network...' }
  ]);
  const [userInput, setUserInput] = useState('');

  const simulateAgentResponse = (message) => {
    const responses = {
      'hi': "Hello! I'm a research assistant. How can I help you today?",
      'research': "I can help you find relevant information. What topic are you interested in?",
      'data analysis': "I'm ready to analyze your data. Please provide more details.",
      'default': "I'm not sure how to respond to that. Could you be more specific?"
    };

    const matchedResponse = Object.entries(responses)
      .find(([trigger]) => message.toLowerCase().includes(trigger));

    return matchedResponse 
      ? matchedResponse[1] 
      : responses['default'];
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user message
    setTerminalMessages(prev => [
      ...prev, 
      { sender: 'user', text: userInput }
    ]);

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = simulateAgentResponse(userInput);
      setTerminalMessages(prev => [
        ...prev, 
        { sender: 'agent', text: agentResponse }
      ]);
    }, 500);

    setUserInput('');
  };

  const agentDefinitionCode = `
from mahilo import Agent, AgentManager

class ResearchAssistant(Agent):
    def __init__(self):
        super().__init__(
            name="ResearchAssistant",
            description="Helps with research tasks"
        )
    
    def process(self, message):
        if "research" in message.lower():
            return "I'll help you find relevant information!"
        return "How can I assist with research?"
`.trim();

  const serverSetupCode = `
# Create Agent Manager
manager = AgentManager()

# Register Agents
research_agent = ResearchAssistant()
manager.add_agent(research_agent)

# Start WebSocket Server
server = AgentWebSocketServer(
    agent_manager=manager,
    host='localhost',
    port=8765
)
server.run()
`.trim();

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Mahilo Multi-Agent Simulation
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Code & Setup Section */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex mb-4">
              <button 
                onClick={() => setActiveTab('code')}
                className={`
                  px-4 py-2 mr-2 rounded
                  ${activeTab === 'code' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-700 text-gray-300'}
                `}
              >
                Agent Definition
              </button>
              <button 
                onClick={() => setActiveTab('server')}
                className={`
                  px-4 py-2 rounded
                  ${activeTab === 'server' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-700 text-gray-300'}
                `}
              >
                Server Setup
              </button>
            </div>

            <SyntaxHighlighter 
              language="python"
            //   style={nightOwl}
              className="rounded-lg"
            >
              {activeTab === 'code' 
                ? agentDefinitionCode 
                : serverSetupCode}
            </SyntaxHighlighter>
          </div>

          {/* Terminal Simulation */}
          <div className="bg-black rounded-xl p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <Terminal className="mr-2 text-green-400" />
              <h3 className="text-xl font-semibold">
                Agent Network Terminal
              </h3>
            </div>

            {/* Message Scroll Area */}
            <div className="flex-grow overflow-y-auto mb-4 space-y-2 pr-2">
              {terminalMessages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`
                    p-2 rounded max-w-[90%]
                    ${msg.sender === 'user' 
                      ? 'bg-gray-700 self-end ml-auto' 
                      : msg.sender === 'agent' 
                      ? 'bg-green-800 text-green-100' 
                      : 'bg-gray-800 text-gray-300'}
                  `}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex">
              <input 
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Send a message to your agents..."
                className="
                  flex-grow 
                  bg-gray-800 
                  text-white 
                  px-3 py-2 
                  rounded-l-lg 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-green-500
                "
              />
              <button 
                onClick={handleSendMessage}
                className="
                  bg-green-600 
                  text-white 
                  px-4 
                  py-2 
                  rounded-r-lg 
                  hover:bg-green-700 
                  transition-colors
                "
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDemo;