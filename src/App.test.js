import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getFlavors } from './data/flavors'

jest.mock('./data/flavors', () => {
  return {
    getFlavors: jest.fn(() => [{
      flavor: "TestFlavor", 
      id: "ice_test_flavor",
      image: require("./images/ice_unselected.png").default
    }]),
  };
});

describe('App component', () => {
  it('renders the ice cream title as expected', () => {
    render(<App />);
    expect(screen.getByText('TestFlavor')).toBeVisible();
  });
  it('renders the ice cream image as expected', () => {
    render(<App />);
    expect(screen.getByRole('img', {name: 'TestFlavor'})).toBeInTheDocument();
  });
  // it('renders the ice cream image url', async () => {
  //   render(<App />);
  //   await waitFor(() => {
  //      expect(screen.getByAltText('Vanilla ice').getAttribute('src')).toEqual('src')
  //  });
  // });
});

