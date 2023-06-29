import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { Spinner } from 'src/components/Spinner';

afterEach(() => {
  cleanup();
});

describe('Spinner', () => {
  it('matches DOM Snapshot', () => {
    const tree = render(<Spinner />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
