import { render, screen } from '@testing-library/react';
import Button from './index';
import { shallow } from 'enzyme';

describe('<Button />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Button />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Button />);
    component = screen.getByTestId('Button');
    expect(component).toBeInTheDocument();
  });
});
