interface Props {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}

function Pagination(props: Props) {
  const enabledClass = "cursor-pointer";
  const disabledClass = "cursor-not-allowed fill-gray-400";

  return (
    <div className="flex justify-center items-center gap-4 mb-4">
      <svg
        width="20"
        height="20"
        className={props.hasPrev ? enabledClass : disabledClass}
      >
        <path d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" />
      </svg>
      <span className="text-lg">{props.currentPage}</span>
      <svg
        width="20"
        height="20"
        className={props.hasNext ? enabledClass : disabledClass}
      >
        <path d="M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z" />
      </svg>
    </div>
  );
}

export default Pagination;
