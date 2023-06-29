import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { Heading, SubHeading } from 'src/components/Typography';

afterEach(() => {
  cleanup();
});

describe('Typography', () => {
  it('matches DOM Snapshot for Heading', () => {
    const tree = render(<Heading>Test Heading</Heading>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches DOM Snapshot for SubHeading', () => {
    const screen = render(<SubHeading>Test SubHeading</SubHeading>);

    expect(screen).toMatchSnapshot();
  });

  it('check Heading children', () => {
    const { getByText } = render(<Heading>Test Heading</Heading>);

    expect(getByText('Test Heading')).toBeDefined();
  });

  it('check SubHeading children', () => {
    const { getByText } = render(<SubHeading>Test SubHeading</SubHeading>);

    expect(getByText('Test SubHeading')).toBeDefined();
  });
});
