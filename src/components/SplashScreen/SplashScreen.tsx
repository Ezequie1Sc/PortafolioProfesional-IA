import { motion } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="splash-noise" />
      <div className="splash-light" />
      
      {/* CORTINA DE SALIDA: AZUL SÓLIDO, ESTILO APPLE */}
      <motion.div
        className="splash-curtain"
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: '-100%' }}
        transition={{
          duration: 1.15,
          ease: [0.83, 0, 0.17, 1], /* Curva de aceleración premium */
        }}
      />

      <motion.div
        className="splash-content"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="splash-logo-wrap"
          initial={{ scale: 0.65, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="splash-orbit" />
          <div className="splash-glow" />

          {/* LOGO ANIMADO SVG */}
          <svg className="draw-logo" viewBox="0 0 700 440" fill="none">
            <defs>
              <linearGradient id="logoGradient" x1="80" y1="400" x2="610" y2="60">
                <stop stopColor="#7c3aed" />
                <stop offset="0.45" stopColor="#2563eb" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>

            <path className="logo-piece piece-1" d="M330 65 H610 L515 115 H250 Z" />
            <path className="logo-piece piece-2" d="M275 170 H560 L470 220 H200 Z" />
            <path className="logo-piece piece-3" d="M190 285 H520 L80 405 Z" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;