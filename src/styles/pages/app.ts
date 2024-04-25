import { styled } from '../config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  'a:last-child': {
    color: '$gray100',
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
  },
})
