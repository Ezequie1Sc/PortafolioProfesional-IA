import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Certificates from "./components/sections/Certificates";
import Chat from "./components/chatbot/Chat";
import Contact from "./components/sections/Contact";
import Footer from "./components/common/Footer";
import SplashScreen from "./components/SplashScreen/SplashScreen";

import { wakeUpServer } from "./service/healthService";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🟡 false = backend despertando
  // 🟢 true = backend listo
  const [serverReady, setServerReady] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // 🔥 Despierta el backend de Render en segundo plano
    wakeUpServer().then((isReady) => {
      setServerReady(isReady);
    });

    // El portafolio sigue cargando sin esperar al backend
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const section = location.state?.scrollTo;

    if (!section) return;

    requestAnimationFrame(() => {
      document
        .getElementById(section)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  }, [location]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      !darkMode ? "dark" : "light"
    );
  };

  const isChatPage = location.pathname === "/chat";

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen />}
      </AnimatePresence>

      {!loading && (
        <div className="app min-h-screen flex flex-col bg-[#0f172a] text-white font-['Poppins'] overflow-x-hidden">

          {!isChatPage && (
            <Header
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          )}

          <main className={`${isChatPage ? "" : "pt-24"} flex-grow`}>
            <Routes>

              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Projects />
                    <Skills />
                    <Certificates />
                    <Contact />
                  </>
                }
              />

              <Route
                path="/chat"
                element={<Chat serverReady={serverReady} />}
              />

            </Routes>
          </main>

          {!isChatPage && <Footer />}

        </div>
      )}
    </>
  );
}

export default App;