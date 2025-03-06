import { Link } from "react-router";

function PageNotFound() {
  return (
    <div className="h-screen  mt-96">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-9xl">404 page not found</h1>
        <Link to="/" className="mt-20">
          Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
