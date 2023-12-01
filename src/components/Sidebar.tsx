import Topic from "./Topic.tsx";
import { useContext } from "react";
import { MenuContext } from "../App.tsx";

interface Props {
  closeMenu: () => void;
}

function Sidebar(props: Props) {
  const showMenu = useContext(MenuContext);

  return (
    <div
      style={{ gridArea: "sidebar" }}
      className={`fixed left-0 right-0 -translate-x-full lg:translate-x-0 transition-[transform] duration-300 lg:static lg:block h-full bg-gray-100 lg:rounded-xl p-2 lg:ml-8 overflow-auto ${
        showMenu && "!translate-x-0"
      }`}
    >
      <div className="flex flex-col gap-y-1 overflow-auto">
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Search topic"
            className="bg-white rounded-md w-full outline-0 px-2 py-1 sticky top-0"
          />
          <svg
            onClick={props.closeMenu}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="lg:hidden"
          >
            <path
              d="m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z"
              fill="#212121"
            />
          </svg>
        </div>

        {Array(100)
          .fill(null)
          .map((_, i) => (
            <Topic key={i} />
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
