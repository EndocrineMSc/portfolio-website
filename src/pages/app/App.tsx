import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import TopBar from '../../components/topBar/TopBar';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { routes } from '../../route';

type LocationContextType = {
  location: string;
  saveLocation: (newLocation: string) => void;
};

export const LocationContext = createContext<LocationContextType | null>(null);

const App = () => {
  const [contextLocation, setContextLocation] = useState<string>(routes.work);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === routes.root) {
      navigate(routes.work);
    }
  }, []);

  return (
    <LocationContext.Provider
      value={{ location: contextLocation, saveLocation: setContextLocation }}
    >
      {location.pathname !== routes.menu ? <TopBar /> : null}
      <Outlet />
    </LocationContext.Provider>
  );
};

export default App;
