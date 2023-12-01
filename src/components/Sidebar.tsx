import Topic from "./Topic.tsx";

function Sidebar() {
  return (
    <div
      className="hidden lg:block h-full bg-gray-100 rounded-xl p-2 ml-8 overflow-auto"
      style={{ gridArea: "sidebar" }}
    >
      <div className="flex flex-col gap-y-1 overflow-auto">
        <input
          type="text"
          placeholder="Search topic"
          className="bg-white rounded-md w-full outline-0 mb-2 px-2 py-1 sticky top-0"
        />

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
