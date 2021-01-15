import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders the ice cream title as expected', () => {
    render(<App />);
    expect(screen.getByText('Vanilla')).toBeVisible();
  });
  it('renders the ice cream image as expected', () => {
    render(<App />);
    expect(screen.getByRole('img', {name: 'Vanilla'})).toBeInTheDocument();
  });
  // it('renders the ice cream image url', async () => {
  //   render(<App />);
  //   await waitFor(() => {
  //      expect(screen.getByAltText('Vanilla ice').getAttribute('src')).toEqual('src')
  //  });
  // });
});

