export const metadata = {
  title: "Valentin Massonnière",
  description: "Valentin Massonnière Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
