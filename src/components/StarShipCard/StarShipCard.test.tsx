import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { StarShipCard } from 'src/components/StarShipCard';

const props = {
  name: 'Test name',
  manufacturer: 'Imperium',
  cost_in_credits: '12432',
  length: '231',
  max_atmosphering_speed: '43423',
  crew: '4234234',
  passengers: '3213423',
  cargo_capacity: '423432',
};

afterEach(() => {
  cleanup();
});

describe('StarShipCard', () => {
  it('matches DOM Snapshot', () => {
    const tree = render(<StarShipCard {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('check `name` prop', () => {
    const { getByText } = render(<StarShipCard {...props} />);

    expect(getByText('Test name')).toBeDefined();
    expect(getByText('Imperium')).toBeDefined();
  });
});
