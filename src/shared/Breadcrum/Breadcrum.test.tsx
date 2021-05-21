import { render, screen } from '@testing-library/react';
import Breadcrum from './index';
import { shallow } from 'enzyme';

describe('<Breadcrum />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Breadcrum />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Breadcrum />);
    component = screen.getByTestId('Breadcrum');
    expect(component).toBeInTheDocument();
  });
});
