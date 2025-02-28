import { useParams } from "react-router";
import { useBlog } from "../services/useBlog";

import { MdAccessTime } from "react-icons/md";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const calculateReadingTime = (text) => {
  const wordsPerMinute = 150;
  const textLength = text.split(/\s+/).length;
  const readingTime = Math.ceil(textLength / wordsPerMinute);
  return readingTime;
};

function BlogDetails() {
  const { id } = useParams();
  const { isPending, blogs, error } = useBlog();
  const blog = blogs.find((blog) => blog.id === parseInt(id)); // Find the project by ID

  if (!blog || blog.length === 0) {
    return <p className="text-center text-gray-500">No items found</p>;
  }

  const readingTime = calculateReadingTime(blog.content);

  console.log(readingTime);
  return (
    //blog details
    <div className="max-w-7xl mx-auto my-12">
      <div className="lg:w-3/4 max-auto">
        <div>
          <div className="mb-4 flex gap-4 text-[1.2rem]">
            <p className="font-medium">By: {blog.author}</p>
            <p className=" flex gap-2 font-bold">
              Date: {formatDate(blog.created_at)}
            </p>
            <p className="flex gap-1">
              <MdAccessTime className="mt-1.5" />
              Read time: {readingTime}min
            </p>
          </div>
          <h3 className="text-3xl font-bold mb-5 text-blue-500 cursor-pointer">
            {blog.title}
          </h3>
          <img
            src={blog.image}
            alt="image"
            className="w-full mx-auto rounded bg-cover h-auto mb-10"
          />
          <p className="text-lg tracking-wide leading-8 text-black mb-6">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
