import { LangContextProvider } from "@/context/lang.context";
import "./globals.css";

export const metadata = {
  title: "Beyond the Birthplace",
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
