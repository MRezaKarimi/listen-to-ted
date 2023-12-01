import Talk from "./Talk.tsx";
import Pagination from "./Pagination.tsx";

function Content() {
  return (
    <div
      className="h-full overflow-auto px-4 lg:pr-8 lg:pl-0"
      style={{ gridArea: "content" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Pagination currentPage={10} hasPrev={false} hasNext={true} />
      </div>
    </div>
  );
}

export default Content;
