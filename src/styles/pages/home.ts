import { styled } from '../config'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',

  img: {
    objectFit: 'cover',
    cursor: 'pointer',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 4,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.6)',
    transform: 'translateY(110%)',
    transition: 'all 0.2s ease-in-out',
    opacity: 0,

    div: {
      display: 'flex',
      flexDirection: 'column',
    },

    strong: {
      fontSize: '$md',
      color: '$gray100',
    },

    span: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$green300',
    },

    button: {
      border: 'none',
      padding: '0.5rem',
      backgroundColor: '$green500',
      borderRadius: 6,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '$green300',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
