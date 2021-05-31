import { render, screen } from '@testing-library/react';
import { Select } from './index';
import { shallow } from 'enzyme';

describe('<Select />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Select />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Select />);
    component = screen.getByTestId('Select');
    expect(component).toBeInTheDocument();
  });
});
