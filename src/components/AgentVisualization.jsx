import React, { useEffect, useRef } from 'react';

const AgentVisualization = ({ className }) => {
  const canvasRef = useRef(null);
  
  class Agent {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = 6;
    }

    update(width, height) {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const agents = [];
    const numAgents = 20;
    let animationFrameId;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const init = () => {
      resize();
      agents.length = 0;
      for (let i = 0; i < numAgents; i++) {
        agents.push(new Agent(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
    };

    const drawConnection = (agent1, agent2) => {
      const dx = agent1.x - agent2.x;
      const dy = agent1.y - agent2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 200) {
        ctx.beginPath();
        ctx.moveTo(agent1.x, agent1.y);
        ctx.lineTo(agent2.x, agent2.y);
        ctx.strokeStyle = `rgba(71, 85, 105, ${0.15 - distance / 2000})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first
      for (let i = 0; i < agents.length; i++) {
        for (let j = i + 1; j < agents.length; j++) {
          drawConnection(agents[i], agents[j]);
        }
      }

      // Then draw agents
      agents.forEach(agent => {
        agent.update(canvas.width, canvas.height);
        
        ctx.shadowColor = '#3B82F6';
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        ctx.arc(agent.x, agent.y, agent.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#475569';
        ctx.fill();
        
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ 
        background: 'linear-gradient(to bottom, #1E293B, #0F172A)',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    />
  );
};

export default AgentVisualization; 