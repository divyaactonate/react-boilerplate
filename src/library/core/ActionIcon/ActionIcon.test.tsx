import { render, screen } from '@testing-library/react';
import { ActionIcon } from './index';
import { shallow } from 'enzyme';

describe('<ActionIcon />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ActionIcon />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<ActionIcon />);
    component = screen.getByTestId('ActionIcon');
    expect(component).toBeInTheDocument();
  });
});
