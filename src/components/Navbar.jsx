import React from "react";
import { navItems } from "../data/nav";

export default function Navbar({ active, setActive }) {
  return (
    <nav className="backdrop-blur-xl bg-black/30 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 py-4 flex-wrap">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-500 ${
                active === item.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_30px_rgba(34,211,238,0.5)] scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
