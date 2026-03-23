import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vignesh | 3D Design & DevOps",
  description: "Freelance developer and 3D designer focused on building real-world digital solutions and scalable automation.",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👨‍💻</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning className={`${inter.className} bg-brand-dark text-gray-100 min-h-screen flex flex-col antialiased selection:bg-brand-purple/30 selection:text-white overflow-x-hidden`}>
        {/* Sleek Modern Dark Background */}
        <div className="fixed inset-0 z-[-2] bg-[#030303]">
          {/* Top Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
          {/* Bottom Radial Glow */}
          <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(59,130,246,0.1),rgba(255,255,255,0))] pointer-events-none"></div>
          {/* Optional Noise / Grain (simulated via CSS pattern) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>

        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
