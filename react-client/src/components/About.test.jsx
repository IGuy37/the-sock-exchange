import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';
import '@testing-library/jest-dom';

describe('About Component', () => {
  test('renders About heading', () => {
    render(<About />);
    const headingElement = screen.getByRole('heading', { name: /about/i });
    expect(headingElement).toBeInTheDocument();
  });
});