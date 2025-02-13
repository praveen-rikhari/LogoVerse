import { Fredoka } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

import { ClerkProvider } from '@clerk/nextjs';

const fredoka = Fredoka({
  subsets: ["latin"],
});

export const metadata = {
  title: "LogoVerse",
  description: "Generate stunning logos using AI 🚀.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={fredoka.className}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
