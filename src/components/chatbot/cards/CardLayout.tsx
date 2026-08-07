import "./CardLayout.css";
import { motion } from "framer-motion";
import type { ReactNode } from "react";


interface CardLayoutProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

const CardLayout = ({
  title,
  subtitle,
  children,
  header,
  footer,
}: CardLayoutProps) => {
  return (
    <motion.article
      className="chat-card"
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
    >
      {(header || title) && (
        <header className="chat-card-header">

          <div className="chat-card-gradient" />

          <div className="chat-card-header-content">

            {header}

            {title && (
              <div className="chat-card-title-group">

                <h2>{title}</h2>

                {subtitle && (
                  <span>{subtitle}</span>
                )}

              </div>
            )}

          </div>

        </header>
      )}

      <section className="chat-card-body">
        {children}
      </section>

      {footer && (
        <footer className="chat-card-footer">
          {footer}
        </footer>
      )}
    </motion.article>
  );
};

export default CardLayout;