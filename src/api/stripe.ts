import { Stripe } from 'stripe'

export const stripe = new Stripe(String(process.env.SECRET_API_KEY), {
  apiVersion: '2024-04-10',
  appInfo: {
    name: 'shop-ig',
  },
})
