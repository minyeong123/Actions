// src/app/layout.tsx

import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import { MSWComponent } from "@/providers/MSWComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MSWComponent>
          <QueryProvider>{children}</QueryProvider>
        </MSWComponent>
      </body>
    </html>
  );
}
