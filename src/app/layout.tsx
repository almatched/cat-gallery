import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";

import { ourFileRouter } from "~/app/api/uploadthing/core";
import { TopNav } from "./_components/topnav";
import { Toaster } from "~/components/ui/sonner";
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata = {
  title: "Folco's Cat Gallery",
  description: "Gallery of beautiful Maine Coon from Folco's cattery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body className="dark">
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll">{children}</main>
              {modal}
            </div>
            <div id="modal-root" />
            <Toaster />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
