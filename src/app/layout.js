import localFont from "next/font/local";
import "./globals.css";
import Header from "./Componentes/Header/Header"


import CambiarIdiomaProvider from "./Providers/CambiarIdiomaContexto"
const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "blog ",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     <CambiarIdiomaProvider> 
          <Header />
          {children}
          
        </CambiarIdiomaProvider>
      </body>
    </html>
  );
}
