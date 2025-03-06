import { Spinner } from "flowbite-react";
function Loader() {
  return (
    <div className="w-screen h-screen  flex flex-wrap items-center justify-center">
      <Spinner
        aria-label="Extra large spinner example"
        size="xl"
        className=""
      />
    </div>
  );
}

export default Loader;
