import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    // Add transition class for smooth theme change
    root.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Initialize on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`
        relative w-16 h-8 rounded-full p-1 transition-all duration-300 ease-in-out
        ${isDark 
          ? 'bg-foreground' 
          : 'bg-secondary border border-border'
        }
        focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background
      `}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {/* Icons container */}
      <div className="absolute inset-1 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun 
          className={`w-4 h-4 transition-opacity duration-300 ${
            isDark ? 'opacity-30' : 'opacity-0'
          } text-background`} 
        />
        <Moon 
          className={`w-4 h-4 transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-30'
          } text-foreground`} 
        />
      </div>

      {/* Sliding circle */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className={`
          w-6 h-6 rounded-full shadow-md transition-colors duration-300
          ${isDark 
            ? 'ml-auto bg-background' 
            : 'mr-auto bg-foreground'
          }
        `}
      />
    </button>
  );
};

export default ThemeToggle;
