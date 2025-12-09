import React from "react";

interface ProjectCardProps {
  project: any;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden rounded-3xl"
      style={{
        animation: `fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
      }}
    >
      {/* Glassmorphism card */}
      <div className="relative bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/60 backdrop-blur-xl border border-[#00B0B9]/20 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#00B0B9]/60 hover:shadow-2xl hover:shadow-[#00B0B9]/20">
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B0B9]/5 via-transparent to-[#00B0B9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00B0B9] to-[#00d4dd] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        
        <div className="relative">
          {/* Image container with parallax effect */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B0B9]/40 via-[#00B0B9]/20 to-transparent z-10 mix-blend-overlay" />
            
            {project.media_url ? (
              <img 
                src={`http://localhost:5001/uploads/${project.media_url}`} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#00B0B9] via-[#0891b2] to-[#0e7490] flex items-center justify-center">
                <div className="text-8xl font-black text-white/30 transform group-hover:scale-110 transition-transform duration-700">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}
            
            {/* Animated shine effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
          </div>

          {/* Content */}
          <div className="p-6 relative">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-xl font-bold text-[#F1F1F1] group-hover:text-[#00B0B9] transition-colors duration-300 line-clamp-2 flex-1">
                {project.title}
              </h2>
              <svg className="w-6 h-6 text-[#00B0B9] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00B0B9] animate-pulse" />
              <p className="text-[#d1d1d1]/70 font-medium">{project.timeline}</p>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}