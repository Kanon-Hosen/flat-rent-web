
import "./globals.css";



export const metadata = {
  title: "Tenord",
  description: "Tenord is a simple and fast web application for buying and selling flats in Dhaka for rent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
