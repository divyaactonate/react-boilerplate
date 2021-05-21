import { render, screen } from '@testing-library/react';
import Switch from './index';
import { shallow } from 'enzyme';

describe('<Switch />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Switch />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Switch />);
    component = screen.getByTestId('Switch');
    expect(component).toBeInTheDocument();
  });
});
