import ClientProvider from './client-provider';

import "../styles/globals.css";

export const metadata = {
  title: "Hello, I'm Christian Kirkegaard",
  description: "I write small and fun generative graphics in various languages and frameworks like Javascript, Processing, and GLSL.",
  keywords: "Online portfolio, generative graphics, javascript, processing, GLSL",
  authors: [{ name: "Christian Kirkegaard" }],
  creator: "Christian Kirkegaard",
  publisher: "Christian Kirkegaard",
  robots: "index, follow",
  applicationName: "lowpoly.dk",
  appleWebApp: {
    title: "lowpoly.dk",
    statusBarStyle: "default",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon192.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon192.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon192.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "da",
    title: "Hello, I'm Christian Kirkegaard",
    description: "I write small and fun generative graphics in various languages and frameworks like Javascript, Processing, and GLSL.",
    images: [
      {
        url: "/favicon192.png",
        width: 192,
        height: 192,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@ranza",
    creator: "@ranza",
    title: "Hello, I'm Christian Kirkegaard",
    description: "I write small and fun generative graphics in various languages and frameworks like Javascript, Processing, and GLSL.",
    images: ["/favicon192.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  shrinkToFit: false,
  themeColor: "#FF0000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}