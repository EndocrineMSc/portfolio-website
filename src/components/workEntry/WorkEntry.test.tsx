// WorkEntry.test.tsx
import { render } from '@testing-library/react';
import WorkEntry from './WorkEntry';

vi.mock('framer-motion', () => ({
  ...vi.importActual('framer-motion'),
  motion: {
    div: ({ children }: { children: React.ReactNode }) => (
      <div className="image-wrap">{children}</div>
    ),
  },
}));

describe('WorkEntry component', () => {
  const props = {
    image: 'https://via.placeholder.com/150',
    title: 'Sample Title',
    description: 'Sample Description',
    liveLink: 'https://example.com',
    liveLinkText: 'Learn More',
    gitLink: 'https://example.com',
  };

  it('renders without crashing', () => {
    const { container } = render(<WorkEntry {...props} />);
    expect(container).toBeInTheDocument();
  });

  it('renders the title', () => {
    const { getByText } = render(<WorkEntry {...props} />);
    expect(getByText('Sample Title')).toBeInTheDocument();
  });

  it('renders the image with correct src and alt attributes', () => {
    const { getByAltText } = render(<WorkEntry {...props} />);
    const image = getByAltText('Sample Title');
    expect(image).toHaveAttribute('src', props.image);
  });

  it('renders the description', () => {
    const { getByText } = render(<WorkEntry {...props} />);
    expect(getByText('Sample Description')).toBeInTheDocument();
  });

  it('renders the live link with correct href and text', () => {
    const { getByText } = render(<WorkEntry {...props} />);
    const link = getByText('Learn More');
    expect(link).toHaveAttribute('href', props.liveLink);
  });

  it('renders the git link with correct href and text', () => {
    const { getByText } = render(<WorkEntry {...props} />);
    const link = getByText('GitHub');
    expect(link).toHaveAttribute('href', props.gitLink);
  });
});
