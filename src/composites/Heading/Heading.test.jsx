import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import Heading from './Heading';

describe('Heading component', () => {
  beforeEach(() => {
    render(<Heading />);
  });

  test('renders an img element', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  test('renders an img element with the correct src', () => {
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/src/assets/img/pigeon.png');
  });

  test('renders an h1 element', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('renders an h1 element with the correct text', () => {
    const heading = screen.getByText('Pigeon');
    expect(heading).toBeInTheDocument();
  });
});
