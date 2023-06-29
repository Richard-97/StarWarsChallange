import React, { FC } from 'react';
import { SwapiStarShip } from 'src/interfaces/swapi';
import { Card } from 'src/components/Card';
import { Box } from 'src/components/Box';
import { DetailInfo } from 'src/components/DetailInfo';
import { Heading, SubHeading } from 'src/components/Typography';
import { SPACE } from 'src/theme';

export const StarShipCard: FC<SwapiStarShip> = ({
  name,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
}) => (
  <Card>
    <Heading textAlign="center" mb={SPACE.XS}>
      {name}
    </Heading>
    <SubHeading mb={SPACE.M} textAlign="center">
      {manufacturer}
    </SubHeading>
    <Box width="100%">
      <Box flexDirection="row" mb={SPACE.S}>
        <DetailInfo title="Cost" label={cost_in_credits} flex={1} mr={SPACE.XS} />
        <DetailInfo title="Length" label={length} flex={1} ml={SPACE.XS} />
      </Box>
      <Box flexDirection="row" mb={SPACE.S}>
        <DetailInfo title="Max Speed" label={max_atmosphering_speed} flex={1} mr={SPACE.XS} />
        <DetailInfo title="Crew" label={crew} flex={1} ml={SPACE.XS} />
      </Box>
      <Box flexDirection="row" mb={SPACE.S}>
        <DetailInfo title="Passengers" label={passengers} flex={1} mr={SPACE.XS} />
        <DetailInfo title="Capacity" label={cargo_capacity} flex={1} ml={SPACE.XS} />
      </Box>
    </Box>
  </Card>
);
