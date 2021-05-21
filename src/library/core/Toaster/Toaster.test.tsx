import { render, screen } from '@testing-library/react';
import { Toaster } from './index';
import { shallow } from 'enzyme';

describe('<Toaster />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Toaster />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Toaster />);
    component = screen.getByTestId('Toaster');
    expect(component).toBeInTheDocument();
  });
});
