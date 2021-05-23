import { render, screen } from '@testing-library/react';
import { Spinner } from './index';
import { shallow } from 'enzyme';

describe('<Spinner />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Spinner />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Spinner />);
    component = screen.getByTestId('Spinner');
    expect(component).toBeInTheDocument();
  });
});
