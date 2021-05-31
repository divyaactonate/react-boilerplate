import { render, screen } from '@testing-library/react';
import { ReportCard as Card } from './index';
import { shallow } from 'enzyme';

describe('<Card />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Card />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<Card />);
    component = screen.getByTestId('Card');
    expect(component).toBeInTheDocument();
  });
});
