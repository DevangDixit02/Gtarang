import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GTarang Solutions - Satellite & AI Consulting Services',
  description: 'Transform your business with Satellite intelligence and AI-driven solutions. GTarang empowers Indian enterprises through cutting-edge space technologies, intelligent automation, and strategic innovation.',
  keywords: 'satellite technology, AI, artificial intelligence, automation, consulting, space tech, India, GTarang Solutions',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
} 
