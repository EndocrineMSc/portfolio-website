import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './Menu';

const mockUseLocationValue = {
  pathname: '/work',
  search: '',
  hash: '',
  state: null,
};

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useLocation: vi.fn().mockImplementation(() => {
    return mockUseLocationValue;
  }),
  Link: ({
    to,
    className,
    children,
  }: {
    to: string;
    className?: string;
    children: React.ReactNode;
  }) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
}));

vi.mock('framer-motion', () => ({
  ...vi.importActual('framer-motion'),
  motion: {
    nav: ({ children }: { children: React.ReactNode }) => (
      <nav className="menu">{children}</nav>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

vi.mock('../toggleSwitch/ToggleSwitch', () => ({
  default: () => <div>ToggleSwitch</div>,
}));

describe('Menu component', () => {
  it('renders the TopBar component', () => {
    render(<Menu />);
    expect(screen.getByRole('navigation')).toHaveClass('topbar');
  });

  it('does not display the menu initially', () => {
    render(<Menu />);
    expect(screen.getByRole('navigation')).not.toHaveClass('menu');
  });

  it('toggles the menu visibility when TopBar is clicked', () => {
    render(<Menu />);

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getAllByRole('navigation')[0]).toHaveClass('menu');

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getAllByRole('navigation')[0]).not.toHaveClass('menu');
  });

  it('renders links with correct highlight styles based on location', () => {
    render(<Menu />);

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('WORK')).toHaveClass('highlight');
    expect(screen.getByText('ABOUT')).not.toHaveClass('highlight');
  });

  it('renders the ToggleSwitch component', () => {
    render(<Menu />);

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('ToggleSwitch')).toBeInTheDocument();
  });

  it('closes the menu when the abort icon is clicked', () => {
    render(<Menu />);

    fireEvent.click(screen.getByRole('button'));
    const abortButton = screen
      .getAllByRole('navigation')[0]
      .querySelector('.abort') as HTMLElement;
    fireEvent.click(abortButton);
    expect(screen.queryByRole('navigation')).not.toHaveClass('menu');
  });
});
