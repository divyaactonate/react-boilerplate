import { render, screen } from '@testing-library/react';
import { Paper } from './index';
import { shallow } from 'enzyme';

describe('<Paper />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Paper />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Paper />);
    component = screen.getByTestId('Paper');
    expect(component).toBeInTheDocument();
  });
});
