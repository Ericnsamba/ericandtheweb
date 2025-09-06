import { DM_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Google Font - DM Mono
export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-dm-mono',
})

// Local Font - Lay Grotesk
export const layGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/LayGrotesk-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LayGrotesk-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LayGrotesk-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LayGrotesk-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LayGrotesk-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-lay-grotesk',
  fallback: ['system-ui', 'arial'],
})

// Font variables for CSS
export const fontVariables = `${dmMono.variable} ${layGrotesk.variable}`