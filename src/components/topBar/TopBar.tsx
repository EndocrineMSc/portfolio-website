import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import './TopBar.css';

<Icon path={mdiMenu} size={1} />;

const TopBar = ({ setMenuVisible }: { setMenuVisible: () => void }) => {
  return (
    <>
      <div className="topbar">
        <div className="menu-button" onClick={setMenuVisible}>
          <Icon path={mdiMenu} size={2} />
        </div>
      </div>
    </>
  );
};

export default TopBar;
