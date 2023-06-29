import React, { FC } from 'react';
import { SwapiHuman } from 'src/interfaces/swapi';
import { Text } from 'src/components/Text';
import { Card } from 'src/components/Card';
import { Box } from 'src/components/Box';
import { DetailInfo } from 'src/components/DetailInfo';
import { COLORS, SPACE } from 'src/theme';

export const HumanCard: FC<SwapiHuman> = ({ name, height, mass, birth_year, gender }) => (
  <Card>
    <Text fontSize="XXL" fontWeight="BOLD" mb={SPACE.M} color={COLORS.PRIMARY}>
      {name}
    </Text>
    <Box flexDirection="row">
      <Box flex={1} mr={SPACE.XS}>
        <DetailInfo title="Height" label={height} mb={SPACE.S} />
        <DetailInfo title="Weight" label={mass} />
      </Box>
      <Box flex={1} ml={SPACE.XS}>
        <DetailInfo title="Gender" label={gender} mb={SPACE.S} />
        <DetailInfo title="Birth year" label={birth_year} />
      </Box>
    </Box>
  </Card>
);
