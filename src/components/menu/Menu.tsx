import { Link, useLocation } from 'react-router-dom';
import './Menu.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { motion, AnimatePresence } from 'framer-motion';
import { routes } from '../../route';
import { useReducer } from 'react';
import TopBar from '../topBar/TopBar';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const [isVisible, toggleVisible] = useReducer((prev) => !prev, false);
  const location = useLocation();
  const { t } = useTranslation();

  const getHighlightStyle = (link: string) => {
    return location.pathname === link ? 'highlight' : '';
  };

  const transitionDuration = 0.5;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            key="menu"
            initial={{ opacity: 0.5, x: '75%' }}
            animate={{ opacity: 1, x: 0, backgroundColor: '#000' }}
            exit={{ opacity: 0, x: '75%' }}
            transition={{ duration: transitionDuration }}
            className="menu"
          >
            <div className="abort" onClick={toggleVisible}>
              <Icon path={mdiClose} size={2} />
            </div>
            <ul>
              <li onClick={toggleVisible}>
                <Link
                  to={routes.work}
                  className={getHighlightStyle(routes.work)}
                >
                  {t('menu.work')}
                </Link>
              </li>
              <li onClick={toggleVisible}>
                <Link
                  to={routes.about}
                  className={getHighlightStyle(routes.about)}
                >
                  {t('menu.about')}
                </Link>
              </li>
              <li>
                <ToggleSwitch />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <TopBar setMenuVisible={toggleVisible} />
    </>
  );
};

export default Menu;
