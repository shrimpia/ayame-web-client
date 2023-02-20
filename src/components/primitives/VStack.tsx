import { styled } from '../../style';

export const VStack = styled('div', {
  display: 'flex',
  gap: '$stack',
  flexDirection: 'column',

  defaultVariants: {
    reversed: false,
    dense: false,
    slim: false,
    wrap: false,
    align: 'stretch',
    justify: 'top',
  },

  variants: {
    reversed: {
      true: { flexDirection: 'column-reverse' }
    },
    dense: {
      true: { gap: 0 }
    },
    slim: {
      true: { gap: '$stackSlim' }
    },
    wrap: {
      true: { flexWrap: 'wrap' }
    },
    align: {
      left: { alignItems: 'flex-start' },
      right: { alignItems: 'flex-end' },
      center: { alignItems: 'center' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' }
    },
    justify: {
      top: { justifyContent: 'flex-start' },
      down: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' },
      spaceBetween: { justifyContent: 'space-between' },
      spaceAround: { justifyContent: 'space-around' }
    }
  }
});