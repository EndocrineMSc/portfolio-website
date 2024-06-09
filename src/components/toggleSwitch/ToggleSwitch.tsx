import { motion, spring } from 'framer-motion';
import { useState } from 'react';
import './ToggleSwitch.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const ToggleSwitch = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setLanguage] = useState(i18n.language === 'en');

  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };

  const setEnglish = () => {
    setLanguage(true);
  };

  const setGerman = () => {
    setLanguage(false);
  };

  useEffect(() => {
    const language = isEnglish ? 'en' : 'de';
    i18n.changeLanguage(language);
  }, [isEnglish]);

  return (
    <div className="switch-container">
      <img
        src="./united-kingdom-flag-icon.svg"
        alt="english"
        onClick={setEnglish}
      />
      <button
        className="switch"
        data-isenglish={isEnglish}
        onClick={toggleLanguage}
      >
        <motion.div className="handle" layout transition={spring}></motion.div>
      </button>
      <img src="./germany-flag-icon.svg" alt="german" onClick={setGerman} />
    </div>
  );
};

export default ToggleSwitch;
