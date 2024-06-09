// App.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { routes } from '../../route';

// Mock Menu component
vi.mock('../../components/menu/Menu', () => ({
  __esModule: true,
  default: () => <div>Mocked Menu</div>,
}));

describe('App component', () => {
  it('renders the Menu and Outlet components', () => {
    render(
      <MemoryRouter initialEntries={[routes.root]}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText('Mocked Menu')).toBeInTheDocument();
  });

  it('redirects to /work when on the root path', () => {
    render(
      <MemoryRouter initialEntries={[routes.root]}>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path={routes.work} element={<div>Work Page</div>} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText('Work Page')).toBeInTheDocument();
  });

  it('does not redirect if not on the root path', () => {
    render(
      <MemoryRouter initialEntries={[routes.about]}>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path={routes.about} element={<div>About Page</div>} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText('About Page')).toBeInTheDocument();
  });
});
