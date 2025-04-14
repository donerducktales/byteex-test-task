import { Inter, Jost } from 'next/font/google';

export const jost = Jost({
   subsets: ['latin'],
   weight: ['400', '600']
}); // i've picked similar to "Sofia pro" font, because Sofia pro is non-free font

export const inter = Inter({
   subsets: ['latin'],
   weight: ['400']
}); // same thing as in previous case, Inter instead Suisse Int'l