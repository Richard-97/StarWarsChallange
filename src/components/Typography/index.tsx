import styled from 'styled-components';
import { Text } from 'src/components/Text';
import { FONT_SIZES, FONT_WEIGHTS, COLORS } from 'src/theme';

export const Heading = styled(Text)`
  font-size: ${FONT_SIZES.XXL};
  color: ${COLORS.PRIMARY};
  font-weight: ${FONT_WEIGHTS.BOLD};
`;

export const SubHeading = styled(Text)`
  font-size: ${FONT_SIZES.L};
  color: ${COLORS.WHITE};
  font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
`;
