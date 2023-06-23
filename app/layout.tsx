import "styles/globals.css";
import { SiteContextProvider } from "@/lib/context";

import Layout from "components/layout/layout";
import { isBrowser } from "@/lib/helpers";

import { lato, quicksand } from "@/lib/fonts";
import { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default:
      "Aldan International | Your Source for High-Quality Products from Around the World",
    template:
      "%s | Aldan International: Your Source for High-Quality Products from Around the World",
  },
  description:
    "Aldan International is a leading product exporting company with a wide range of products to offer. We source our products from all over the world, so you can be sure to find the perfect product for your needs. Whether you're looking for home goods, electronics, or apparel, we have something for everyone.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Aldan International",
    description:
      "Aldan International is a leading product exporting company that provides a wide variety of products from around the world. We offer competitive prices, fast shipping, and excellent customer service. Whether you're looking for electronics, clothing, home goods, or something else entirely, we have you covered.",
    url: "https://aldaninternational.com",
    siteName: "Aldan International.app",
    images: [
      {
        url: "landing og:image.webp",
        width: 2400,
        height: 1350,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
  twitter: {
    title: "Aldan International",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "icon/android-chrome-512x512.png",
  },
};

if (isBrowser) {
  console.groupCollapsed(
    "%c🦤 Site Credits",
    "display:block;padding:0.125em 1em;font-family:courier;font-size:14px;font-weight:bold;line-height:2;text-transform:uppercase;background:black;color:white;"
  );
  console.log(
    "%cDesign copied from  \n– https://boostify-nesst.myshopify.com/",
    "display:block;font-family:courier;font-size:12px;font-weight:bold;line-height:1;color:black;"
  );
  console.log(
    "%c🦤 Onnum tnnalle seatta",
    "display:block;font-family:courier;font-size:12px;font-weight:bold;line-height:1;color:black;"
  );
  console.groupEnd();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} ${lato.variable} ${quicksand.variable}`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GKVHHDN8ZG"
        />
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GKVHHDN8ZG');`}
        </Script>
        <SiteContextProvider>
          <Layout>{children}</Layout>
          <Analytics />
        </SiteContextProvider>
      </body>
    </html>
  );
}
