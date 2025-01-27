import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import Header from './Header';
import { preAuthNavLinks, postAuthNavLinks } from '../../constants/navLinks';

describe('Header component', () => {
  test('renders a header element', () => {
    render(<Header auth={false} />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  describe('renders preAuthNavLinks with', () => {
    beforeEach(() => {
      render(<Header auth={false} />);
    });

    test('the correct text content', () => {
      const links = screen.getAllByRole('link');
      const linksTextContent = [...links].map((link) => link.textContent);
      const preAuthNavLinksTextContent = preAuthNavLinks.map(
        (link) => link.textContent
      );

      expect(
        JSON.stringify(linksTextContent) ===
          JSON.stringify(preAuthNavLinksTextContent)
      ).toBe(true);
    });

    test('the correct hrefs', () => {
      const links = screen.getAllByRole('link');
      const linksHref = [...links].map((link) => link.href.split('/').at(-1));
      const preAuthNavLinksUrls = preAuthNavLinks.map((link) => link.url);

      expect(
        JSON.stringify(linksHref) === JSON.stringify(preAuthNavLinksUrls)
      ).toBe(true);
    });
  });

  describe('renders postAuthNavLinks with', () => {
    beforeEach(() => {
      render(<Header auth={true} />);
    });

    test('the correct text content', () => {
      const links = screen.getAllByRole('link');
      const linksTextContent = [...links].map((link) => link.textContent);
      const postAuthNavLinksTextContent = postAuthNavLinks.map(
        (link) => link.textContent
      );

      expect(
        JSON.stringify(linksTextContent) ===
          JSON.stringify(postAuthNavLinksTextContent)
      ).toBe(true);
    });

    test('the correct hrefs', () => {
      const links = screen.getAllByRole('link');
      const linksTextContent = [...links].map((link) =>
        link.href.split('/').at(-1)
      );
      const postAuthNavLinksUrls = postAuthNavLinks.map((link) => link.url);

      expect(
        JSON.stringify(linksTextContent) ===
          JSON.stringify(postAuthNavLinksUrls)
      ).toBe(true);
    });
  });
});
