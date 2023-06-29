import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  textAlign,
  TextAlignProps,
  space,
  SpaceProps,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  flex,
  FlexProps,
  fontFamily,
  FontFamilyProps,
} from 'styled-system';
import { COLORS, FONT_FAMILY, FONT_SIZES, FONT_WEIGHTS } from 'src/theme';

interface TextProps
  extends ColorProps,
    TextAlignProps,
    SpaceProps,
    DisplayProps,
    LayoutProps,
    PositionProps,
    FlexProps,
    FontFamilyProps {
  fontSize?: keyof typeof FONT_SIZES;
  fontWeight?: keyof typeof FONT_WEIGHTS;
}

export const Text = styled.Text<TextProps>`
  ${color};
  ${({ fontSize }) => fontSize && `font-size: ${FONT_SIZES[fontSize]};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${FONT_WEIGHTS[fontWeight]};`}
  ${textAlign};
  ${space};
  ${display};
  ${layout};
  ${position};
  ${flex};
  ${fontFamily};
`;

Text.defaultProps = {
  fontSize: 'M',
  fontWeight: 'NORMAL',
  color: COLORS.BLACK,
  fontFamily: FONT_FAMILY,
};
