import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50">
      {/* Pale Blue Blob */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Pale Purple Blob */}
      <motion.div
        className="absolute top-[20%] right-[0%] w-[40vw] h-[40vw] bg-purple-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      {/* Pale Yellow Blob */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-yellow-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      
      {/* Noise Texture Overlay for texture (Optional but adds polish) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

export default AnimatedBackground;