import React, { useState, useEffect } from 'react';

// --- Custom SVG Icons ---

const IconTerminal = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const IconServer = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const IconLayout = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const IconCpu = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const IconSparkles = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </svg>
);

// --- Types & Data ---

interface Service {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  tech: string[];
  gradient: string;
  colSpan: string;
  accentColor: string;
}

const services: Service[] = [
  {
    title: 'Full Stack Engineering',
    description: 'Building next-gen scalable applications with cutting-edge architecture. Seamless client-server communication powered by modern frameworks.',
    icon: IconTerminal,
    tech: ['Next.js', 'React', 'Node.js', 'TypeScript'],
    gradient: 'from-cyan-500/30 via-blue-500/20 to-transparent',
    colSpan: 'md:col-span-2',
    accentColor: 'cyan',
  },
  {
    title: 'Backend Systems',
    description: 'Enterprise-grade API architecture with military-level security, blazing-fast performance, and infinite scalability.',
    icon: IconServer,
    tech: ['PostgreSQL', 'Go', 'Redis', 'Docker'],
    gradient: 'from-emerald-500/30 via-teal-500/20 to-transparent',
    colSpan: 'md:col-span-1',
    accentColor: 'emerald',
  },
  {
    title: 'Interactive UI/UX',
    description: 'Award-winning interfaces with micro-interactions that delight. Every pixel crafted for maximum engagement and accessibility.',
    icon: IconLayout,
    tech: ['Tailwind CSS', 'Framer Motion', 'Figma'],
    gradient: 'from-fuchsia-500/30 via-purple-500/20 to-transparent',
    colSpan: 'md:col-span-1',
    accentColor: 'fuchsia',
  },
  {
    title: 'AI & Performance',
    description: 'Harnessing artificial intelligence for next-level features. Lightning-fast load times and SEO perfection guaranteed.',
    icon: IconCpu,
    tech: ['Gemini API', 'Python', 'Analytics'],
    gradient: 'from-orange-500/30 via-amber-500/20 to-transparent',
    colSpan: 'md:col-span-2',
    accentColor: 'orange',
  },
];

// --- Components ---

const BentoCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const Icon = service.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/50 to-neutral-950/90 backdrop-blur-xl border border-white/5 p-8 md:p-10 transition-all duration-700 ${service.colSpan}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      {/* Animated mesh gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute inset-[-2px] bg-gradient-to-r from-${service.accentColor}-500 via-${service.accentColor}-400 to-${service.accentColor}-500 rounded-3xl blur-lg opacity-50`} />
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          {/* Icon with neon glow */}
          <div className="relative">
            <div className={`absolute inset-0 bg-${service.accentColor}-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
            <div className="relative p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          
          {/* Floating number badge */}
          <div className="relative flex items-center justify-center w-10 h-10">
            <div className={`absolute inset-0 bg-${service.accentColor}-500/20 rounded-full blur-md group-hover:scale-150 transition-all duration-500`} />
            <span className="relative text-sm font-bold text-white/40 group-hover:text-white transition-colors duration-300">
              0{index + 1}
            </span>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
          {service.title}
        </h3>
        
        <p className="text-neutral-400 group-hover:text-neutral-300 leading-relaxed mb-8 text-sm md:text-base transition-colors duration-500">
          {service.description}
        </p>

        {/* Tech Stack with neon pills */}
        <div className="mt-auto flex flex-wrap gap-2">
          {service.tech.map((t, i) => (
            <span 
              key={t} 
              className="relative px-4 py-2 text-xs font-semibold text-white/80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white transition-all duration-500"
              style={{
                transitionDelay: `${i * 50}ms`
              }}
            >
              <span className="relative z-10">{t}</span>
              <div className={`absolute inset-0 bg-${service.accentColor}-500/0 group-hover:bg-${service.accentColor}-500/10 rounded-full transition-all duration-500`} />
            </span>
          ))}
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  interface Particle {
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 3
    }));
    setParticles(newParticles);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="service"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: '#0F172Acc' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }}
    >
      {/* Enhanced animated particles with glow */}
      {particles.map(particle => (
        <div key={particle.id}>
          <div
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: 'linear-gradient(135deg, #00B0B9, #00E5FF)',
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.6,
              boxShadow: '0 0 10px rgba(0,176,185,0.5)',
            }}
          />
        </div>
      ))}

      {/* Multiple layered gradient orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0,176,185,0.4) 0%, transparent 70%)',
          top: '5%',
          left: '5%',
          transform: `translate(${mousePos.x * 0.03}%, ${mousePos.y * 0.03}%)`,
          transition: 'transform 1s ease-out',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
          top: '20%',
          right: '10%',
          transform: `translate(${-mousePos.x * 0.02}%, ${mousePos.y * 0.02}%)`,
          transition: 'transform 1s ease-out',
        }}
      />
      <div 
        className="absolute w-[550px] h-[550px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
          bottom: '10%',
          right: '15%',
          transform: `translate(${-mousePos.x * 0.04}%, ${-mousePos.y * 0.04}%)`,
          transition: 'transform 1s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-cyan-500/10 via-cyan-500/10 to-cyan-500/10 backdrop-blur-xl rounded-full border border-white/10">
            <IconSparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs md:text-sm font-bold text-[#00B0B9] bg-clip-text uppercase tracking-wider">
              Technical Arsenal 2025
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Services &{' '}
            <span className="relative inline-block">
              <span className="text-[#00B0B9] bg-clip-text  animate-gradient">
                Expertise
              </span>
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-2xl -z-10" /> */}
            </span>
          </h2>
          
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Transforming complex challenges into elegant solutions through systems thinking 
            and cutting-edge design. Let's build the future together.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {services.map((service, index) => (
            <BentoCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA with magnetic effect */}
        <div className="relative group/cta">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover/cta:blur-2xl transition-all duration-500 opacity-0 group-hover/cta:opacity-100" />
          
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl border border-white/10 group-hover/cta:border-white/20 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left flex-1">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                Ready to Start Something{' '}
                <span className="text-[#00B0B9] bg-clip-text ">
                  Amazing?
                </span>
              </h4>
              <p className="text-neutral-400 text-sm md:text-base">
                Let's collaborate and engineer the perfect solution for your vision.
              </p>
            </div>
            
            <button className="group/btn relative px-8 md:px-10 py-4 bg-[#00B0B9] text-white font-bold text-sm md:text-base rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 whitespace-nowrap">
              <span className="relative z-10 flex items-center gap-2">
                Start Collaboration
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(10px);
          }
          66% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;