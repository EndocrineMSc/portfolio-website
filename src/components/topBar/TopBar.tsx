import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import './TopBar.css';

const TopBar = ({ setMenuVisible }: { setMenuVisible: () => void }) => {
  return (
    <nav className="topbar">
      <button className="menu-button" onClick={setMenuVisible}>
        <Icon path={mdiMenu} size={2} />
      </button>
    </nav>
  );
};

export default TopBar;
