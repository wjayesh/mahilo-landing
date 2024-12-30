import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import UseCaseSection from '../components/UseCaseSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AgentVisualization from '../components/AgentVisualization';
import MahiloCode from '../components/MahiloCode';
import FrameworkIntegrations from '../components/FrameworkIntegrations';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative w-full h-screen">
        <AgentVisualization className="absolute inset-0" />
        <Hero className="relative z-10 text-white" />
      </div>
      <div className="w-full bg-slate-50 py-16">
        <FeatureGrid />
      </div>
      <div className="w-full bg-white py-16">
        <FrameworkIntegrations />
      </div>
      <div className="w-full bg-blue-50 py-16">
        <UseCaseSection />
      </div>
      <div className="w-full bg-slate-50 py-16">
        <MahiloCode />
      </div>
      <Footer />
    </div>
  );
} 