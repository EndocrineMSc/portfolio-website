// ToggleSwitch.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleSwitch from './ToggleSwitch';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
  }),
}));

describe('ToggleSwitch component', () => {
  it('renders the ToggleSwitch component', () => {
    render(<ToggleSwitch />);
    expect(screen.getByAltText('english')).toBeInTheDocument();
    expect(screen.getByAltText('german')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('initially sets the language to English', () => {
    render(<ToggleSwitch />);
    const switchElement = screen.getByRole('button');
    expect(switchElement).toHaveAttribute('data-isenglish', 'true');
  });

  it('toggles the language when the switch is clicked', () => {
    render(<ToggleSwitch />);
    const switchElement = screen.getByRole('button');

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute('data-isenglish', 'false');

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute('data-isenglish', 'true');
  });

  it('sets the language to English when the English flag is clicked', () => {
    render(<ToggleSwitch />);
    const switchElement = screen.getByRole('button');
    const englishFlag = screen.getByAltText('english');

    fireEvent.click(switchElement); // Toggle to German
    fireEvent.click(englishFlag);
    expect(switchElement).toHaveAttribute('data-isenglish', 'true');
  });

  it('sets the language to German when the German flag is clicked', () => {
    render(<ToggleSwitch />);
    const switchElement = screen.getByRole('button');
    const germanFlag = screen.getByAltText('german');

    fireEvent.click(germanFlag);
    expect(switchElement).toHaveAttribute('data-isenglish', 'false');
  });
});
