"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { 
  Sun, 
  Moon, 
  User, 
  Briefcase, 
  Award, 
  Mail,
  Code,
  Database,
  Brain,
  Layout,
  Server,
  Zap
} from "lucide-react";

interface DocPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onPanelMouseEnter?: () => void;
  onPanelMouseLeave?: () => void;
}

export default function MacDoc({ isOpen, onClose, onPanelMouseEnter, onPanelMouseLeave }: DocPanelProps) {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("about");
  const [showSubDoc, setShowSubDoc] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Two-stage reveal: the main doc slides in from the right first,
  // then the left sub-doc (quick-nav) slides in shortly after.
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowSubDoc(true), 350);
      return () => clearTimeout(timer);
    }
    setShowSubDoc(false);
    setActiveTab("about");
  }, [isOpen]);

  const skills = [
    { name: "Python", icon: Code, color: "text-blue-400" },
    { name: "JavaScript", icon: Code, color: "text-yellow-400" },
    { name: "TypeScript", icon: Code, color: "text-blue-600" },
    { name: "React", icon: Layout, color: "text-cyan-400" },
    { name: "Next.js", icon: Layout, color: "text-white" },
    { name: "Flask", icon: Server, color: "text-green-400" },
    { name: "Firebase", icon: Database, color: "text-orange-400" },
    { name: "Supabase", icon: Database, color: "text-emerald-400" },
    { name: "OpenAI", icon: Brain, color: "text-purple-400" },
    { name: "Gemini", icon: Brain, color: "text-blue-400" },
    { name: "Computer Vision", icon: Zap, color: "text-pink-400" },
    { name: "Machine Learning", icon: Brain, color: "text-indigo-400" },
  ];

  const certifications = [
    { name: "AI Engineering Specialization", issuer: "DeepLearning.AI", link: "https://drive.google.com" },
    { name: "Full Stack Web Development", issuer: "Meta", link: "https://drive.google.com" },
    { name: "Machine Learning with Python", issuer: "IBM", link: "https://drive.google.com" },
    { name: "Computer Vision Fundamentals", issuer: "OpenCV", link: "https://drive.google.com" },
  ];

  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Main Doc Panel - Right Side Vertical */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            onMouseEnter={onPanelMouseEnter}
            onMouseLeave={onPanelMouseLeave}
            className={`fixed top-0 right-0 h-full w-[400px] ${isMobile ? 'w-full' : 'w-[400px]'} z-50 
              ${theme === 'dark' ? 'bg-[#1a1a2e]' : 'bg-white'} 
              shadow-2xl border-l ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}
          >
            {/* Mac-style window controls */}
            <div className={`flex items-center justify-between p-4 border-b ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                  <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
                  <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
                </div>
                <span className={`ml-4 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Documentation
                </span>
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <div className="flex h-[calc(100%-60px)]">
              {/* Left Navigation - Sub Doc */}
              <motion.div
                initial={false}
                animate={showSubDoc ? { x: 0, opacity: 1 } : { x: -16, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`w-16 flex flex-col items-center py-4 border-r ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'} 
                ${theme === 'dark' ? 'bg-[#16213e]' : 'bg-gray-50'}`}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-3 rounded-lg relative group transition-all duration-200
                      ${activeTab === item.id 
                        ? theme === 'dark' ? 'bg-violet-500/20 text-violet-400' : 'bg-violet-100 text-violet-600'
                        : theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    <item.icon size={20} />
                    <span className="absolute left-full ml-2 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                ))}
              </motion.div>

              {/* Right Content */}
              <div className={`flex-1 p-6 overflow-y-auto ${theme === 'dark' ? 'bg-[#1a1a2e]' : 'bg-white'}`}>
                <AnimatePresence mode="wait">
                  {activeTab === "about" && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        About Me
                      </h2>
                      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                          I'm G S Shrikar, a Full Stack Developer and AI Engineer passionate about 
                          building intelligent products that solve real-world problems.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-violet-500/10' : 'bg-violet-50'}`}>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Experience</p>
                          <p className={`text-lg font-bold ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`}>3+ Years</p>
                        </div>
                        <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-50'}`}>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Projects</p>
                          <p className={`text-lg font-bold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>7+</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "skills" && (
                    <motion.div
                      key="skills"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Skills
                      </h2>
                      <div className="grid grid-cols-2 gap-3">
                        {skills.map((skill) => (
                          <div
                            key={skill.name}
                            className={`p-3 rounded-lg flex items-center gap-2 transition-all duration-200 hover:scale-105
                              ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}
                          >
                            <skill.icon size={16} className={skill.color} />
                            <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "certifications" && (
                    <motion.div
                      key="certifications"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Certifications
                      </h2>
                      <div className="space-y-3">
                        {certifications.map((cert) => (
                          <a
                            key={cert.name}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block p-4 rounded-lg transition-all duration-200 hover:scale-[1.02]
                              ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}
                          >
                            <div className="flex items-center gap-3">
                              <Award size={20} className="text-violet-400" />
                              <div>
                                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                  {cert.name}
                                </p>
                                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {cert.issuer}
                                </p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "projects" && (
                    <motion.div
                      key="projects"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Projects
                      </h2>
                      <div className="space-y-3">
                        <a
                          href="https://vega-ai-3j5u.onrender.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}
                        >
                          <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Vega AI</h3>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>AI Medical Imaging Platform</p>
                        </a>
                        <a
                          href="https://quadra-spice-flow.base44.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}
                        >
                          <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Spice Vault</h3>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Inventory Management System</p>
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "contact" && (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Contact Me
                      </h2>
                      <div className={`p-6 rounded-lg text-center ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                        <Mail size={32} className="mx-auto text-violet-400 mb-3" />
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Let's build something amazing together!
                        </p>
                        <a
                          href="mailto:shrikargs7@gmail.com"
                          className="inline-block mt-4 px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                        >
                          Email Me
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}