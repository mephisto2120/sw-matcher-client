import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Found persons header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Found persons/i);
  expect(linkElement).toBeInTheDocument();
});
