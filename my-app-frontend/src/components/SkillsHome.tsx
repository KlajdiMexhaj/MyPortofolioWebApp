import React, { useState, useEffect } from 'react';

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        {
        category: "Backend",
        items: ["Python", "Django", "Flask", "FastAPI", "REST APIs"]
        },
        {
        category: "Frontend",
        items: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind"]
        },
        {
        category: "Database",
        items: ["PostgreSQL", "MySQL", "SQL"]
        },
        {
        category: "DevOps",
        items: ["Git", "Docker"]
        }
    ];


    const allSkills = [
      "Python", "JavaScript", "HTML", "CSS", "Tailwind",
      "Django", "Flask", "FastAPI", "React.js",
      "PostgreSQL", "MySQL", "SQL", "Git", "Docker", "REST APIs"

    ];
      const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
      const [activeTab, setActiveTab] = useState(0);
    interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}
    const [particles, setParticles] = useState<Particle[]>([]);
    
      useEffect(() => {
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 2
        }));
        setParticles(newParticles);
      }, []);

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        <section 
        id='skills'
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
        


        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full" 
                 style={{ backgroundColor: 'rgba(0, 176, 185, 0.1)', border: '1px solid rgba(0, 176, 185, 0.3)' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00B0B9' }}></div>
              <span className="text-sm font-medium" style={{ color: '#00B0B9' }}>TECH STACK</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3" style={{ color: '#F1F1F1' }}>
              Skills & Expertise
            </h2>
            <p className="text-sm md:text-base" style={{ color: '#d1d1d1' }}>
              Full-stack development with modern technologies
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skills.map((skill, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className="px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: activeCategory === index ? '#00B0B9' : 'rgba(0, 176, 185, 0.1)',
                  color: activeCategory === index ? '#1a1a1a' : '#00B0B9',
                  border: `1px solid ${activeCategory === index ? '#00B0B9' : 'rgba(0, 176, 185, 0.3)'}`,
                  boxShadow: activeCategory === index ? '0 0 20px rgba(0, 176, 185, 0.4)' : 'none'
                }}
              >
                {skill.category}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="relative min-h-[200px] mb-12">
            {skills.map((skillGroup, groupIndex) => (
              <div
                key={groupIndex}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeCategory === groupIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-wrap justify-center gap-4">
                  {skillGroup.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="skill-tag group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-110 cursor-pointer"
                      style={{
                        backgroundColor: 'rgba(0, 176, 185, 0.05)',
                        border: '1px solid rgba(0, 176, 185, 0.2)',
                        color: '#F1F1F1',
                        animationDelay: `${itemIndex * 0.1}s`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 176, 185, 0.15)';
                        e.currentTarget.style.borderColor = '#00B0B9';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 176, 185, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 176, 185, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(0, 176, 185, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{ background: 'linear-gradient(45deg, rgba(0, 176, 185, 0.1), transparent)' }}>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Floating Skill Cloud */}
          <div className="relative h-32 md:h-20">
            <div className="absolute inset-0 flex items-center justify-center">
              {allSkills.slice(0, 8).map((skill, index) => {
                const angle = (index / 8) * Math.PI * 2;
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute text-xs md:text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-125 cursor-pointer"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      backgroundColor: 'rgba(0, 176, 185, 0.1)',
                      border: '1px solid rgba(0, 176, 185, 0.3)',
                      color: '#d1d1d1',
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {skill}
                  </div>
                );
              })}
              
              {/* Center icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center relative"
                   style={{ backgroundColor: '#00B0B9', boxShadow: '0 0 40px rgba(0, 176, 185, 0.4)' }}>
                <i className="fas fa-laptop-code text-2xl md:text-3xl" style={{ color: '#1a1a1a' }}></i>
                <div className="absolute inset-0 rounded-full animate-pulse"
                     style={{ border: '2px solid #00B0B9', opacity: 0.5 }}></div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { num: "15+", label: "Technologies" },
              { num: "4", label: "Categories" },
              { num: "Full", label: "Stack" },
              { num: "100%", label: "Passion" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl" 
                   style={{ backgroundColor: 'rgba(0, 176, 185, 0.05)', border: '1px solid rgba(0, 176, 185, 0.2)' }}>
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#00B0B9' }}>
                  {stat.num}
                </div>
                <div className="text-xs md:text-sm" style={{ color: '#d1d1d1' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>

        
    )

}