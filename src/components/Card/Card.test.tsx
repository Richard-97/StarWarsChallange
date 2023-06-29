import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { Card } from 'src/components/Card';
import { Text } from 'src/components/Text';

afterEach(() => {
  cleanup();
});

describe('Card', () => {
  it('matches DOM Snapshot', () => {
    const tree = render(
      <Card data-testId="parent">
        <Text>Test children</Text>
      </Card>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('render children correctly', () => {
    const { getByText } = render(
      <Card data-testId="parent">
        <Text>Test children</Text>
      </Card>
    );

    expect(getByText('Test children')).toBeDefined();
  });
});
