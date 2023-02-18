import { createStitches, createTheme } from '@stitches/react';
import {
  gray,
  purple,
  red,
  yellow,

  grayDark,
  purpleDark,
  redDark,
  yellowDark,
} from '@radix-ui/colors';

const SYSTEM_FONT_FAMILIES = '"Meiryo UI", "メイリオ", "Meiryo", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "游ゴシック Medium", Yu Gothic Medium, YuGothicM, "游ゴシック体", YuGothic, sans-serif';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...purple,
      ...red,
      ...yellow,
    },
    space: {
      stack: '$3',
      stackSlim: '$2',
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '48px',
      6: '64px',
      7: '96px',
      8: '128px',
      9: '256px',
      10: '512px',
    },
    fontSizes: {
      default: '$3',
      1: '10px',
      2: '12px',
      3: '14px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '256px',
      10: '128px',
    },
    fonts: {
      default: `"Koruri", ${SYSTEM_FONT_FAMILIES}`,
      systemFont: SYSTEM_FONT_FAMILIES,
    },
    fontWeights: {
      thin: 200,
      default: 400,
      bold: 700,
      bolder: 900,
    },
    lineHeights: {
      default: '1.5',
      none: '1',
    },
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '999px',
    },
    shadows: {
      // TODO 作る
    },
    zIndices: {
      // TODO 作る
    },
    transitions: {
      // TODO 作る
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...purpleDark,
    ...redDark,
    ...yellowDark,
  },
});
