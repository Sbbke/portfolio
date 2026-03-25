// src/routes/RootLayout.tsx
import { Outlet, useLoaderData, Link, useNavigation} from "react-router";
import { useState, useEffect } from "react";
import "./layout.css";
import ErrorPage from "./error-page";
import { getAllPosts } from "src/lib/posts";
// ─── Types ───────────────────────────────────────────────────────────────────

type Category = "cv" | "blog";

type Item = {
  id: string;
  title: string;
  slug: string;
  category: Category;
  favorite?: boolean;
};

// ─── Loader ──────────────────────────────────────────────────────────────────

export async function loader() {
  const posts = await getAllPosts();
  const items: Item[] = [
    {
      id: "cv-main",
      title: "Full CV – Andrew Hou",
      slug: "cv",
      category: "cv",
      favorite: true,
    },
    ...posts.map(p => ({
      id: p.slug,
      title: p.title,
      slug: p.slug,
      category: "blog" as const,
    })),
  ];
  return { items };
}

// ─── Icons ───────────────────────────────────────────────────────────────────

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LocationIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

function ThemeToggle({ darkMode, onToggle }: { darkMode: boolean | null; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light mode" : "Dark mode"}
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function ContactBar() {
  return (
    <div className="contact-grid">
      <a href="mailto:andrew.weian.hou@gmail.com" className="contact-item contact-link">
        <EmailIcon />
        <span>andrew.weian.hou@gmail.com</span>
      </a>

      <div className="contact-item">
        <LocationIcon />
        <span>Ames, IA</span>
      </div>

      <a href="https://sbbke.github.io/" className="contact-item contact-link" target="_blank" rel="noopener noreferrer">
        <GlobeIcon />
        <span>sbbke.github.io</span>
      </a>

      <a href="https://linkedin.com/in/andrew-hou-522423280" className="contact-item contact-link" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
        <span>Andrew Hou</span>
      </a>

      <a href="https://github.com/Sbbke" className="contact-item contact-link" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
        <span>@Sbbke</span>
      </a>
    </div>
  );
}

function SidebarSection({ title, items, activePathPrefix }: {
  title: string;
  items: Item[];
  activePathPrefix: string;
}) {
  const { pathname } = useNavigation().location ?? {};

  return (
    <>
      <h3 className="sidebar-section-title">{title}</h3>
      {items.length > 0 ? (
        <ul>
          {items.map(item => {
            const to = item.category === "cv"
              ? `/cv${item.slug === "cv" ? "" : "/" + item.slug}`
              : `/blog/${item.slug}`;

            return (
              <li key={item.id}>
                <Link to={to} className={pathname?.startsWith(activePathPrefix) ? "active" : ""}>
                  {item.title}
                  {item.favorite && <span className="favorite">★</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="sidebar-empty">No {title.toLowerCase()} yet</p>
      )}
    </>
  );
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // Initialise from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setDarkMode(saved === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Apply class + persist whenever darkMode changes
  useEffect(() => {
    if (darkMode === null) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggle = () => setDarkMode(prev => !prev);

  return { darkMode, toggle };
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout() {
  const { items } = useLoaderData() as { items: Item[] };
  const navigation = useNavigation();
  const { darkMode, toggle } = useDarkMode();

  const cvItems   = items.filter(i => i.category === "cv");
  const blogItems = items.filter(i => i.category === "blog");
  const isLoading = navigation.state === "loading";

  return (
    <div className="page-container">
      <header className="header">
        <div className="container">
          <ThemeToggle darkMode={darkMode} onToggle={toggle} />

          <Link to="/" className="page-title-link">
            <h1 className="page-title">Andrew Hou</h1>
          </Link>

          <ContactBar />
        </div>
      </header>

      <div className="app-layout">
        <aside id="sidebar">
          <nav>
            <SidebarSection title="CV"         items={cvItems}   activePathPrefix="/cv"   />
            <SidebarSection title="Blog Posts" items={blogItems} activePathPrefix="/blog" />
          </nav>
        </aside>

        <main className="main-content">
          <div className="container">
            {isLoading ? (
              <div className="loading-placeholder">
                <div className="spinner" />
                <p>Loading…</p>
              </div>
            ) : (
              <Outlet />
            )}
          </div>
        </main>
      </div>

      <footer className="footer">© {new Date().getFullYear()} Andrew Hou</footer>
    </div>
  );
}

// ─── Error Boundary ───────────────────────────────────────────────────────────

export function ErrorBoundary() {
  const { darkMode, toggle } = useDarkMode();
  
  return (

      <div className="app-layout">
        <main className="main-content">
          <div className="container">
            <ThemeToggle darkMode={darkMode} onToggle={toggle} />
            <ErrorPage />
          </div>
        </main>
      </div>


  );
}