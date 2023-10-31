import "./styles/index.scss";

export const metadata = {
  title: "Valentin Massonnière",
  description: "Valentin Massonnière Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
