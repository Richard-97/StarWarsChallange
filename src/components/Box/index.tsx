import { View } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  display,
  DisplayProps,
  space,
  SpaceProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
  BorderRadiusProps,
  boxShadow,
  BoxShadowProps,
  grid,
  GridProps,
} from 'styled-system';

export interface BoxProps
  extends DisplayProps,
    SpaceProps,
    PositionProps,
    FlexboxProps,
    BackgroundProps,
    LayoutProps,
    BorderProps,
    BoxShadowProps,
    GridProps,
    BorderRadiusProps {}

export const Box = styled(View)<BoxProps>`
  ${compose(display, space, position, flexbox, background, border, layout, boxShadow, grid)}
`;
