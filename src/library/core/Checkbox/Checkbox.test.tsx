import { render, screen } from '@testing-library/react';
import { Checkbox } from './index';
import { shallow } from 'enzyme';

describe('<Checkbox />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Checkbox />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Checkbox />);
    component = screen.getByTestId('Checkbox');
    expect(component).toBeInTheDocument();
  });
});
