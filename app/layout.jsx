"use client";

import "../styles/globals.css";
import { Footer, Header } from "../components/layouts/index";
import { useLenis } from "../hooks/useLenis";
import Provider from "../utils/Provider/Provider";

const DURATION = 1;
const DELAY = 1;

export default function RootLayout({ children }) {
  useLenis();

  return (
    <html lang="en">
      <head>
        <title>Zara Abbudi — Creative web developer</title>
        <link rel="icon" type="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="description"
          content="I'm Mia Kuber, a freelance web developer. Check out this modern, responsive portfolio template built with Next.js, Tailwind CSS, and Lenis for smooth scrolling. Perfect for creative professionals looking to showcase their work online."
        />
      </head>
      <body>
        <Provider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
