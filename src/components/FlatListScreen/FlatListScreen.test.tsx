import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { FlatListScreen } from 'src/components/FlatListScreen';
import { HumanCard } from 'src/components/HumanCard';

const MOCKED_DATA = [
  { id: 1, name: 'John', mass: '74', height: '178', birth_year: '112BBY', gender: 'male' },
  { id: 2, name: 'Peter', mass: '86', height: '182', birth_year: '111BBY', gender: 'n/a' },
  { id: 3, name: 'Marco', mass: '89', height: '171', birth_year: '114BBY', gender: 'female' },
];

afterEach(() => {
  cleanup();
});

describe('FlatListScreen', () => {
  const mockFn = jest.fn();

  it('matches DOM Snapshot', () => {
    const tree = render(
      <FlatListScreen
        isLoading={true}
        data={MOCKED_DATA}
        noDataLabel="No data"
        canFetchMore={false}
        itemRenderer={({ item: { id, ...props } }) => <HumanCard key={id} {...props} />}
        onEndReached={async () => {
          mockFn();
        }}
        refetch={mockFn}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('render children correctly', () => {
    const { getByText } = render(
      <FlatListScreen
        isLoading={true}
        data={MOCKED_DATA}
        noDataLabel="No data"
        canFetchMore={false}
        itemRenderer={({ item: { id, ...props } }) => <HumanCard key={id} {...props} />}
        onEndReached={async () => {
          mockFn();
        }}
        refetch={mockFn}
      />
    );

    expect(getByText(MOCKED_DATA[0].name)).toBeDefined();
    expect(getByText(MOCKED_DATA[1].name)).toBeDefined();
    expect(getByText(MOCKED_DATA[2].name)).toBeDefined();
  });
});
