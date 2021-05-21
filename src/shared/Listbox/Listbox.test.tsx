import { render, screen } from '@testing-library/react';
import Listbox from './index';
import { shallow } from 'enzyme';

describe('<Listbox />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Listbox />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Listbox />);
    component = screen.getByTestId('Listbox');
    expect(component).toBeInTheDocument();
  });
});
