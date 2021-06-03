import { render, screen } from '@testing-library/react';
import { RadioGroup } from './index';
import { shallow } from 'enzyme';

describe('<RadioGroup />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<RadioGroup />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<RadioGroup />);
    component = screen.getByTestId('RadioGroup');
    expect(component).toBeInTheDocument();
  });
});
