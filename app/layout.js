import {Fredoka} from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const fredoka = Fredoka({
  subsets: ["latin"],
});

export const metadata = {
  title: "LogoVerse",
  description: "Generate stunning logos using AI 🚀.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={fredoka.className}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
