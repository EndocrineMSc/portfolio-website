import About from './About';
import { render, screen } from '@testing-library/react';

describe('About page', () => {
  it('renders without crashing'),
    () => {
      render(<About />);
      expect(screen.getByRole('div')).toBeInTheDocument();
    };

  it('displays the correct header'),
    () => {
      render(<About />);
      expect(screen.getByText(/About/i)).toBeInTheDocument();
    };
});
