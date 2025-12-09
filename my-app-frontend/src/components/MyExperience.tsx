import React, { useEffect, useState } from "react";

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const experiences = [
    {
      title: "Full Stack Python Developer",
      company: "DEA1",
      period: "Jan 2024",
      endPeriod: "Present",
      location: "Tirana, Albania",
      status: "active",
      icon: "fa-rocket",
      gradient: "from-cyan-500 to-blue-500",
      responsibilities: [
        "Developed and maintained multiple web applications using Django, React, and PostgreSQL.",
        "Designed and integrated RESTful APIs for high-performance backend systems.",
        "Collaborated with cross-functional teams to optimize system performance and scalability.",
        "Applied Docker and Git workflows for streamlined deployment and version control."
      ],
      stack: ["Django", "React", "PostgreSQL", "Docker", "Git"]
    },
    {
      title: "Full Stack Python Developer",
      company: "Dominusoft",
      period: "Oct 2023",
      endPeriod: "Nov 2023",
      location: "Tirana, Albania",
      status: "completed",
      icon: "fa-layer-group",
      gradient: "from-purple-500 to-pink-500",
      responsibilities: [
        "Delivered two full-stack projects utilizing Django, Flask, and React.js.",
        "Implemented responsive UI and REST API integrations.",
        "Improved code maintainability through modular architecture and documentation."
      ],
      stack: ["Django", "Flask", "React.js", "REST API"]
    }
  ];

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
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <section
        id="experience"
        className="relative overflow-hidden py-24 px-4 sm:px-8"
        style={{ backgroundColor: "#0F172Acc" }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
          });
        }}
      >
        
        {/* PARTICLES */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                backgroundColor: "#00B0B9",
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
                opacity: 0.4
              }}
            />
          ))}
        </div>

        {/* BACKGROUND ORBS */}
        <div
          className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-30 transition-transform duration-1000 ease-out"
          style={{
            backgroundColor: "#00B0B9",
            top: "10%",
            left: "10%",
            transform: `translate(${mousePos.x * 0.02}%, ${mousePos.y * 0.02}%)`
          }}
        />
        <div
          className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 transition-transform duration-1000 ease-out"
          style={{
            backgroundColor: "#00B0B9",
            bottom: "10%",
            right: "10%",
            transform: `translate(${-mousePos.x * 0.03}%, ${-mousePos.y * 0.03}%)`
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center mb-16 sm:mb-20">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6 backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 176, 185, 0.15), rgba(0, 176, 185, 0.05))",
                border: "1px solid rgba(0, 176, 185, 0.3)",
                boxShadow: "0 8px 32px rgba(0, 176, 185, 0.15)"
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#00B0B9" }}
              />
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: "#00B0B9" }}
              >
                Experience
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span style={{ color: "#F1F1F1" }}>Building The</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: "#00B0B9" }}>
                  Future of Web
                </span>
                <div
                  className="absolute bottom-2 left-0 right-0 h-3 opacity-30"
                  style={{ backgroundColor: "#00B0B9", filter: "blur(8px)" }}
                />
              </span>
            </h2>

            <p
              className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#d1d1d1" }}
            >
              Crafting exceptional digital experiences with cutting-edge
              technologies
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* Center Line (Desktop only) */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -ml-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(0, 176, 185, 0.5), transparent)"
              }}
            />

            <div className="space-y-16 lg:space-y-24">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative w-full ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:ml-auto"
                  } lg:w-[calc(50%-2rem)]`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Timeline Node - Mobile friendly */}
                  <div
                    className="absolute top-0 lg:top-8 left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl backdrop-blur-xl transform -translate-y-1/2 rotate-45 transition-all duration-500"
                    style={{
                      [index % 2 === 0 ? "right" : "left"]:
                        index % 2 === 0 ? "-2rem" : "-2rem",
                      background:
                        activeIndex === index
                          ? "linear-gradient(135deg, #00B0B9, #0088FF)"
                          : "rgba(0, 176, 185, 0.2)",
                      border: "2px solid rgba(0, 176, 185, 0.5)",
                      boxShadow:
                        activeIndex === index
                          ? "0 0 40px rgba(0, 176, 185, 0.6)"
                          : "none"
                    }}
                  >
                    <i
                      className={`fas ${exp.icon} text-lg lg:text-xl transform -rotate-45`}
                      style={{ color: "#F1F1F1" }}
                    />
                  </div>

                  {/* CARD */}
                  <div
                    className="relative group cursor-pointer mt-10"
                    style={{
                      animation: "fadeInUp 0.6s ease-out",
                      animationDelay: `${index * 0.2}s`,
                      animationFillMode: "both"
                    }}
                  >
                    <div
                      className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0, 176, 185, 0.3), rgba(0, 136, 255, 0.3))"
                      }}
                    />

                    <div
                      className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                      }}
                    >
                      {/* STATUS BADGE */}
                      <div
                        className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-xl whitespace-nowrap"
                        style={{
                          background:
                            exp.status === "active"
                              ? "linear-gradient(135deg, #00B0B9, #0088FF)"
                              : "linear-gradient(135deg, rgba(139,92,246,0.8), rgba(236,72,153,0.8))",
                          color: "#F1F1F1",
                          boxShadow: "0 4px 20px rgba(0,176,185,0.4)"
                        }}
                      >
                        {exp.status === "active" ? "● Active" : "Completed"}
                      </div>

                      {/* HEADER */}
                      <div className="mb-6">
                        <h3
                          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ color: "#F1F1F1" }}
                        >
                          {exp.title}
                        </h3>

                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="px-4 py-2 rounded-xl font-semibold backdrop-blur-sm"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(0,176,185,0.2), rgba(0,176,185,0.1))",
                              color: "#00B0B9",
                              border: "1px solid rgba(0,176,185,0.3)"
                            }}
                          >
                            {exp.company}
                          </div>
                        </div>

                        {/* META */}
                        <div className="flex flex-wrap gap-3 text-sm">
                          <div
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                            style={{
                              backgroundColor: "rgba(0,176,185,0.1)",
                              color: "#d1d1d1"
                            }}
                          >
                            <i
                              className="far fa-calendar text-xs"
                              style={{ color: "#00B0B9" }}
                            />
                            <span>{exp.period} - {exp.endPeriod}</span>
                          </div>

                          <div
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                            style={{
                              backgroundColor: "rgba(0,176,185,0.1)",
                              color: "#d1d1d1"
                            }}
                          >
                            <i
                              className="fas fa-map-marker-alt text-xs"
                              style={{ color: "#00B0B9" }}
                            />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* DIVIDER */}
                      <div className="h-px mb-6 relative overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{ backgroundColor: "#00B0B9" }}
                        />
                        <div
                          className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, #00B0B9, transparent)"
                          }}
                        />
                      </div>

                      {/* STACK */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(0,176,185,0.15), rgba(0,176,185,0.05))",
                                color: "#00B0B9",
                                border: "1px solid rgba(0,176,185,0.3)"
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* RESPONSIBILITIES */}
                      <div className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <div
                            key={idx}
                            className="flex gap-3 items-start group/item"
                          >
                            <div
                              className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center mt-0.5 backdrop-blur-sm transition-all duration-300 group-hover/item:scale-110"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(0,176,185,0.3), rgba(0,176,185,0.1))",
                                border: "1px solid rgba(0,176,185,0.3)"
                              }}
                            >
                              <i
                                className="fas fa-bolt text-xs"
                                style={{ color: "#00B0B9" }}
                              />
                            </div>
                            <p
                              className="flex-1 text-base leading-relaxed"
                              style={{ color: "#d1d1d1" }}
                            >
                              {resp}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* DECORATION */}
                      <div
                        className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-20 transform translate-x-10 -translate-y-10 sm:translate-x-16 sm:-translate-y-16 blur-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #00B0B9, #0088FF)"
                        }}
                      />
                      <div
                        className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-20 transform -translate-x-10 translate-y-10 sm:-translate-x-16 sm:translate-y-16 blur-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #00B0B9, #0088FF)"
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>
    </>
  );
}
