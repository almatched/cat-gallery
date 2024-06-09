import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";
import { TopNav } from "./_components/topnav";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Folco's Cat Gallery",
  description: "Gallery of beautiful Maine Coon from Folco's cattery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
