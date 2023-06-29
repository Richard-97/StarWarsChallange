import React, { FC } from 'react';
import { SwapiPlanet } from 'src/interfaces/swapi';
import { Text } from 'src/components/Text';
import { Card } from 'src/components/Card';
import { Box } from 'src/components/Box';
import { DetailInfo } from 'src/components/DetailInfo';
import { COLORS, SPACE } from 'src/theme';

export const PlanetCard: FC<SwapiPlanet> = ({ name, terrain, climate, gravity, population }) => (
  <Card>
    <Text fontSize="XXL" fontWeight="BOLD" mb={SPACE.M} color={COLORS.PRIMARY}>
      {name}
    </Text>
    <Box flexDirection="row">
      <Box flex={1} mr={SPACE.XS}>
        <DetailInfo title="Terrain" label={terrain} mb={SPACE.S} />
        <DetailInfo title="Climate" label={climate} />
      </Box>
      <Box flex={1} ml={SPACE.XS}>
        <DetailInfo title="Gravity" label={gravity} mb={SPACE.S} />
        <DetailInfo title="Population" label={population} />
      </Box>
    </Box>
  </Card>
);
