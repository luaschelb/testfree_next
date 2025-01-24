import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testfree Next",
  description: "Uma versão da aplicação Testfree para a framework next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
