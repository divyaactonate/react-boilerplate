import { render, screen } from '@testing-library/react';
import { PasswordInput } from './index';
import { shallow } from 'enzyme';

describe('<PasswordInput />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PasswordInput />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<PasswordInput />);
    component = screen.getByTestId('PasswordInput');
    expect(component).toBeInTheDocument();
  });
});
