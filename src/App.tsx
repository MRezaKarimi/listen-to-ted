import { FC } from "react";
import Sidebar from "./components/Sidebar.tsx";
import Content from "./components/Content.tsx";
import Header from "./components/Header.tsx";

const App: FC = () => {
  return (
    <div
      className="h-[100vh] grid gap-x-4 main-layout"
    >
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
