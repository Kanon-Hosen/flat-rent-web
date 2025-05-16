import "../globals.css";

export const metadata = {
  title: "Dashboard",
  description:
    "Tenord is a simple and fast web application for buying and selling flats in Dhaka for rent.",
};

export default function RootDashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
