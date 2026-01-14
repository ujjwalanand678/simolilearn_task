import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});


export const metadata = {
  title: "Simplilearn Executive Roundtable",
  description: "Preparing Your Workforce & Leaders for the AI Era",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="max-w-screen">
        {children}
      </body>
    </html>
  );
}
