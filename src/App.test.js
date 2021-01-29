import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Repositories header', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Repositories/i);
  expect(linkElement).toBeInTheDocument();
});
