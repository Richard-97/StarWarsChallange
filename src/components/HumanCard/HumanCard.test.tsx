import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { HumanCard } from 'src/components/HumanCard';

const props = {
  name: 'Test name',
  height: '190',
  mass: '75',
  gender: 'male',
  birth_year: '1997',
};

afterEach(() => {
  cleanup();
});

describe('HumanCard', () => {
  it('matches DOM Snapshot', () => {
    const tree = render(<HumanCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check `name` prop', () => {
    const { getByText } = render(<HumanCard {...props} />);

    expect(getByText('Test name')).toBeDefined();
  });
});
