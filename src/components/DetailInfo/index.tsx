import React, { FC } from 'react';
import { Text } from 'src/components/Text';
import { Box, BoxProps } from 'src/components/Box';
import { COLORS, RADIUS, SPACE } from 'src/theme';

interface Props extends BoxProps {
  title: string;
  label: string;
}

export const DetailInfo: FC<Props> = ({ title, label, ...boxProps }) => (
  <Box
    p={SPACE.S}
    background={COLORS.SECONDARY}
    borderRadius={RADIUS.RADIUS_10}
    alignItems="center"
    justifyContent="center"
    {...boxProps}
  >
    <Text color={COLORS.TERTIARY} mb={SPACE.XS} fontWeight="SEMI_BOLD">
      {title}
    </Text>
    <Text color={COLORS.TERTIARY}>{label}</Text>
  </Box>
);
