import { LangContextProvider } from "@/context/lang.context";
import { textBundle } from "@/util/format.util";
import "./globals.scss";

export const metadata = {
  title: textBundle().logo.title,
  icons: {
    icon: "/favicon.ico",
  },
};

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
