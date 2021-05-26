import { render, screen } from '@testing-library/react';
import { Badge } from './index';
import { shallow } from 'enzyme';

describe('<Badge />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Badge />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Badge />);
    component = screen.getByTestId('Badge');
    expect(component).toBeInTheDocument();
  });
});
