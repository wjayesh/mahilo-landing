import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import UseCaseSection from '../components/UseCaseSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AgentVisualization from '../components/AgentVisualization';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative w-full h-screen">
        <AgentVisualization className="absolute inset-0" />
        <Hero className="relative z-10 text-white" />
      </div>
      <FeatureGrid />
      <UseCaseSection />
      <Footer />
    </div>
  );
} 