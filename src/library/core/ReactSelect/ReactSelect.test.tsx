import { render, screen } from '@testing-library/react';
import { ReactSelect } from './index';
import { shallow } from 'enzyme';

describe('<ReactSelect />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ReactSelect />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<ReactSelect />);
    component = screen.getByTestId('ReactSelect');
    expect(component).toBeInTheDocument();
  });
});
