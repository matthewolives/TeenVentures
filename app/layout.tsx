import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeenVentures",
  description:
    "TeenVentures è il primo programma di imprenditoria per adolescenti italiani. Un posto dove i ragazzi più ambiziosi d'Italia si incontrano, imparano e iniziano a costruire.",
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
