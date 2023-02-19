import { createStitches, createTheme } from '@stitches/react';
import {
  gray,
  violet,
  red,
  yellow,

  grayDark,
  violetDark,
  redDark,
  yellowDark
} from '@radix-ui/colors';

const SYSTEM_FONT_FAMILIES = '"Meiryo UI", "メイリオ", "Meiryo", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "游ゴシック Medium", Yu Gothic Medium, YuGothicM, "游ゴシック体", YuGothic, sans-serif';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      bg: '$primary2',
      fg: '$gray12',
      dimmedFg: '$gray11',
      primaryBg: '$primary',
      divider: '$gray6',

      uiBg: '$gray3',
      uiHoverBg: '$gray4',
      uiActiveBg: '$gray5',
      uiFg: '$gray11',
      uiBorder: '$gray7',
      uiHoverBorder: '$gray8',
      uiFocusBorder: '$primary7',
      uiPrimaryBg: '$primary3',
      uiPrimaryHoverBg: '$primary4',
      uiPrimaryActiveBg: '$primary5',
      uiPrimaryFg: '$primary11',
      uiPrimaryBorder: '$primary7',
      uiPrimaryHoverBorder: '$primary8',
      uiPrimaryFocusBorder: '$primary7',
      uiDangerBg: '$danger3',
      uiDangerHoverBg: '$danger4',
      uiDangerActiveBg: '$danger5',
      uiDangerFg: '$danger11',
      uiDangerBorder: '$danger7',
      uiDangerHoverBorder: '$danger8',
      uiDangerFocusBorder: '$danger7',

      shadowColor: '$gray8',

      ...gray,
      ...violet,
      ...red,
      ...yellow,
      white: '#ffffff',
      black: '#000000',
      transparent: '#00000000',

      primary1: '$violet1',
      primary2: '$violet2',
      primary3: '$violet3',
      primary4: '$violet4',
      primary5: '$violet5',
      primary6: '$violet6',
      primary7: '$violet7',
      primary8: '$violet8',
      primary9: '$violet9',
      primary10: '$violet10',
      primary11: '$violet11',
      primary12: '$violet12',

      danger1: '$red1',
      danger2: '$red2',
      danger3: '$red3',
      danger4: '$red4',
      danger5: '$red5',
      danger6: '$red6',
      danger7: '$red7',
      danger8: '$red8',
      danger9: '$red9',
      danger10: '$red10',
      danger11: '$red11',
      danger12: '$red12',

      warn1: '$yellow1',
      warn2: '$yellow2',
      warn3: '$yellow3',
      warn4: '$yellow4',
      warn5: '$yellow5',
      warn6: '$yellow6',
      warn7: '$yellow7',
      warn8: '$yellow8',
      warn9: '$yellow9',
      warn10: '$yellow10',
      warn11: '$yellow11',
      warn12: '$yellow12',
    },
    space: {
      stack: '$3',
      stackSlim: '$2',
      padding: '$3',
      paddingSlim: '$2',

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
      default: '$4',
      small: '$2',
      pageTitle: '$6',
      sectionTitle: '$4',

      1: '0.625rem',
      2: '0.75rem',
      3: '0.875rem',
      4: '1rem',
      5: '1.5rem',
      6: '2rem',
      7: '3rem',
      8: '4rem',
      9: '16rem',
      10: '32rem',
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
    sizes: {
      em: '1em',
      maxWidth: '800px',
    },
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
      level0: 'none',
      level1: '0 2px  2px $colors$shadowColor',
      level2: '0 2px  4px $colors$shadowColor',
      level3: '0 2px  8px $colors$shadowColor',
      level4: '0 2px 16px $colors$shadowColor',
      primaryLevel1: '0 2px  2px $colors$primary7',
      primaryLevel2: '0 2px  4px $colors$primary7',
      primaryLevel3: '0 2px  8px $colors$primary7',
      primaryLevel4: '0 2px 16px $colors$primary7',
      dangerLevel1: '0 2px  2px $colors$danger7',
      dangerLevel2: '0 2px  4px $colors$danger7',
      dangerLevel3: '0 2px  8px $colors$danger7',
      dangerLevel4: '0 2px 16px $colors$danger7',
      warnLevel1: '0 2px  2px $colors$warn7',
      warnLevel2: '0 2px  4px $colors$warn7',
      warnLevel3: '0 2px  8px $colors$warn7',
      warnLevel4: '0 2px 16px $colors$warn7',
    },
    zIndices: {
      // TODO 作る
    },
    transitions: {
      // TODO 作る
    },
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    bg: '$primary2',
    shadowColor: '$gray5',

    ...grayDark,
    ...violetDark,
    ...redDark,
    ...yellowDark,
    white: '#000000',
    black: '#ffffff',
  },
});

export const useGlobalStyle = globalCss({
  'html': {
    fontSize: '16px',
    fontFamily: '$default',
    backgroundColor: '$bg',
    color: '$fg',
  },
});
