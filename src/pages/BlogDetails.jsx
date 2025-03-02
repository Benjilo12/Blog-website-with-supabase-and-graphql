import { useParams } from "react-router";
// Use the new hook

import { MdAccessTime } from "react-icons/md";
import { useSingleBlog } from "../services/useBlogId";
import SideBar from "../component/SideBar";

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
  const { isLoading, blog, error } = useSingleBlog(id); // Fetch single blog

  if (isLoading)
    return (
      <p className="text-center text-gray-500 max-w-full h-screen">
        Loading...
      </p>
    );
  if (error || !blog)
    return (
      <p className="text-center text-gray-500 max-w-full h-screen">
        No blog found
      </p>
    );

  const readingTime = calculateReadingTime(blog.content);

  return (
    <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
      <div className="lg:w-3/4 max-auto">
        <div>
          <div className="mb-4 flex gap-4 text-[1.2rem]">
            <p className="font-medium">By: {blog.author}</p>
            <p className="flex gap-2 font-bold">
              Date: {formatDate(blog.created_at)}
            </p>
            <p className="flex gap-1">
              <MdAccessTime className="mt-1.5" />
              Read time: {readingTime} min
            </p>
          </div>
          <h3 className="text-3xl font-bold mb-5 text-blue-500 cursor-pointer">
            {blog.title}
          </h3>
          <img
            src={blog.image}
            alt="Blog cover"
            className="w-full mx-auto rounded bg-cover h-auto mb-10"
          />
          <p className="md:text-lg mx-auto md:m-0 text-base tracking-wide leading-8 text-black mb-6">
            {blog.content}
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 lg:mt-30">
        <SideBar />
      </div>
    </div>
  );
}

export default BlogDetails;
