import { render, screen } from '@testing-library/react';
import { Dialog } from './index';
import { shallow } from 'enzyme';

describe('<Dialog />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Dialog />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Dialog />);
    component = screen.getByTestId('Dialog');
    expect(component).toBeInTheDocument();
  });
});
