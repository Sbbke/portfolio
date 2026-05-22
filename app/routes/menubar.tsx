import MenubarSection from "./menu";
import { useState } from "react";

const NAV_ITEMS = [
  {
    title: "CV",
    links: [
      { label: "Overview", path: "/cv" },
    ],
    activePathPrefix: "/cv",
  },
];

export default function Menubar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="menubar">
      {NAV_ITEMS.map((item) => (
        <MenubarSection
          key={item.title}
          item={item}
          activePathPrefix={item.activePathPrefix}
        />
      ))}

      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(o => !o)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}