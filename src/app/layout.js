import "./globals.css";

export const metadata = {
  title: "Mirian Okoro, Esq. | Lawyer & Real Estate Professional",
  description:
    "Portfolio of Mirian Okoro, a legal practitioner and real estate professional based in Enugu, Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
