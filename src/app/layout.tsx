import { LangContextProvider } from "@/context/lang.context";
import { textBundle } from "@/util/format.util";
import "./globals.scss";

export const metadata = {
  title: textBundle().logo.title,
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
  return (
    <html lang="en">
      <body>
        <LangContextProvider>{children}</LangContextProvider>
      </body>
    </html>
  );
}
