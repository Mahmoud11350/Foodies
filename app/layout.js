import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import NavbarBackground from "@/components/navbar/NavbarBackground";

export const metadata = {
  title: "FOODIES",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#282C34]">
        <NavbarBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
