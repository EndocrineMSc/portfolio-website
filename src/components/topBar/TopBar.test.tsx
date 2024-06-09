// TopBar.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import TopBar from './TopBar';

// Mocking Icon component from '@mdi/react'
vi.mock('@mdi/react', () => ({
  __esModule: true,
  default: ({ path, size }: { path: string; size: number }) => (
    <svg data-path={path} data-size={size} data-testid="icon" />
  ),
}));

describe('TopBar component', () => {
  it('renders the TopBar component', () => {
    render(<TopBar setMenuVisible={() => {}} />);
    expect(screen.getByRole('navigation')).toHaveClass('topbar');
  });

  it('renders the menu button with the Icon component', () => {
    render(<TopBar setMenuVisible={() => {}} />);
    expect(screen.getByRole('button')).toHaveClass('menu-button');
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('calls setMenuVisible when the menu button is clicked', () => {
    const setMenuVisibleMock = vi.fn();
    render(<TopBar setMenuVisible={setMenuVisibleMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(setMenuVisibleMock).toHaveBeenCalled();
  });
});
