import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { Text } from 'src/components/Text';

afterEach(() => {
  cleanup();
});

describe('Text', () => {
  it('matches DOM Snapshot', () => {
    const tree = render(<Text />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
