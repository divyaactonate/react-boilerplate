import { render, screen } from '@testing-library/react';
import { ContextMenu } from './index';
import { shallow } from 'enzyme';

describe('<ContextMenu />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ContextMenu />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<ContextMenu />);
    component = screen.getByTestId('ContextMenu');
    expect(component).toBeInTheDocument();
  });
});
