import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mental Coach Assistant',
  description: 'Your supportive companion for stress, motivation, habits, and confidence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

