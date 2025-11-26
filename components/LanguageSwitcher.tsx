"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en" as const, name: "English", nativeName: "EN" },
    { code: "fa" as const, name: "فارسی", nativeName: "FA" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg border border-green-500/30 hover:border-green-500 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group"
      >
        <Languages className="w-5 h-5 text-green-500 group-hover:text-green-400 transition-colors" />
        <span className="text-white font-orbitron text-sm tracking-wider">
          {currentLang?.nativeName}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-green-500"
        >
          ▼
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 glass-card rounded-lg border border-green-500/30 overflow-hidden z-50 min-w-[160px] shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    backgroundColor: "rgba(34, 197, 94, 0.15)",
                    x: 5,
                  }}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 flex items-center justify-between transition-all duration-300 ${
                    language === lang.code 
                      ? "bg-green-500/20 text-green-400 border-l-2 border-green-500" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="font-orbitron text-sm tracking-wide">{lang.nativeName}</span>
                  <span className="text-xs opacity-70">{lang.name}</span>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-2 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
