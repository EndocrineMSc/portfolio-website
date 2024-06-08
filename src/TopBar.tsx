import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import './TopBar.css';

<Icon path={mdiMenu} size={1} />;

const TopBar = () => {
  return (
    <>
      <div className="topbar">
        <Link className="link" to="/menu">
          <Icon path={mdiMenu} size={2} />
        </Link>
      </div>
    </>
  );
};

export default TopBar;
