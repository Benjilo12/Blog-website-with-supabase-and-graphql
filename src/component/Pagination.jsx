import { useSearchParams } from "react-router";

export const PAGE_SIZE = 9;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Next page
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  // Previous page
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="w-screen flex items-center justify-between gap-0 md:gap-[0.7rem] mt-14 mx-auto">
      <p className="ml-6 md:ml-27">
        Showing{" "}
        <span style={{ fontWeight: 700 }}>
          {(currentPage - 1) * PAGE_SIZE + 1}{" "}
        </span>
        to{" "}
        <span style={{ fontWeight: 700 }}>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of
        <span style={{ fontWeight: 700 }}> {count}</span> results
      </p>

      <div className="flex gap-[2.6rem] md:mr-[35rem] font-bold mr-8">
        <button
          className="active:bg-blue"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === pageCount}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
