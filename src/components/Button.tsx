import { styled } from '../style';

export const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  padding: '$paddingSlim $padding',
  cursor: 'pointer',
  borderRadius: '$2',

  defaultVariants: {
    color: 'default',
  },

  variants: {
    color: {
      default: {
        backgroundColor: '$uiBg',
        color: '$uiFg',
        border: '1px solid $uiBorder',
        '&:hover, &:focus': {
          backgroundColor: '$uiHoverBg',
          borderColor: '$uiHoverBorder',
        },
        '&:active': {
          backgroundColor: '$uiActiveBg',
          borderColor: '$uiHoverBorder',
        },
      },
      primary: {
        backgroundColor: '$uiPrimaryBg',
        color: '$uiPrimaryFg',
        border: '1px solid $uiPrimaryBorder',
        '&:hover, &:focus': {
          backgroundColor: '$uiPrimaryHoverBg',
          borderColor: '$uiPrimaryHoverBorder',
        },
        '&:active': {
          backgroundColor: '$uiPrimaryActiveBg',
          borderColor: '$uiPrimaryHoverBorder',
        }
      },
      danger: {
        backgroundColor: '$uiDangerBg',
        color: '$uiDangerFg',
        border: '1px solid $uiDangerBorder',
        '&:hover, &:focus': {
          backgroundColor: '$uiDangerHoverBg',
          borderColor: '$uiDangerHoverBorder',
        },
        '&:active': {
          backgroundColor: '$uiDangerActiveBg',
          borderColor: '$uiDangerHoverBorder',
        }
      },
      flat: {
        backgroundColor: '$transparent',
        '&:hover, &:focus': {
          backgroundColor: '$uiHoverBg'
        },
        '&:active': {
          backgroundColor: '$uiActiveBg'
        },
      },
    },
  },
});