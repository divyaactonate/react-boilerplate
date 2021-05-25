import { render, screen } from '@testing-library/react';
import { InputField } from './index';
import { shallow } from 'enzyme';

describe('<InputField />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<InputField />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<InputField />);
    component = screen.getByTestId('InputField');
    expect(component).toBeInTheDocument();
  });
});
