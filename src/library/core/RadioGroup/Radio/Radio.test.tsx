import { render, screen } from '@testing-library/react';
import { Radio } from './index';
import { shallow } from 'enzyme';

describe('<Radio />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Radio />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Radio />);
    component = screen.getByTestId('Radio');
    expect(component).toBeInTheDocument();
  });
});
