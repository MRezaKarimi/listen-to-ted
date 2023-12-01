import Sidebar from "./components/Sidebar.tsx";
import Content from "./components/Content.tsx";
import Header from "./components/Header.tsx";
import { createContext, useState } from "react";

export const MenuContext = createContext(false);

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  function openMenu() {
    setShowMenu(true);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <div className="h-[100vh] grid gap-x-4 main-layout">
      <MenuContext.Provider value={showMenu}>
        <Header openMenu={openMenu} />
        <Sidebar closeMenu={closeMenu} />
      </MenuContext.Provider>
      <Content />
    </div>
  );
}
