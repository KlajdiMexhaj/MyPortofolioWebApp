import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://192.168.10.215:5001/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const categoryLabels: any = {
    all: "Featured",
    other: "Miscellaneous"
  };
  // Get unique categories from projects
  const categories = ["all", ...Array.from(new Set(projects.map((p:any) => {
    const c = p.category;
    return typeof c === "string" && c.trim() !== "" ? c : "other";
  })))];

  const filteredProjects = 
    filter === "all" 
      ? projects.slice(0, 3)
      : projects.filter((p: any) => (p.category || "other") === filter);


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
      <div className="min-h-screen bg-[#0F172A] text-white relative">
        
        {/* Subtle animated background */}
<section 
      id="projects"
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







        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          
          {/* Header Section */}
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#00B0B9]/10 border border-[#00B0B9]/20">
              <div className="w-2 h-2 rounded-full bg-[#00B0B9] animate-pulse" />
              <span className="text-[#00B0B9] text-sm font-semibold tracking-wide">
                Portfolio 2025
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
              My Projects
            </h1>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Explore my latest work and creations. Building innovative solutions, one project at a time.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    filter === category
                      ? "bg-[#00B0B9] text-white shadow-lg shadow-[#00B0B9]/20"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-400 text-sm">
              Showing <span className="text-white font-semibold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
            
            {/* View Toggle (Optional) */}
            {/* <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-[#00B0B9] text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div> */}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project: any, index: number) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}

          {/* Footer Stats (Optional) */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00B0B9] mb-1">{projects.length}</div>
                <div className="text-sm text-gray-400">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00B0B9] mb-1">
                  {new Set(projects.map((p: any) => p.technologies_used)).size}
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00B0B9] mb-1">
                  {new Date().getFullYear()}
                </div>
                <div className="text-sm text-gray-400">Latest Work</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00B0B9] mb-1">100%</div>
                <div className="text-sm text-gray-400">Passion</div>
              </div>
            </div>
          </div>

        </div>
        </section>
      </div>

      {/* Detail View Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}