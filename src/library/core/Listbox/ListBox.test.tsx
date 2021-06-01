import { render, screen } from '@testing-library/react';
import { ListBox } from './index';
import { shallow } from 'enzyme';

describe('<ListBox />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ListBox />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<ListBox />);
    component = screen.getByTestId('Listbox');
    expect(component).toBeInTheDocument();
  });
});
