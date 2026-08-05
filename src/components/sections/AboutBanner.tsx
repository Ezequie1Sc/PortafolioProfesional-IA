import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiFlutter,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss,
  SiGit,
  SiFigma,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si';
import { FaCode, FaLaptopCode,  FaPalette, FaRocket } from 'react-icons/fa';
import '../../styles/AboutBanner.css';

const techIcons = [
  SiReact,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiFlutter,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss,
  SiGit,
  SiFigma,
  SiPostgresql,
  SiDocker,
];

// === NUBE DE TECNOLOGÍAS INTERACTIVA ===
const TechCloud = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 18 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      className="tech-cloud-interactive"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ rotateX, rotateY }}
    >
      {techIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className={`tech-float tech-float-${index + 1}`}
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3.2 + index * 0.12,
            delay: index * 0.08,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{
            scale: 1.25,
            zIndex: 10,
            filter:
              'drop-shadow(0 0 10px rgba(59,130,246,1)) drop-shadow(0 0 24px rgba(59,130,246,.9))',
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </motion.div>
  );
};

const AboutBanner = () => {
  return (
    <section className="about-scroll-section" id="about">
      <div className="about-sticky">
        <div className="about-section">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2>
              Tecnologías con las que <span>construyo</span>
            </h2>
          </motion.div>

          <div className="about-layout">
            <motion.article
              className="about-card about-card-large"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* --- NUBE INTERACTIVA --- */}
              <TechCloud />

              <div className="about-card-content">
                <h3>
                  Múltiples <span>Tecnologías</span>
                </h3>
                <p>
                  He trabajado con múltiples tecnologías y frameworks para construir
                  aplicaciones escalables y eficientes.
                </p>
              </div>
            </motion.article>

            <div className="about-side-cards">
              <motion.article
                className="about-card about-card-small"
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="about-process">
                  <div>
                    <FaCode />
                  </div>

                  <span className="line-to-laptop"></span>

                  <div className="active laptop-target">
                    <FaLaptopCode />
                  </div>

                  <span className="line-to-design"></span>

                  <div className="design-target">
                    <FaPalette />
                  </div>
                </div>

                <div className="about-card-content">
                  <h3>
                    Desarrollo & <span>Diseño</span>
                  </h3>
                  <p>
                    Desarrollo interfaces limpias, funcionales y enfocadas en una
                    buena experiencia de usuario.
                  </p>
                </div>
              </motion.article>

              {/* --- CARD CON ÍCONO DE COHETE --- */}
              <motion.article
                className="about-card about-card-image"
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="project-card-icon">
                  <FaRocket />
                </div>

                <div className="about-card-content">
                  <h3>
                    Abierto a <span>Proyectos</span>
                  </h3>
                  <p>
                    Abierto a colaborar en proyectos web, apps móviles, dashboards,
                    landing pages y soluciones tecnológicas reales.
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;