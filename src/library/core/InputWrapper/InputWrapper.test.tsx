import { render, screen } from '@testing-library/react';
import { InputWrapper } from './index';
import { shallow } from 'enzyme';

describe('<InputWrapper />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<InputWrapper />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<InputWrapper />);
    component = screen.getByTestId('InputWrapper');
    expect(component).toBeInTheDocument();
  });
});
