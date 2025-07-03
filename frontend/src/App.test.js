import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World from Frontend!/i);
  expect(linkElement).toBeInTheDocument();
});
