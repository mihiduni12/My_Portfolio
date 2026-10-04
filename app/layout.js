import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: `${profile.name} | ${profile.role}`,
  description:
    "Portfolio of Mihiduni Abeyratne, a software engineer from Kandy, Sri Lanka, building full-stack web apps and AI learning tools.",
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: "Full-stack web apps and AI learning tools.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
