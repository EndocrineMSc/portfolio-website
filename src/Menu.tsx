import './Work.css';
import { Link } from 'react-router-dom';
import './Menu.css';
import { useContext } from 'react';
import { LocationContext } from './App';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const context = useContext(LocationContext);
  const location = context?.location;
  const saveLocation = context?.saveLocation;

  const getHighlightStyle = (link: string) => {
    return link === location ? 'highlight' : '';
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;
    if (saveLocation) saveLocation(target.pathname);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0, backgroundColor: '#000' }}
        exit={{ opacity: 0, x: 200 }}
      >
        <Link to={location ? location : '/work'} className="abort">
          <Icon path={mdiClose} size={2} />
        </Link>
        <ul>
          <li>
            <Link
              to="/work"
              className={getHighlightStyle('/work')}
              onClick={handleClick}
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={getHighlightStyle('/about')}
              onClick={handleClick}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
