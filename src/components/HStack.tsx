import { styled } from '../style';

export const HStack = styled('div', {
  display: 'flex',
  gap: '$stack',
  flexDirection: 'row',

  defaultVariants: {
    reversed: false,
    dense: false,
    slim: false,
    wrap: false,
    align: 'stretch',
    justify: 'center',
  },

  variants: {
    reversed: {
      true: { flexDirection: 'row-reverse' }
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
      left: { justifyContent: 'flex-start' },
      right: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' },
      spaceBetween: { justifyContent: 'space-between' },
      spaceAround: { justifyContent: 'space-around' }
    }
  }
});