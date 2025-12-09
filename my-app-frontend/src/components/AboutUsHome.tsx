import React, { useState, useEffect } from 'react';
import logo from '../assets/KlajdiMexhajCv.JPG'
export default function AboutSection() {
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

  const tabs = ['Story', 'Values', 'Hobbies'];


  return (
    <section 
    id='about'
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








      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          
          {/* Left side - Image with bento-style cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main image card */}
            <div className="relative group">
              <div 
                className="absolute -inset-1 rounded-3xl opacity-75 blur-xl transition-all duration-500 group-hover:opacity-100"
                style={{ 
                  background: `linear-gradient(135deg, #00B0B9 0%, transparent 100%)` 
                }}
              />
              <div className="relative rounded-3xl overflow-hidden border" style={{ borderColor: 'rgba(0, 176, 185, 0.3)' }}>
                <img 
                  src={logo}
                  alt="Python Developer"
                  className="w-full h-[600px] object-cover"
                />
                {/* Replace with your image or use this placeholder: */}
                {/* <div className="w-full h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 rounded-full mx-auto mb-4" style={{ backgroundColor: '#00B0B9' }}></div>
                    <p className="text-xl" style={{ color: '#d1d1d1' }}>Your Image</p>
                  </div>
                </div> */}
                
                {/* Overlay with name */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00B0B9' }}></div>
                    <span className="text-xs font-medium" style={{ color: '#00B0B9' }}>Available for work</span>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#F1F1F1' }}>Your Name</h3>
                  <p className="text-sm" style={{ color: '#d1d1d1' }}>Full Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Bento grid stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '5+', label: 'Years' },
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="relative p-4 rounded-2xl border backdrop-blur-sm group hover:scale-105 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(0, 176, 185, 0.05)',
                    borderColor: 'rgba(0, 176, 185, 0.2)'
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{
                    background: 'radial-gradient(circle at center, rgba(0, 176, 185, 0.15), transparent 70%)'
                  }}/>
                  <div className="relative">
                    <div className="mb-2" style={{ color: '#00B0B9' }}></div>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#F1F1F1' }}>{stat.value}</div>
                    <div className="text-xs" style={{ color: '#d1d1d1' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border backdrop-blur-sm" style={{
                backgroundColor: 'rgba(0, 176, 185, 0.1)',
                borderColor: 'rgba(0, 176, 185, 0.3)'
              }}>
                {/* <Zap className="w-4 h-4" style={{ color: '#00B0B9' }} /> */}
                <span className="text-sm font-semibold" style={{ color: '#00B0B9' }}>ABOUT ME</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span style={{ color: '#F1F1F1' }}>Building the </span>
                <span className="relative inline-block">
                  <span style={{ color: '#00B0B9' }}>Future</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 opacity-30" style={{ backgroundColor: '#00B0B9' }}></div>
                </span>
                <br />
                <span style={{ color: '#F1F1F1' }}>One Line at a Time</span>
              </h2>
            </div>

            {/* Tab navigation */}
            <div className="flex gap-2 border-b pb-4" style={{ borderColor: 'rgba(0, 176, 185, 0.2)' }}>
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className="px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: activeTab === i ? 'rgba(0, 176, 185, 0.15)' : 'transparent',
                    color: activeTab === i ? '#00B0B9' : '#d1d1d1',
                    border: activeTab === i ? '1px solid rgba(0, 176, 185, 0.3)' : '1px solid transparent'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[300px]">
              {activeTab === 0 && (
                <div className="space-y-4 animate-fadeIn text-lg leading-relaxed" style={{ color: '#d1d1d1' }}>
                  <p>
                   I’m a Full Stack Developer with a strong passion for building efficient, scalable web applications. I enjoy both front-end and back-end development, and I take pride in writing clean, optimized code that delivers great user experiences.
                  </p>
                  <p>
                    With a focus on problem-solving and continuous improvement, I strive to create solutions that not only meet technical requirements but also have a lasting impact.

As a person, I’m organized, reliable, and always eager to collaborate with others. I believe in clear communication, respect for diverse ideas, and maintaining a positive, solution-oriented approach to challenges.
                  </p>
                  <p>
                    Always eager to learn and improve, I stay current with industry trends and new technologies, and I’m excited about the opportunity to tackle new challenges and build software that has a lasting impact.
                  </p>
                </div>
              )}

{activeTab === 2 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
    {[
      {
        title: "Sports",
        items: ["Volleyball", "Beach Volleyball", "Cycling", "Fitness & Physical Activity"],
      },
      {
        title: "Fitness & Movement",
        items: ["Yoga", "Dancing"],
      },
      {
        title: "Arts & Creativity",
        items: ["Drawing", "Painting", "Anime & Manga", "Music Appreciation", "Singing"],
      },
      {
        title: "Travel & Exploration",
        items: ["Travelling", "Beach Activities"],
      },
      {
        title: "Intellectual & Learning",
        items: [
          "Reading & Learning",
          "Science Enthusiast",
          "Coding/Programming",
          "Web Development",
          "Botany",
        ],
      },
      {
        title: "Lifestyle & Social",
        items: [
          "Fashion & Style",
          "Socializing & Event Planning",
          "Cooking & Culinary Arts",
          "Home Renovation & DIY Projects",
          "Organization & Cleaning",
          "Pet Care & Animal Lover",
        ],
      },
    ].map((group, index) => (
      <div
        key={index}
        className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
                   shadow-lg shadow-[#00B0B9]/10 hover:shadow-[#00B0B9]/30 
                   transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02]"
      >
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#00B0B9] to-[#06d6a0] bg-clip-text text-transparent">
          {group.title}
        </h3>
        <ul className="space-y-2">
          {group.items.map((item, i) => (
            <li
              key={i}
              className="text-[#E5E5E5] flex items-center gap-2 text-sm font-medium 
                         hover:text-[#00B0B9] transition-colors duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B0B9] opacity-70"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)}



              {activeTab === 1 && (
                <div className="grid grid-cols-2 gap-4 animate-fadeIn">
                  {[
                    { title: 'Quality First', desc: 'Every line of code matters' },
                    { title: 'Fast Delivery', desc: 'Efficient without compromise' },
                    { title: 'Innovation', desc: 'Always pushing boundaries' },
                    { title: 'Clean Code', desc: 'Readable and maintainable' }
                  ].map((value, i) => (
                    <div 
                      key={i}
                      className="p-6 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(0, 176, 185, 0.05)',
                        borderColor: 'rgba(0, 176, 185, 0.2)'
                      }}
                    >
                      <div className="mb-3" style={{ color: '#00B0B9' }}></div>
                      <h4 className="font-bold mb-2" style={{ color: '#F1F1F1' }}>{value.title}</h4>
                      <p className="text-sm" style={{ color: '#d1d1d1' }}>{value.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: '#00B0B9',
                  color: '#0F172Acc',
                  boxShadow: '0 0 30px rgba(0, 176, 185, 0.3)'
                }}
              >
                <span>Get In Touch</span>
              </a>

              <a
                href="/KlajdiMexhaj-CV.pdf"
                target="_blank"
                className="px-8 py-4 rounded-full font-bold text-lg border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: '#00B0B9',
                  color: '#00B0B9',
                  backgroundColor: 'transparent'
                }}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}