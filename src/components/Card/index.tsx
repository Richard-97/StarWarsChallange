import React, { FC, ReactNode } from 'react';
import { Box, BoxProps } from 'src/components/Box';
import { BOX_SHADOWS, COLORS, RADIUS, SPACE } from 'src/theme';

interface Props extends BoxProps {
  children: ReactNode;
}

export const Card: FC<Props> = ({ children, ...boxProps }) => (
  <Box
    p={SPACE.M}
    alignItems="center"
    my={SPACE.XS}
    mx={SPACE.S}
    boxShadow={BOX_SHADOWS.CARD}
    borderRadius={RADIUS.RADIUS_10}
    background={COLORS.TERTIARY}
    {...boxProps}
  >
    {children}
  </Box>
);
