import { Link } from "react-router"; // Fixed import for react-router-dom
import { FaUserCircle } from "react-icons/fa";

function BlogCard({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-gray-500">No items found</p>;
  }

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          className="p-5 shadow-lg rounded cursor-pointer"
          to={`/blog/${blog.id}`}
        >
          <div>
            <img
              src={blog.image}
              alt={blog.title} // Use dynamic alt text for accessibility
              className="w-full h-[350px] object-cover rounded"
            />
          </div>

          <h3 className="mt-4 mb-7 font-bold hover:text-blue-600 hover:underline hover:underline-offset-4 ring-offset-2 cursor-pointer text-2xl">
            {blog.title}
          </h3>
          <div className="flex justify-between">
            <p className="mb-2 text-gray-600">
              <FaUserCircle className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p
              className={`mr-10 ${
                blog.category === "sports"
                  ? "bg-green-500"
                  : blog.category === "tech"
                  ? "bg-black text-white"
                  : blog.category === "politics"
                  ? "bg-red-500"
                  : blog.category === "entertainment"
                  ? "bg-yellow-500"
                  : ""
              } p-2 rounded font-bold`}
            >
              {blog.category}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogCard;
