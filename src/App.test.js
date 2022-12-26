import { render, screen } from '@testing-library/react';
import App from './electric/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Your future is electric');
  expect(linkElement).toBeInTheDocument();
});
