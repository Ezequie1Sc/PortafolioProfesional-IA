import { useState, useEffect, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "../../styles/Contact.css";
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiNodedotjs,
  SiPython, SiGit, SiGithub, SiMongodb, SiPostgresql, SiFlutter,
  SiDart, SiFirebase, SiAngular, SiVite
} from "react-icons/si";

const CONTACT_TITLE = "Contacto";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface NotificationState {
  show: boolean;
  type: "success" | "error" | "";
  message: string;
}

// ===== ANIMACIONES DEL HEADER (IGUAL QUE PROJECTS) =====
const titleReveal = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
} as const;

const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
  </svg>
);

// --- NUBE 3D DE TECNOLOGÍAS ---
const techCloudIcons = [
  { icon: <SiJavascript />, className: "javascript", x: -55, y: -65, z: 80, s: 1.15 },
  { icon: <SiTypescript />, className: "typescript", x: 20, y: -80, z: 45, s: 1.05 },
  { icon: <SiHtml5 />, className: "html", x: 78, y: -45, z: 70, s: 1.2 },
  { icon: <SiCss />, className: "css", x: -85, y: -15, z: 20, s: 0.9 },
  { icon: <SiReact />, className: "react", x: -35, y: 20, z: 95, s: 0.95 },
  { icon: <SiNodedotjs />, className: "node", x: 25, y: 35, z: 65, s: 1.15 },
  { icon: <SiPython />, className: "python", x: 88, y: 18, z: 10, s: 0.85 },
  { icon: <SiGit />, className: "git", x: -70, y: 70, z: 55, s: 0.95 },
  { icon: <SiGithub />, className: "github", x: 8, y: 82, z: 20, s: 1.05 },
  { icon: <SiMongodb />, className: "mongodb", x: -95, y: -70, z: -45, s: 0.85 },
  { icon: <SiPostgresql />, className: "postgres", x: 95, y: -78, z: -30, s: 1 },
  { icon: <SiFlutter />, className: "flutter", x: 70, y: 70, z: -40, s: 0.9 },
  { icon: <SiDart />, className: "dart", x: -10, y: -10, z: -85, s: 0.8 },
  { icon: <SiFirebase />, className: "firebase", x: -95, y: 35, z: -65, s: 1.1 },
  { icon: <SiAngular />, className: "angular", x: 40, y: -10, z: -70, s: 0.9 },
  { icon: <SiVite />, className: "vite", x: -20, y: 58, z: -20, s: 0.85 },
];

const TechSphere = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 55;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -55;

    setTilt({ x: y, y: x });
  };

  return (
    <div
      className="tech-cloud-scene"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="tech-cloud"
        style={
          {
            "--tilt-x": `${tilt.x}deg`,
            "--tilt-y": `${tilt.y}deg`,
          } as React.CSSProperties
        }
      >
        {techCloudIcons.map((tech, index) => (
          <span
            key={index}
            className={`cloud-tech-icon ${tech.className}`}
            style={
              {
                "--x": `${tech.x}px`,
                "--y": `${tech.y}px`,
                "--z": `${tech.z}px`,
                "--s": tech.s,
              } as React.CSSProperties
            }
          >
            {tech.icon}
          </span>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    type: "",
    message: "",
  });

  // Refs para el glitch
  const titleRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Mínimo 3 caracteres";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Máximo 50 caracteres";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Solo letras permitidas";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Email inválido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    } else if (formData.subject.trim().length < 4) {
      newErrors.subject = "Mínimo 4 caracteres";
    } else if (formData.subject.trim().length > 80) {
      newErrors.subject = "Máximo 80 caracteres";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mínimo 10 caracteres";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Máximo 1000 caracteres";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: "", message: "" });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!validateForm()) {
      showNotification("error", "Por favor corrige los errores del formulario");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_lr1bbpn",
        "template_04sljbp",
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        "V4cRUy_nas2KUpQWU"
      );

      showNotification("success", "¡Mensaje enviado correctamente! Te responderé pronto.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      showNotification("error", "Error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const messageLength = formData.message.length;
  const messageMaxLength = 1000;

  const fieldState = (field: keyof FormData) => {
    if (!touched[field]) return "";
    return errors[field] ? "has-error" : formData[field] ? "has-success" : "";
  };

  // ===== EFECTO GLITCH DE TEXTO =====
  const scrambleTitle = useCallback((element: HTMLElement) => {
    if (!element) return;
    const finalText = CONTACT_TITLE;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%#$@";

    let frame = 0;
    const totalFrames = 18;

    const interval = window.setInterval(() => {
      const progress = frame / totalFrames;

      element.textContent = finalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";

          if (index < progress * finalText.length) {
            return finalText[index];
          }

          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      frame++;

      if (frame > totalFrames) {
        window.clearInterval(interval);
        element.textContent = finalText;
      }
    }, 28);
  }, []);

  // ===== GLITCH AUTOMÁTICO AL ENTRAR =====
  useEffect(() => {
    const element = titleRef.current;
    const section = sectionRef.current;

    if (!element || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrambleTitle(element);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [scrambleTitle]);

  // ===== GLITCH AL HOVER =====
  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    scrambleTitle(event.currentTarget);
  };

  return (
    <motion.section
      id="contacto"
      className="contact-section"
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="contact-grid-bg" />
      <div className="contact-light-left" />
      <div className="contact-light-right" />

      <div className="contact-container">
        
        {/* === TÍTULO CON GLITCH Y LÍNEA SUPERIOR === */}
        <motion.div
          className="contact-header-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={titleReveal}
        >
          <motion.h2 className="contact-main-title">
            <span
              ref={titleRef}
              className="title-scramble"
              onMouseEnter={handleMouseEnter}
            >
              {CONTACT_TITLE}
            </span>
          </motion.h2>

          <motion.p
            className="contact-subtitle-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            ¿Tienes un proyecto en mente? Hablemos.
          </motion.p>
        </motion.div>

        <div className="contact-layout">
          
          {/* COLUMNA IZQUIERDA - FORMULARIO */}
          <div className="contact-left">
            <div className="contact-form-wrapper">
              
              {/* Título y Subtítulo del formulario */}
              <div className="contact-header">
                <h2 className="contact-title">
                  Cuéntame sobre <span className="title-highlight">tu proyecto</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className={`form-field ${fieldState("name")}`}>
                    <label htmlFor="name" className="field-label">NOMBRE</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tu nombre completo"
                        className="field-input"
                        disabled={loading}
                        autoComplete="name"
                      />
                      {touched.name && !errors.name && formData.name && (
                        <span className="input-icon success-icon"><SuccessIcon /></span>
                      )}
                      {touched.name && errors.name && (
                        <span className="input-icon error-icon"><ErrorIcon /></span>
                      )}
                    </div>
                    {touched.name && errors.name && (
                      <span className="field-error">{errors.name}</span>
                    )}
                  </div>

                  <div className={`form-field ${fieldState("email")}`}>
                    <label htmlFor="email" className="field-label">EMAIL</label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="tu@email.com"
                        className="field-input"
                        disabled={loading}
                        autoComplete="email"
                      />
                      {touched.email && !errors.email && formData.email && (
                        <span className="input-icon success-icon"><SuccessIcon /></span>
                      )}
                      {touched.email && errors.email && (
                        <span className="input-icon error-icon"><ErrorIcon /></span>
                      )}
                    </div>
                    {touched.email && errors.email && (
                      <span className="field-error">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className={`form-field ${fieldState("subject")}`}>
                  <label htmlFor="subject" className="field-label">ASUNTO</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="¿De qué trata tu mensaje?"
                      className="field-input"
                      disabled={loading}
                    />
                    {touched.subject && !errors.subject && formData.subject && (
                      <span className="input-icon success-icon"><SuccessIcon /></span>
                    )}
                    {touched.subject && errors.subject && (
                      <span className="input-icon error-icon"><ErrorIcon /></span>
                    )}
                  </div>
                  {touched.subject && errors.subject && (
                    <span className="field-error">{errors.subject}</span>
                  )}
                </div>

                <div className={`form-field ${fieldState("message")}`}>
                  <label htmlFor="message" className="field-label">MENSAJE</label>
                  <div className="input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Cuéntame sobre tu proyecto, idea o consulta..."
                      rows={5}
                      className="field-textarea"
                      disabled={loading}
                    />
                  </div>
                  <div className="field-footer">
                    {touched.message && errors.message ? (
                      <span className="field-error">{errors.message}</span>
                    ) : (
                      <span />
                    )}
                    <span className="char-counter">{messageLength}/{messageMaxLength}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`submit-button ${loading ? "loading" : ""}`}
                  disabled={loading || !isValid}
                >
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Enviando...
                    </>
                  ) : (
                    <span>ENVIAR MENSAJE</span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* COLUMNA DERECHA - NUBE 3D Y CONTACTO */}
          <div className="contact-right">
            
            {/* Contenedor de la Nube 3D */}
            <div className="contact-globe-card">
              <div className="globe-wrapper">
                <TechSphere />
              </div>

              <div className="invitation-text">
                <p className="invitation-headline">
                  Tienes las <em>ideas</em>, <br />
                  yo tengo las <em>habilidades</em>. <br />
                  <span className="invitation-highlight">¡Trabajemos juntos!</span>
                </p>
              </div>
            </div>

            {/* Enlaces de contacto rápidos */}
            <div className="contact-links-grid">
              
              <a href="mailto:ezequielsc017@gmail.com" className="contact-link">
                <div className="link-icon icon-email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" />
                    <polyline points="22,6 12,13 2,6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="link-content">
                  <span className="link-label">Email</span>
                  <span className="link-value">ezequielsc017@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ezequiel-salazar-194975340/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="link-icon icon-linkedin">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="link-content">
                  <span className="link-label">LinkedIn</span>
                  <span className="link-value">Ezequiel Salazar</span>
                </div>
              </a>

              <a href="https://github.com/Ezequie1Sc" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="link-icon icon-github">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </div>
                <div className="link-content">
                  <span className="link-label">GitHub</span>
                  <span className="link-value">@Ezequie1Sc</span>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {notification.show && (
        <div className={`toast-notification ${notification.type}`}>
          <div className="toast-icon">
            {notification.type === "success" ? <SuccessIcon /> : <ErrorIcon />}
          </div>
          <span className="toast-message">{notification.message}</span>
          <button className="toast-close" onClick={() => setNotification({ show: false, type: "", message: "" })}>
            <CloseIcon />
          </button>
          <div className="toast-progress" />
        </div>
      )}
    </motion.section>
  );
};

export default Contact;