import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  const props = {
    type: 'button',
    textContent: 'test',
    clickHandler: vi.fn(),
    classNames: ['btn'],
  };

  beforeEach(() => {
    render(<Button {...props} />);
  });

  test('renders a button element', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('renders a button element with the correct text content', () => {
    const button = screen.getByText(props.textContent);
    expect(button).toBeInTheDocument();
  });

  test('invokes callback function on click', async () => {
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(props.clickHandler).toHaveBeenCalled();
  });
});
