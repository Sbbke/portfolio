import MenubarSection from "./menu";

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