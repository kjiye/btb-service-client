import { viewCount } from "@/api/fetch";
import { LangContextProvider } from "@/context/lang.context";
import "./globals.scss";

export const metadata = {
  title: "Beyond the Birthplace",
  icons: {
    icon: "/favicon.ico",
  },
};

/*
  Next.js 13 버전부터 기존의 _document, _app 컴포넌트를 RootLayout이 대체
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  viewCount(0);
  return (
    <html lang="en">
      <body>
        <LangContextProvider>{children}</LangContextProvider>
      </body>
    </html>
  );
}
