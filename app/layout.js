import "./globals.css";

export const metadata = {
  title: "Aureya | Acompañamiento Humano",
  description:
    "Presencia real, escucha profunda y camino acompañado. Acompañamiento humano Aureya."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-space text-main font-sans">
        {children}
      </body>
    </html>
  );
}
