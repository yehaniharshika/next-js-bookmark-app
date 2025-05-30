import { Lilita_One, Nunito } from "next/font/google";

export const nunito = Nunito({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-poppins',
});

export const lilitaOne = Lilita_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lilita',
});
