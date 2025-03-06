import { Link } from "react-router"; // Fixed import for react-router-dom
import { FaUserCircle } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

function BlogCard({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return (
      <p className="max-w-7xl   flex justify-between items-center text-center text-gray-500">
        No items found
      </p>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 md:ml-25 ">
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          className="p-3  shadow-lg rounded cursor-pointer"
          to={`/blog/${blog.id}`}
        >
          <div>
            <img
              src={blog.image}
              alt={blog.title} // Use dynamic alt text for accessibility
              className="md:w-[400px] w-full h-[350px] object-cover rounded"
            />
          </div>

          <h3 className="mt-4 mb-10 font-bold hover:text-blue-600 hover:underline hover:underline-offset-4 ring-offset-2 cursor-pointer text-2xl w-[400px]">
            {blog.title}
          </h3>

          <p className="mb-4 flex gap-2 font-medium">
            <MdAccessTime className="mt-1" /> {formatDate(blog.created_at)}
          </p>
          <div className="flex justify-between">
            <p className="mb-2 text-gray-600 font-medium">
              <FaUserCircle className="inline-flex items-center mr-2 font-medium" />
              {blog.author}
            </p>
            <p
              className={`mr-16 md:mr-3 ${
                blog.category === "sports"
                  ? "bg-green-500"
                  : blog.category === "tech"
                  ? "bg-black text-white"
                  : blog.category === "politics"
                  ? "bg-red-500"
                  : blog.category === "entertainment"
                  ? "bg-yellow-500"
                  : ""
              } p-2 rounded font-bold `}
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
