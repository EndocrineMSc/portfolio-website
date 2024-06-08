import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Menu from '../../components/menu/Menu';
import './App.css';

import { routes } from '../../route';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === routes.root) {
      navigate(routes.work);
    }
  }, []);

  return (
    <div className="app">
      <Menu />
      <Outlet />
    </div>
  );
};

export default App;
