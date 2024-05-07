import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "네이버 페이 적립 모음",
  description: "Click to get free points!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Head>
        <meta name="google-site-verification" content="T8Gf0lo0ITsf9ytOorKfT7_l0VR6fgIKXQJwy3nUB-I" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
