import Sidebar from "./components/Sidebar.tsx";
import Content from "./components/Content.tsx";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <div className="h-[100vh] grid gap-x-4 main-layout">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}
