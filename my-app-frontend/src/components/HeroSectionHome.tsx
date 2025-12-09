import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    interface Particle {
      id: number;
      x: number;
      y: number;
      delay: number;
      duration: number;
    }
  
  const [particles, setParticles] = useState<Particle[]>([]);
  
    useEffect(() => {
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 2
      }));
      setParticles(newParticles);
    }, []);

  return (
    <section 
    id='home'
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{ backgroundColor: '#0F172Acc' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }}
    >
      {/* Animated particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: '#00B0B9',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            opacity: 0.4
          }}
        />
      ))}

      {/* Gradient orbs with parallax */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 transition-transform duration-1000 ease-out"
        style={{
          backgroundColor: '#00B0B9',
          top: '10%',
          left: '10%',
          transform: `translate(${mousePos.x * 0.02}%, ${mousePos.y * 0.02}%)`
        }}
      />
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-transform duration-1000 ease-out"
        style={{
          backgroundColor: '#00B0B9',
          bottom: '10%',
          right: '10%',
          transform: `translate(${-mousePos.x * 0.03}%, ${-mousePos.y * 0.03}%)`
        }}
      />
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Pill badge with glassmorphism */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 hover:bg-white/10 transition-all duration-300">
          <div className="w-1.5 h-1.5 bg-[#00B0B9] rounded-full shadow-lg shadow-[#00B0B9]/50" />
          <span className="text-sm text-gray-300 font-light">Available for new projects</span>
        </div>

        {/* Main heading with modern gradient */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-tight">
          <span className="font-extralight text-white/90">Hi, I'm</span>
          <br />
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00B0B9] to-cyan-400">
            Klajdi Mexhaj
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer crafting elegant digital experiences with modern technologies
        </p>

        {/* CTA Buttons with bento-style */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl bg-white text-black font-medium overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Minimal tech badges */}
        <div className="flex flex-wrap justify-center gap-3 items-center">
          <span className="text-xs text-white/40 font-light">Working with</span>
          {['React', 'TypeScript', 'Python', 'Tailwind'].map((tech, i) => (
            <React.Fragment key={tech}>
              <span className="text-sm text-white/50 hover:text-[#00B0B9] transition-colors duration-200 font-light cursor-default">
                {tech}
              </span>
              {i < 3 && <span className="text-white/20">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-20 left-20 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;