import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import NavLinks from './NavLinks';

describe('Button component', () => {
  const props = {
    navLinks: [
      { textContent: 'welcome', url: '#home' },
      { textContent: 'register', url: '#home' },
      { textContent: 'login', url: '#home' },
    ],
    showLinks: true,
  };

  beforeEach(() => {
    render(<NavLinks {...props} />);
  });

  test('renders a ul element', () => {
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('renders the correct number NavLinks', () => {
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(props.navLinks.length);
  });
});
