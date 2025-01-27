import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, beforeEach } from 'vitest';
import Nav from './Nav';

describe('Button component', () => {
  const navLinks = [
    { textContent: 'welcome', url: '#home' },
    { textContent: 'register', url: '#home' },
    { textContent: 'login', url: '#home' },
  ];

  beforeEach(() => {
    render(<Nav navLinks={navLinks} />);
  });

  test('renders a nav element', () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  test('renders a list with a className that includes the string "hide" but not "show"', () => {
    const nav = screen.getByRole('navigation');
    const list = nav.querySelector('ul');

    expect(
      [...list.classList].some((className) => className.includes('show'))
    ).toBe(false);

    expect(
      [...list.classList].some((className) => className.includes('hide'))
    ).toBe(true);
  });

  test('renders a list that when clicked has a className that includes the string "show" but not "hide"', async () => {
    const nav = screen.getByRole('navigation');
    const list = nav.querySelector('ul');
    await userEvent.click(nav);

    expect(
      [...list.classList].some((className) => className.includes('show'))
    ).toBe(true);

    expect(
      [...list.classList].some((className) => className.includes('hide'))
    ).toBe(false);
  });
});
