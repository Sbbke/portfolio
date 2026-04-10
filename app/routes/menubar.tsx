import MenubarSection from "./menu";

const NAV_ITEMS = [
  {
    title: "Home",
    links: [{ label: "Home", path: "/" }],
    activePathPrefix: "/",
  },
  {
    title: "CV",
    links: [
      { label: "Overview", path: "/cv" },
      { label: "Experience", path: "/cv/experience" },
    ],
    activePathPrefix: "/cv",
  },
];

export default function Menubar() {
  return (
    <nav className="menubar">
      {NAV_ITEMS.map((item) => (
        <MenubarSection
          key={item.title}
          item={item}
          activePathPrefix={item.activePathPrefix}
        />
      ))}
    </nav>
  );
}