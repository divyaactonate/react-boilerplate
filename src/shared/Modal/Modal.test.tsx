import { render, screen } from '@testing-library/react';
import Modal from './index';
import { shallow } from 'enzyme';

describe('<Modal />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Modal />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Modal />);
    component = screen.getByTestId('Modal');
    expect(component).toBeInTheDocument();
  });
});
