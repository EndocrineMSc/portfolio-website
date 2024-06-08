import { motion, spring } from 'framer-motion';
import { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isEnglish, setLanguage] = useState(true);

  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };

  const setEnglish = () => {
    setLanguage(true);
  };

  const setGerman = () => {
    setLanguage(false);
  };

  return (
    <div className="switch-container">
      <img
        src="./united-kingdom-flag-icon.svg"
        alt="english"
        onClick={setEnglish}
      />
      <div
        className="switch"
        data-isenglish={isEnglish}
        onClick={toggleLanguage}
      >
        <motion.div className="handle" layout transition={spring}></motion.div>
      </div>
      <img src="./germany-flag-icon.svg" alt="german" onClick={setGerman} />
    </div>
  );
};

export default ToggleSwitch;
