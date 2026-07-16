import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Денис Олиневич — Full-stack & AI разработчик",
  description:
    "Разрабатываю сайты, веб-сервисы, AI-решения и ботов для бизнеса — от идеи до запуска.",
  openGraph: {
    title: "Денис Олиневич — Full-stack & AI разработчик",
    description: "Цифровые продукты для бизнеса: сайты, сервисы, AI и автоматизация.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
