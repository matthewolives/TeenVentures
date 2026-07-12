import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "TeenVentures", template: "%s | TeenVentures" },
  description:
    "TeenVentures è il primo programma di imprenditoria per adolescenti italiani. Un posto dove i ragazzi più ambiziosi d'Italia si incontrano, imparano e iniziano a costruire.",
  metadataBase: new URL("https://www.teenventures.it"),
  openGraph: {
    siteName: "TeenVentures",
    locale: "it_IT",
    type: "website",
  },
  verification: {
    google: "dnFuwtUeduveaIqnLcM-XlHPzb-nrD8ka3Y5N5TMlII",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
