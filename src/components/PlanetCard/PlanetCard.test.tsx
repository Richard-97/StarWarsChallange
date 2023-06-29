import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { PlanetCard } from 'src/components/PlanetCard';

const props = {
  name: 'Test name',
  terrain: 'Sand',
  climate: 'Hot',
  gravity: '3',
  population: '32131',
};

afterEach(() => {
  cleanup();
});

describe('PlanetCard', () => {
  it('matches DOM Snapshot', () => {
    const tree = render(<PlanetCard {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('check `name` prop', () => {
    const { getByText } = render(<PlanetCard {...props} />);

    expect(getByText('Test name')).toBeDefined();
  });
});
