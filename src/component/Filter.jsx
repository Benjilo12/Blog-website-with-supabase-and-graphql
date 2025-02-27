import { useSearchParams } from "react-router";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex justify-center gap-15 mb-20 flex-wrap md:text-2xl  text-base">
      <button
        className="cursor-pointer border-1 py-1 px-4 active:bg-black active:text-white text-black  font-bold rounded border-none"
        onClick={() => handleClick("all")}
      >
        All
      </button>
      <button
        className="cursor-pointer border-1 py-1 px-4 active:bg-black active:text-white text-black font-bold rounded border-none"
        onClick={() => handleClick("tech")}
      >
        Tech
      </button>
      <button
        className="cursor-pointer border-1 py-1 px-4  active:bg-black active:text-white text-black font-bold rounded border-none"
        onClick={() => handleClick("politics")}
      >
        Politics
      </button>
      <button
        className="cursor-pointer border-1 py-1 px-4  active:bg-black active:text-white text-black font-bold rounded border-none"
        onClick={() => handleClick("sports")}
      >
        Sports
      </button>
      <button
        className="cursor-pointer border-1 py-1 px-4  active:bg-black active:text-white text-black font-bold rounded border-none"
        onClick={() => handleClick("entertainment")}
      >
        Entertainment
      </button>
    </div>
  );
}

export default Filter;
