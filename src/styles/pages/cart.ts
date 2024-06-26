import { styled } from '@stitches/react'

export const CartContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
    letterSpacing: 1.6,
  },
})

export const CartWrapper = styled('main', {
  display: 'grid',
  gap: '2rem',
})

export const CartItem = styled('div', {
  maxWidth: 154,
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 150,
  height: 165,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },

  span: {
    position: 'absolute',
    top: -10,
    right: 0,
    padding: '0.5rem 0.625rem',
    backgroundColor: '$purple700',
    borderRadius: 9999,
  },
})

export const InfoCart = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  strong: {
    display: 'block',
  },

  button: {
    display: 'flex',
    padding: '0.375rem',
    background: '$green500',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: 6,

    '&:hover': {
      background: '$green300',
    },
  },
})

export const InfoContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginTop: '4rem',
  alignItems: 'flex-start',

  span: {
    fontSize: '$md',
    color: '$gray300',
  },
  strong: {
    fontSize: '$lg',
    color: '$gray100',
  },

  button: {
    padding: '0.75rem 1.25rem',
    border: 'none',
    backgroundColor: '$green500',
    borderRadius: 6,
    color: '$white',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:disabled': {
      opacity: '0.6',
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})
