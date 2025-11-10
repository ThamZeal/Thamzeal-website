import { Poppins, Roboto } from 'next/font/google';
import "./globals.css";
import ConditionalLayout from './components/ConditionalLayout';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"


// Load fonts with specific weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '600'], // 700 (Bold) for headings, 600 (SemiBold) for subheadings
  variable: '--font-poppins',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300'], // 300 (Light) for body text
  variable: '--font-roboto',
});

export const metadata = {
  title: "ThamZeal International",
  description: "ThamZeal International offers expert business consulting services to drive growth, transformation, and success. Partner with us for innovative strategies.",
  keywords: "ThamZeal, Business Consulting, Growth Strategy, Business Transformation, International Consulting, Business Success, Innovation, Strategy Consulting",
  authors: [{ name: "ThamZeal" }],
  creator: "ThamZeal",
  publisher: "ThamZeal",
  openGraph: {
    title: "ThamZeal International",
    description: "ThamZeal International offers expert business consulting services to drive growth, transformation, and success. Partner with us for innovative strategies.",
    url: "https://www.thamzeal.com",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "ThamZeal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThamZeal International",
    description: "ThamZeal International - Your partner in business growth and transformation.",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "ThamZeal Logo",
      },
    ],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification=your-verification-code",
  },
  alternates: {
    en: "/en",
    fr: "/fr",
  },
  metadataBase: new URL("https://www.thamzeal.com"),
  applicationName: "ThamZeal International",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
  },
  categories: ["Business", "Consulting"],
  colorScheme: "light dark",
  creator: "ThamZeal",
  publisher: "ThamZeal",
  subject: "Business Consulting",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className='bg-white text-black '>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
