import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface WaveDividerProps {
  fillColor?: string;
  flipY?: boolean;
  className?: string;
}

const WaveDivider = ({ 
  fillColor = "hsl(var(--background))", 
  flipY = false,
  className = ""
}: WaveDividerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Enhanced parallax effect based on scroll
  const waveOffset = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden ${flipY ? 'rotate-180' : ''} ${className}`}
      style={{ height: '60px', marginTop: flipY ? '-30px' : '-30px', marginBottom: flipY ? '-30px' : '-30px' }}
    >
      <svg
        viewBox="0 0 2880 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-[200%] h-full"
        preserveAspectRatio="none"
        style={{ minWidth: '200%' }}
      >
        <motion.g
          animate={{ x: [0, -1440] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ y: waveOffset }}
        >
          {/* First wave - main */}
          <path
            d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill={fillColor}
          />
          {/* Duplicate for seamless loop */}
          <path
            d="M1440 60L1488 55C1536 50 1632 40 1728 35C1824 30 1920 30 2016 37.5C2112 45 2208 60 2304 67.5C2400 75 2496 75 2592 67.5C2688 60 2784 45 2832 37.5L2880 30V120H2832C2784 120 2688 120 2592 120C2496 120 2400 120 2304 120C2208 120 2112 120 2016 120C1920 120 1824 120 1728 120C1632 120 1536 120 1488 120H1440V60Z"
            fill={fillColor}
          />
        </motion.g>
      </svg>

      {/* Second wave layer - slightly offset for depth */}
      <svg
        viewBox="0 0 2880 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-[200%] h-full opacity-60"
        preserveAspectRatio="none"
        style={{ minWidth: '200%' }}
      >
        <motion.g
          animate={{ x: [0, -1440] }}
          transition={{
            x: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ y: waveOffset }}
        >
          <path
            d="M0 80L48 72.5C96 65 192 50 288 45C384 40 480 45 576 52.5C672 60 768 70 864 75C960 80 1056 80 1152 75C1248 70 1344 60 1392 55L1440 50V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z"
            fill={fillColor}
          />
          <path
            d="M1440 80L1488 72.5C1536 65 1632 50 1728 45C1824 40 1920 45 2016 52.5C2112 60 2208 70 2304 75C2400 80 2496 80 2592 75C2688 70 2784 60 2832 55L2880 50V120H2832C2784 120 2688 120 2592 120C2496 120 2400 120 2304 120C2208 120 2112 120 2016 120C1920 120 1824 120 1728 120C1632 120 1536 120 1488 120H1440V80Z"
            fill={fillColor}
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default WaveDivider;
