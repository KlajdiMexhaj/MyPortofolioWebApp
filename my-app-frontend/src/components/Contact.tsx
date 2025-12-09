import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [focused, setFocused] = useState<Record<string, boolean>>({});

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

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{7,15}$/; // + optional, 7-15 digits

    if (!emailRegex.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(form.phone)) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_mwibk6s",
        "template_8bde12t",
        {
          user_name: form.name,
          user_email: form.email,
          user_phone: form.phone,
          user_message: form.message,
        },
        "HAVFC8bMY6-tGF3Gp"
      )
      .then(
        () => {
          setStatus("Message sent successfully.");
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <>
      <style>{`
        @keyframes float {0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); }}
        @keyframes glow {0%, 100% { opacity: 0.5; } 50% { opacity: 1; }}
        @keyframes slideIn {from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); }}
        .animate-slide-in { animation: slideIn 0.8s ease-out forwards; }
      `}</style>

      <section
      id="contact"
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
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: '#00B0B9',
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
              opacity: 0.4
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 transition-transform duration-1000 ease-out"
          style={{
            backgroundColor: '#00B0B9',
            top: '10%',
            left: '10%',
            transform: `translate(${mousePos.x * 0.02}%, ${mousePos.y * 0.02}%)`
          }}
        />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-transform duration-1000 ease-out"
          style={{
            backgroundColor: '#00B0B9',
            bottom: '10%',
            right: '10%',
            transform: `translate(${-mousePos.x * 0.03}%, ${-mousePos.y * 0.03}%)`
          }}
        />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-semibold tracking-wider">GET IN TOUCH</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400 leading-tight">
              Let's Create
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
              Transform your vision into reality. We're here to make it happen.
            </p>
          </div>

          {/* Card grid */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left info cards */}
            <div className="lg:col-span-2 space-y-4">
              {/* Info card */}
              <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Instant Response</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Get replies within minutes. Our team is always ready to assist you with your needs.
                </p>
              </div>
              {/* Features card */}
              <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/50">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">100% Secure</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  End-to-end encryption ensures your messages and data remain private and protected.
                </p>
              </div>
              {/* Stats card */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-black text-cyan-400 mb-1">24/7</div>
                    <div className="text-white/60 text-sm">Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-cyan-400 mb-1">10k+</div>
                    <div className="text-white/60 text-sm">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-3">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-slate-950/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-10">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-[100px]"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-[100px]"></div>

                  <div className="relative space-y-6">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-white">Send Message</h2>
                    </div>

                    {/* Form inputs */}
{['name','email','phone'].map((field) => {
  const value = form[field as keyof typeof form] as string;
  const isActive = !!focused[field] || value.trim() !== '';

  return (
    <div key={field} className="relative">
      <input
        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
        name={field}
        value={value}
        onChange={handleChange}
        // keep placeholder empty to avoid browser placeholder behavior
        placeholder=""
        onFocus={() => setFocused(prev => ({ ...prev, [field]: true }))}
        onBlur={() => setFocused(prev => ({ ...prev, [field]: false }))}
        className="peer w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl 
                   text-white focus:outline-none focus:border-cyan-400 
                   focus:bg-white/10 transition-all"
      />
      <label
        className={`absolute left-6 pointer-events-none transition-all duration-200 ${
          isActive
            ? 'top-1 text-xs text-cyan-400'
            : 'top-4 text-base text-white/50'
        }`}
      >
        {field === 'name' ? 'Full Name *' : field === 'email' ? 'Email Address *' : 'Phone Number *'}
      </label>
    </div>
  );
})}

{/* Message textarea */}
<div className="relative">
  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    rows={5}
    placeholder=""
    onFocus={() => setFocused(prev => ({ ...prev, message: true }))}
    onBlur={() => setFocused(prev => ({ ...prev, message: false }))}
    className="peer w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl 
               text-white focus:outline-none focus:border-cyan-400 
               focus:bg-white/10 transition-all resize-none"
  />
  <label
    className={`absolute left-6 pointer-events-none transition-all duration-200 ${
      (focused.message || form.message.trim() !== '')
        ? 'top-1 text-xs text-cyan-400'
        : 'top-4 text-base text-white/50'
    }`}
  >
    Your Message *
  </label>
</div>


                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      className="group/btn relative w-full py-4 px-8 rounded-2xl font-bold text-lg text-white overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center justify-center gap-3">
                        <span>Send Message</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>

                    {/* Status */}
                    {status && (
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-sm animate-slide-in">
                        <p className="text-cyan-200 text-center font-medium flex items-center justify-center gap-2">
                          <span className="text-xl">✓</span>
                          {status}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
