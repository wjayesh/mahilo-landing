import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Code, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const IntegrationGuide = ({ framework, description, steps, available, exampleLink }) => {
  return (
    <motion.div 
      className="mb-16 p-8 bg-white rounded-2xl shadow-lg scroll-mt-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{framework}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        {available ? (
          <span className="flex items-center gap-2 text-green-600">
            <CheckCircle2 size={20} />
            Available Now
          </span>
        ) : (
          <span className="text-gray-400">Coming Soon</span>
        )}
      </div>

      {available && (
        <>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Integration Steps:</h4>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                    {index + 1}
                  </span>
                  <div className="flex-grow">
                    <p className="text-gray-700">{step.text}</p>
                    {step.code && (
                      <div className="mt-2 rounded-lg overflow-hidden">
                        <SyntaxHighlighter
                          language="python"
                          style={oneDark}
                          customStyle={{
                            margin: 0,
                            padding: '1rem',
                            fontSize: '0.875rem',
                            borderRadius: '0.5rem',
                          }}
                        >
                          {step.code}
                        </SyntaxHighlighter>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <a 
            href={exampleLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Code size={20} />
            View Example Code
            <ArrowRight size={16} />
          </a>
        </>
      )}
    </motion.div>
  );
};

const IntegrationsPage = () => {
  const [activeFramework, setActiveFramework] = useState(null);
  
  const integrations = [
    {
      framework: 'LangGraph',
      description: 'Connect your LangGraph agents to Mahilo for real-time communication and multi-agent collaboration.',
      available: true,
      exampleLink: 'https://github.com/wjayesh/mahilo/blob/main/examples/team_of_agents/langgraph_marketing_agent.py',
      steps: [
        {
          text: 'Add the chat_with_agent tool to your graph\'s ToolNode.',
          code: `# the tool that mahilo provides out-of-the-box
from mahilo.integrations.langgraph.tools import get_chat_with_agent_tool_langgraph

chat_with_agent_tool = get_chat_with_agent_tool_langgraph()
tools = [your_tools, .., chat_with_agent_tool]`
        },
        {
          text: 'Import and initialize the LangGraph adapter with your StateGraph object',
          code: `from mahilo.integrations.langgraph.agent import LangGraphAgent
          
# wrapper class to make your langgraph agent a mahilo agent
marketing_agent = LangGraphAgent(
    langgraph_agent=graph_builder,
    name="MarketingAgent",
    description=marketing_agent_prompt,
    can_contact=[],
    short_description="Marketing agent",
)`
        },
        {
          text: 'Register your agent with a mahilo AgentManager (team)',
          code: `from mahilo.agent_manager import AgentManager

# an agent manager is like a team
team = AgentManager()
team.register_agent(marketing_agent)`
        }
      ]
    },
    {
      framework: 'Pydantic AI',
      description: 'Integrate your Pydantic AI agents with Mahilo to enable cross-framework communication and policy enforcement.',
      available: true,
      exampleLink: 'https://github.com/wjayesh/mahilo/blob/ac7872c8d71bca048560e4883308c696b44ccdd5/examples/team_of_agents/control_plane.py#L30',
      steps: [
        {
          text: 'Use your PydanticAI Agent in mahilo\'s adapter without any changes!',
          code: `from mahilo.integrations.pydanticai.agent import PydanticAIAgent

# wrapper class to make your pydantic agent a mahilo agent
product_agent = PydanticAIAgent(
    pydantic_agent=product_agent,
    name="ProductAgent",
    description=product_agent_prompt,
    can_contact=[],
    short_description="Product agent",
)`
        },
        {
          text: 'Activate your agent with any dependencies',
          code: `# activate the pydantic agent with the right dependencies
product_agent.activate(dependencies=ProductDependencies(product_name="Mahilo", ...))`
        },
        {
            text: 'Register your agent with a mahilo AgentManager (team)',
            code: `from mahilo.agent_manager import AgentManager
  
  # an agent manager is like a team
  team = AgentManager()
  team.register_agent(product_agent)`
          }
      ]
    },
    {
      framework: 'Custom API',
      description: 'Connect any agent through our standardized BaseAgent interface, enabling seamless integration with the mahilo ecosystem.',
      available: true,
      exampleLink: 'https://github.com/wjayesh/mahilo/blob/ac7872c8d71bca048560e4883308c696b44ccdd5/examples/team_of_agents/control_plane.py#L46',
      steps: [
        {
          text: 'Define tools in the OpenAI spec with functions that call your APIs',
          code: `sales_tools = [
    {
        "tool": {
            "type": "function",
            "function": {
                "name": "analyze_lead_sources",
                "description": "Analyze effectiveness of different lead sources",
                "parameters": {}
            }
        },
        "function": analyze_lead_sources,
    },
]`
        },
        {
          text: 'Register your custom agent',
          code: `# the base mahilo agent
sales_agent = BaseAgent(
    name="SalesAgent",
    type="sales_agent",
    description=sales_agent_prompt,
    short_description="Sales agent",
    tools=sales_tools,
)`
        }
      ]
    },
    {
      framework: 'AutoGen',
      description: 'Coming soon: Integration with Microsoft\'s AutoGen framework for sophisticated multi-agent conversations.',
      available: false,
      exampleLink: '',
      steps: []
    },
    {
      framework: 'CrewAI',
      description: 'Coming soon: Support for CrewAI\'s role-based agent collaboration system.',
      available: false,
      exampleLink: '',
      steps: []
    }
  ];

  useEffect(() => {
    // Set up intersection observer for each section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveFramework(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-framework-section]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToFramework = (framework) => {
    const element = document.getElementById(framework.toLowerCase().replace(' ', '-'));
    if (element) {
      const offset = 96; // 24px * 4 to match pt-24
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="flex gap-16">
            {/* Sticky Sidebar Navigation */}
            <div className="w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Frameworks</h2>
                <nav className="space-y-2">
                  {integrations.map((integration) => (
                    <button
                      key={integration.framework}
                      onClick={() => scrollToFramework(integration.framework)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        activeFramework === integration.framework.toLowerCase().replace(' ', '-')
                          ? 'bg-blue-50 text-blue-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{integration.framework}</span>
                        {integration.available ? (
                          <CheckCircle2 size={16} className="text-green-500" />
                        ) : (
                          <span className="text-xs text-gray-400">Soon</span>
                        )}
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow" style={{ maxWidth: 'calc(100% - 320px)' }}>
              <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Framework Integrations
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                  Learn how to connect your agents from different frameworks with Mahilo. Each integration comes with real-time communication capabilities and human oversight features out of the box.
                </p>

                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    id={integration.framework.toLowerCase().replace(' ', '-')}
                    data-framework-section
                  >
                    <IntegrationGuide {...integration} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntegrationsPage; 