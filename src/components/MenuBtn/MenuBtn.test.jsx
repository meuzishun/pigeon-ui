import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import MenuBtn from './MenuBtn';

describe('MenuBtn component', () => {
  const openClassNames = ['bar1Open', 'bar2Hide', 'bar3Open'];

  test('renders a div container element', () => {
    const { container } = render(<MenuBtn showLinks={true} />);
    expect(container).toBeInTheDocument();
  });

  test('should render without incorrect classNames when showLinks is false', () => {
    const { container } = render(<MenuBtn showLinks={false} />);
    const bars = container.querySelectorAll('[class*="bar"]');

    for (const bar of bars) {
      let openClassNameExists = false;
      for (const className of bar.classList) {
        for (const openClassName of openClassNames) {
          if (className.includes(openClassName)) {
            openClassNameExists = true;
          }
        }
      }
      expect(openClassNameExists).toBe(false);
    }
  });

  test('should render with correct classNames when showLinks is true', () => {
    const { container } = render(<MenuBtn showLinks={true} />);
    const bars = container.querySelectorAll('[class*="bar"]');

    for (const bar of bars) {
      let openClassNameExists = false;
      for (const className of bar.classList) {
        for (const openClassName of openClassNames) {
          if (className.includes(openClassName)) {
            openClassNameExists = true;
          }
        }
      }
      expect(openClassNameExists).toBe(true);
    }
  });
});
