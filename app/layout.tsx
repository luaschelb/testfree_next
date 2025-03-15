import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers";
import DrawerLayout from "./components/drawerLayout";

export const metadata: Metadata = {
  title: "Testfree Next",
  description: "Uma versão da aplicação Testfree para a framework next.js ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("auth")
  if (authCookie === undefined) 
  {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        {
          authCookie === undefined ? (
            children
          ) : (
            <DrawerLayout>
              {children}
            </DrawerLayout>
          )
        }
      </body>
    </html>
  );
}
