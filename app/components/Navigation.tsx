// components/Navigation.tsx
import { MenuItem } from "../types/menuitem";
import Link from "next/link";

const Navigation: React.FC = () => {
  const menuItems: MenuItem[] = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Resources", path: "/resources" },
  ];

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar">
      <div className="h-full px-4 pt-12 overflow-y-auto bg-neutral-50 dark:bg-neutral-800">
        <ul className="space-y-2 font-light">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className="flex items-center px-4 py-2 text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;
