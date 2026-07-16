"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Gauge,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Smartphone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: BrainCircuit,
    title: "Разработка сайтов с ИИ",
    text: "Лендинги и многостраничные сайты со встроенными ИИ-консультантами.",
  },
  {
    icon: MonitorSmartphone,
    title: "Веб-приложения и CRM",
    text: "Личные кабинеты, панели управления и внутренние системы для бизнеса.",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    text: "Современные приложения с простым и понятным интерфейсом.",
  },
  {
    icon: Bot,
    title: "Telegram и MAX боты",
    text: "Боты для продаж, поддержки клиентов, записи и автоматизации задач.",
  },
  {
    icon: BrainCircuit,
    title: "ИИ-внедрение под ключ",
    text: "Настройка AI на материалах компании, RAG и интеграция с рабочими системами.",
  },
  {
    icon: Gauge,
    title: "Быстрый запуск MVP",
    text: "Первая рабочая версия продукта, чтобы быстро проверить идею на практике.",
  },
];

const projects = [
  {
    number: "01",
    title: "Территория Тайги",
    type: "Коммерческий сайт",
    description:
      "Сайт для сети отелей, ресторанов и событийных площадок Иркутска и Байкала. Пять направлений бизнеса объединены в одном продукте.",
    stack: ["Next.js", "Full-stack", "Интеграции"],
    href: "https://www.t-taigi.ru/",
    image: "/projects/taiga.png",
  },
  {
    number: "02",
    title: "Botmarket",
    type: "Сайт продуктовой студии",
    description:
      "Сайт студии по разработке AI-ассистентов, Telegram-ботов, сайтов и CRM-интеграций для бизнеса.",
    stack: ["Next.js", "AI", "Motion"],
    href: "https://botmarket-pi.vercel.app/",
    image: "/projects/botmarket.png",
  },
  {
    number: "03",
    title: "Trading Simulator",
    type: "Web-приложение для онлайн-школы",
    description:
      "Интерактивный симулятор трейдинга для обучения и практики на рыночных графиках без риска реальных средств.",
    stack: ["Django", "JavaScript", "Analytics"],
    href: "https://l1nq.com/muuk8ql",
    image: "/projects/trading.svg",
  },
  {
    number: "04",
    title: "Damfai",
    type: "AI-сервис для чтения",
    description:
      "Сжатие текста, персональные рекомендации, статистика чтения и сценарии работы с AI-ассистентом.",
    stack: ["FastAPI", "Next.js", "PostgreSQL"],
    href: "https://github.com/1Dambek1/damfai-server",
    image: "/projects/damfai.png",
  },
  {
    number: "05",
    title: "Legal Sync",
    type: "RAG-система",
    description:
      "Поиск релевантных правовых актов и генерация ответов с учётом контекста загруженных документов.",
    stack: ["Python", "RAG", "LLM"],
    href: "https://github.com/Fesyse/legal-sync",
    image: "/projects/legal-sync.png",
  },
  {
    number: "06",
    title: "Damview",
    type: "Сервис онлайн-собеседований",
    description:
      "Видеозвонки без регистрации, комнаты для участников и совместный онлайн-редактор кода.",
    stack: ["WebRTC", "Full-stack", "Realtime"],
    href: "https://github.com/1Dambek1/daminterview",
    image: "/projects/damview.png",
  },
  {
    number: "07",
    title: "Damfarm",
    type: "3D web-игра",
    description:
      "Интерактивный игровой мир со сменой дня и ночи, сюжетом, биржей труда и мини-играми.",
    stack: ["Next.js", "Three.js", "3D"],
    href: "https://github.com/Fesyse/damfarm",
    image: "/projects/damfarm.png",
  },
];

const activeProjects = projects.slice(0, 3);
const archivedProjects = projects.slice(3);

function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <RevealObserver />

      <header className="header shell">
        <a className="logo" href="#top" aria-label="Наверх">
          <span>DO</span>
          <b>Денис Олиневич</b>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Обо мне</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Что делаю</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a>
          <a className="nav-contact" href="https://t.me/Dambek0" target="_blank" rel="noreferrer">
            Написать <ArrowUpRight size={18} />
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="hero-label"><i /> Full-stack & AI developer</div>
          <h1>Денис<br />Олиневич</h1>
          <p>
            Разрабатываю сайты, веб-приложения, AI-решения и ботов для бизнеса —
            от идеи до запуска.
          </p>
          <a className="main-button" href="#projects">
            Смотреть проекты <ArrowDownRight size={20} />
          </a>
        </div>

        <div className="hero-photo">
          <Image
            src="/denis-profile.png"
            alt="Денис Олиневич"
            fill
            priority
            sizes="(max-width: 800px) 90vw, 38vw"
          />
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="section-label" data-reveal>Обо мне</div>
        <div className="about-content" data-reveal>
          <h2>
            Собираю готовые цифровые продукты: продумываю архитектуру, пишу
            backend, создаю интерфейс и запускаю проект.
          </h2>

          <div className="about-details">
            <p>
              Работаю с Next.js, Python, FastAPI, Django, PostgreSQL, PyTorch и
              Transformers. Есть опыт коммерческой разработки, создания
              AI-сервисов и образовательных платформ.
            </p>
            <div className="facts">
              <div><strong>4+</strong><span>года в разработке</span></div>
              <div><strong>7</strong><span>готовых проектов</span></div>
            </div>
          </div>

          <div className="experience-row">
            <article>
              <span>2025 — сейчас</span>
              <h3>Full-stack Developer</h3>
              <p>Территория Тайги</p>
            </article>
            <article>
              <span>2023 — сейчас</span>
              <h3>Python Backend Mentor</h3>
              <p>WinCode</p>
            </article>
            <article>
              <span>2024</span>
              <h3>Backend Developer</h3>
              <p>Онлайн-школа математики</p>
            </article>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="shell">
          <div className="services-heading" data-reveal>
            <div>
              <span className="section-label">Что я делаю</span>
              <h2>Разрабатываю продукты под ключ</h2>
            </div>
            <p>
              Использую готовые модули и AI-инструменты, чтобы быстрее
              проектировать, тестировать и запускать продукты.
            </p>
          </div>

          <div className="services-grid">
            {services.map(({ icon: Icon, ...service }, index) => (
              <article className="service-card" key={service.title} data-reveal>
                <div className="service-top">
                  <span><Icon size={21} /></span>
                  <b>0{index + 1}</b>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects shell" id="projects">
        <div className="projects-heading" data-reveal>
          <div>
            <span className="section-label">Портфолио</span>
            <h2>Активные проекты</h2>
          </div>
          <p>
            Проекты, которые сейчас работают, развиваются или используются
            заказчиками.
          </p>
        </div>

        <div className="project-grid active-grid">
          {activeProjects.map((project) => (
            <a
              className="project-card active-project"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              data-reveal
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={`Превью проекта ${project.title}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>

              <div className="project-body">
                <div className="project-top">
                  <span>{project.number}</span>
                  <ArrowUpRight size={24} />
                </div>
                <div className="project-content">
                  <small>{project.type}</small>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="archive-heading" data-reveal>
          <div>
            <span className="section-label">Архив</span>
            <h2>Другие проекты</h2>
          </div>
          <p>
            Завершённые собственные и командные разработки.
          </p>
        </div>

        <div className="archive-grid">
          {archivedProjects.map((project) => (
            <a
              className="archive-card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              data-reveal
            >
              <div className="archive-image">
                <Image
                  src={project.image}
                  alt={`Превью проекта ${project.title}`}
                  fill
                  sizes="(max-width: 700px) 100vw, 25vw"
                />
              </div>

              <div className="archive-body">
                <div className="archive-top">
                  <span>{project.number}</span>
                  <ArrowUpRight size={20} />
                </div>
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="archive-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-content" data-reveal>
          <div>
            <span>Связаться со мной</span>
            <h2>Есть проект? Давайте обсудим.</h2>
          </div>

          <div className="contact-links">
            <a href="https://t.me/Dambek0" target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              <span><small>Telegram</small>@Dambek0</span>
            </a>
            <a href="mailto:denolinevichd@inbox.ru">
              <Mail size={20} />
              <span><small>Email</small>denolinevichd@inbox.ru</span>
            </a>
            <a href="tel:+79149232481">
              <Phone size={20} />
              <span><small>Телефон</small>+7 914 923-24-81</span>
            </a>
            <a href="https://github.com/1Dambek1" target="_blank" rel="noreferrer">
              <Code2 size={20} />
              <span><small>GitHub</small>1Dambek1</span>
            </a>
          </div>
        </div>

        <div className="shell footer-bottom">
          <span>Денис Олиневич · 2026</span>
          <span>Иркутск · работаю удалённо</span>
        </div>
      </footer>
    </main>
  );
}
