import { render, screen } from '@testing-library/react';
import { FolderCard } from './index';
import { shallow } from 'enzyme';

describe('<FolderCard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FolderCard />);
  });

  test('It should mount with enzyme', () => {
    expect(component.length).toBe(1);
  });

  test('It should mount with testing Library', () => {
    render(<FolderCard />);
    component = screen.getByTestId('FolderCard');
    expect(component).toBeInTheDocument();
  });
});
