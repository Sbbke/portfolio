import { Link, useLocation } from "react-router";
import { useState, useRef } from "react";

type NavLink = {
  label: string;
  path: string;
};

type Item = {
  title: string;
  links: NavLink[];
};

export default function MenubarSection({ item, activePathPrefix }: {
  item: Item;
  activePathPrefix: string;
}) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActive = pathname.startsWith(activePathPrefix);

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 300);
  }

  return (
    <div
      className={`menu-section ${isActive ? "menu-section--active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="menu-section-title">{item.title}</h3>

      {/* Always rendered, invisible — forces section width to fit longest link */}
      <ul className="menu-sizer" aria-hidden="true">
        {item.links.map(({ label, path }) => (
          <li key={path}>{label}</li>
        ))}
      </ul>

      {/* Visible dropdown — only shown when open */}
      {open && item.links.length > 0 && (
        <ul className="menu-dropdown">
          {item.links.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={pathname === path ? "active" : ""}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}