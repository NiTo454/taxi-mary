import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taxi Mary | Servicio Seguro",
  description: "Viajes seguros, cómodos y de confianza. El mejor servicio.",
  openGraph: {
    title: "Taxi Mary | Tarjeta Digital",
    description: "Viajes seguros, cómodos y de absoluta confianza en Tizayuca. Pide tu viaje por WhatsApp.",
    url: "https://taxi-mary.vercel.app/", /* <-- Cambia esto por tu dominio final */
    siteName: "Taxi Mary",
    images: [
      {
        url: "/foto_perfil.jpeg", /* Puedes cambiarla por un banner o logo más ancho si lo deseas */
        width: 800,
        height: 600,
        alt: "Perfil de Taxi Mary",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
