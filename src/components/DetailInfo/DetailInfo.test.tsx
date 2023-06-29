import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { DetailInfo } from 'src/components/DetailInfo';

afterEach(() => {
  cleanup();
});

describe('DetailInfo', () => {
  it('matches DOM Snapshot', () => {
    const tree = render(<DetailInfo title="Weight" label="90" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check `name` prop', () => {
    const { getByText } = render(<DetailInfo title="Weight" label="90" />);

    expect(getByText('Weight')).toBeDefined();
    expect(getByText('90')).toBeDefined();
  });
});
