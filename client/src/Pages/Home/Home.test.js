import { render, screen } from '@testing-library/react'
import Home from './Home';

// unit test
describe ('Home component', () => {
  // snapshot test
  test('Should match the snapshot', () => {
    const { container } = render(<Home/>);
    expect(container.firstChild).toMatchSnapshot();
  })
  // assertion test
  test('Should render the headings', () => {
    render(<Home></Home>);
    screen.getByText(/Restaurants/);
  })
})

// integration test


// end-to-end test