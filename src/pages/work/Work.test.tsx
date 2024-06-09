// Work.test.tsx
import { render, screen } from '@testing-library/react';
import Work from './Work';

vi.mock('../../components/workEntry/WorkEntry', () => ({
  default: () => <div>mocked-entry</div>,
}));

describe('Work component', () => {
  it('renders the headers with correct content', () => {
    render(<Work />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'SEBASTIAN',
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'SCHULZ',
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Web-Developer',
    );
  });

  it('renders at least one WorkEntry components', () => {
    render(<Work />);
    const workEntries = screen.getAllByText('mocked-entry');
    expect(workEntries.length).toBeGreaterThanOrEqual(1);
  });
});
