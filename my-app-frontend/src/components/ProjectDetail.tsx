import React, { useState } from "react";

interface ProjectDetailProps {
  project: any;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  if (!project) return null;

  return (
    <>
      {/* Simple Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* Main Content */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="w-full max-w-6xl max-h-[95vh] bg-[#0F172A] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-700">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-[#0F172A]">
            <h1 className="text-3xl font-bold text-white">
              {project.title}
            </h1>
            <button
              onClick={handleClose}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* LEFT: Image Section */}
              <div className="bg-[#1E293B] p-8 flex items-center justify-center min-h-[400px] md:min-h-full">
                {project.media_url ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={`http://localhost:5001/uploads/${project.media_url}`}
                      alt={project.title}
                      className={`max-w-full max-h-[600px] object-contain rounded-lg shadow-lg transition-opacity duration-500 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                ) : (
                  <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-[#00B0B9]/20 to-[#00B0B9]/40 rounded-lg">
                    <div className="text-8xl font-bold text-[#00B0B9]/50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT: Information Section */}
              <div className="p-8 space-y-8 bg-[#0F172A]">
                
                {/* Project Meta */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00B0B9]"></div>
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Project Details</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-200 font-medium">{project.timeline}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-200 font-medium">{project.role}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00B0B9]"></div>
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Description</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00B0B9]"></div>
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies Used</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies_used.split(",").map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-[#00B0B9]/10 text-[#00B0B9] rounded-lg text-sm font-medium border border-[#00B0B9]/30"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link Button */}
                {project.links && (
                  <div className="pt-4">
                    <a
                      href={project.links}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B0B9] hover:bg-[#00B0B9]/90 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      <span>View Live Project</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}