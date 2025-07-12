import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ishan Mishra - Full Stack Developer',
  description: 'Full-stack developer with a knack for building performant web apps using modern stacks like Next.js, Tailwind, and MongoDB.',
  keywords: ['Ishan Mishra', 'Full Stack Developer', 'Next.js', 'React', 'MongoDB', 'Web Development'],
  authors: [{ name: 'Ishan Mishra' }],
  creator: 'Ishan Mishra',
  openGraph: {
    title: 'Ishan Mishra - Full Stack Developer',
    description: 'Passionate full-stack developer specializing in modern web technologies',
    url: 'https://ishanmishra.dev',
    siteName: 'Ishan Mishra Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ishan Mishra - Full Stack Developer',
    description: 'Passionate full-stack developer specializing in modern web technologies',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}