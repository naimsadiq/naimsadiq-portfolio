import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/hero/HeroSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Basic Metadata
  title: "Naim Sadiq | MERN Stack Developer Portfolio",
  description:
    "Junior MERN Stack Developer specializing in React, Next.js, and MongoDB. Building high-performance, scalable web applications with clean architecture.",
  keywords: [
    "Naim Sadiq",
    "MERN Stack Developer",
    "Web Developer Bangladesh",
    "React Developer",
    "Next.js Portfolio",
    "Software Engineer Rajshahi",
  ],
  authors: [{ name: "Naim Sadiq" }],
  creator: "Naim Sadiq",
  publisher: "Naim Sadiq",

  // Open Graph (Facebook, LinkedIn, Discord-এর জন্য)
  openGraph: {
    title: "Naim Sadiq | MERN Stack Developer",
    description:
      "Explore my projects and skills in modern web development. Currently available for Internships!",
    url: "https://naimsadiq.vercel.app/", // এখানে আপনার লাইভ সাইটের লিঙ্ক দিন
    siteName: "Naim Sadiq Portfolio",
    images: [
      {
        url: "/images/portfolio-preview.avif", // ইমেজের ফুল লিঙ্ক (১২০০x৬৩০ সাইজ বেস্ট)
        width: 1200,
        height: 630,
        alt: "Naim Sadiq Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter (X)-এর জন্য
  twitter: {
    card: "summary_large_image",
    title: "Naim Sadiq | MERN Stack Developer",
    description:
      "Junior MERN Stack Developer | React & Next.js Expert | Open for Internship.",
    creator: "@your_twitter_handle", // আপনার টুইটার হ্যান্ডেল থাকলে দিবেন
    images: ["/public/images/naim-portfolio-preview.avif"],
  },

  // Search Engine Bot Control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <Hero></Hero>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
