import { Link } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useLatestBlog } from "../services/useLatestBlog";

function SideBar() {
  const { isPending, error, latestblogs } = useLatestBlog();

  if (!latestblogs || latestblogs.length === 0) {
    return <p className="text-center text-gray-500">No items found</p>;
  }

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mr-5">
      <div>
        <h3 className="text-2xl font-semibold ml-30 md:ml-10  mb-5 ">
          Latest post
        </h3>
      </div>
      <div>
        {latestblogs.map((blog) => (
          <div
            className="w-[290px] mb-10 my-5 border-b-1  border-spacing-2 px-4 ml-13"
            key={blog.id}
          >
            <Link to={`/blog/${blog.id}`}>
              <h1
                className={`${
                  blog.category === "sports"
                    ? "bg-green-500"
                    : blog.category === "tech"
                    ? "bg-black text-white"
                    : blog.category === "politics"
                    ? "bg-red-500"
                    : blog.category === "entertainment"
                    ? "bg-yellow-500"
                    : ""
                } font-medium p-1 w-fit mb-2`}
              >
                {blog.category}
              </h1>
              <h4 className="flex flex-col gap-30 hover:text-blue-600 font-bold mb-2 hover:underline hover:underline-offset-2">
                {blog.title}...
              </h4>
              <p className="flex gap-3 hover:text-orange-500">
                Read More <FaLongArrowAltRight className="mt-1" />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
