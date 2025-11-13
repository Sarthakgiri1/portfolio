import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Music, Bike, Plane, Gamepad2 } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">

      {/* Animated Background Ball Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Mouse spotlight */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)",
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
        }}
      ></div>

      {/* Main Content */}
      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 animate-spin-slow"></div>

              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 shadow-2xl transform group-hover:scale-110 transition-all duration-700">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-cyan-200 to-blue-200">
                    SG
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-text inline-block">
              SARTHAK GIRIGOSAVI
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/20 rounded-full px-6 py-3 shadow-lg">
              <p className="text-xl text-white/90 font-medium flex items-center gap-2">
                <Sparkles size={20} className="text-cyan-400" />
                B.Tech Computer Science Student
              </p>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-full px-6 py-3 shadow-lg">
              <p className="text-xl text-white/90 font-medium">Web Developer</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Welcome to my portfolio — a creative space showcasing my journey through
            <span className="text-cyan-400 font-semibold"> technology </span> and
            <span className="text-blue-400 font-semibold"> design</span>.
            Every pixel and line of code reflects curiosity, innovation, and a love for learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="group backdrop-blur-xl bg-gradient-to-r from-cyan-500 to-blue-500 border border-cyan-400/50 rounded-full px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2">
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>

            <button className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 font-semibold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          {[
            { label: "Projects", value: "10+" },
            { label: "Skills", value: "15+" },
            { label: "Certificates", value: "3" },
            { label: "Experience", value: "2yr" },
          ].map((stat, index) => (
            <div key={index} className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
