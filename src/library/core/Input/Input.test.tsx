import { render, screen } from '@testing-library/react';
import { Input } from './index';
import { shallow } from 'enzyme';

describe('<Input />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Input />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Input />);
    component = screen.getByTestId('Input');
    expect(component).toBeInTheDocument();
  });
});
