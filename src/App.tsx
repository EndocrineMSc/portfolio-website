import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

type LocationContextType = {
  location: string;
  saveLocation: (newLocation: string) => void;
};

export const LocationContext = createContext<LocationContextType | null>(null);

const App = () => {
  const [contextLocation, setContextLocation] = useState<string>('/work');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/work');
    }
  }, []);

  return (
    <LocationContext.Provider
      value={{ location: contextLocation, saveLocation: setContextLocation }}
    >
      {location.pathname !== '/menu' ? <TopBar /> : null}
      <Outlet />
    </LocationContext.Provider>
  );
};

export default App;
