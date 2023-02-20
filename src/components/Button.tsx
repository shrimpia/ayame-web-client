import { styled } from '../style';

export const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  padding: '$paddingSlim $padding',
  cursor: 'pointer',
  borderRadius: '$2',
  lineHeight: '$none',

  '&:disabled': {
    cursor: 'default',
    opacity: 0.5,
  },

  defaultVariants: {
    color: 'default',
  },

  variants: {
    color: {
      default: {
        backgroundColor: '$uiBg',
        color: '$uiFg',
        border: '1px solid $uiBorder',
        boxShadow: '$level2',

        '&:not(:disabled):hover, &:not(:disabled):focus': {
          backgroundColor: '$uiHoverBg',
          borderColor: '$uiHoverBorder',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$uiActiveBg',
          borderColor: '$uiHoverBorder',
        },
      },
      primary: {
        backgroundColor: '$uiPrimaryBg',
        color: '$uiPrimaryFg',
        border: '1px solid $uiPrimaryBorder',
        boxShadow: '$level2',

        '&:not(:disabled):hover, &:not(:disabled):focus': {
          backgroundColor: '$uiPrimaryHoverBg',
          borderColor: '$uiPrimaryHoverBorder',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$uiPrimaryActiveBg',
          borderColor: '$uiPrimaryHoverBorder',
        }
      },
      danger: {
        backgroundColor: '$uiDangerBg',
        color: '$uiDangerFg',
        border: '1px solid $uiDangerBorder',
        boxShadow: '$level2',

        '&:not(:disabled):hover, &:not(:disabled):focus': {
          backgroundColor: '$uiDangerHoverBg',
          borderColor: '$uiDangerHoverBorder',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$uiDangerActiveBg',
          borderColor: '$uiDangerHoverBorder',
        }
      },
      flat: {
        backgroundColor: '$transparent',
        color: '$uiFg',

        '&:not(:disabled):hover, &:not(:disabled):focus': {
          backgroundColor: '$uiHoverBg'
        },
        '&:not(:disabled):active': {
          backgroundColor: '$uiActiveBg'
        },
      },
    },
  },
});
