import { useSearchParams } from "react-router";
import BlogCard from "../component/BlogCard";
import Filter from "../component/Filter";
import { useBlog } from "../services/useBlog";

function Blogs() {
  const { isPending, blogs, error } = useBlog();
  const [searchParams] = useSearchParams();

  if (isPending)
    return (
      <h1 className="flex justify-center items-center h-screen">
        isloading....
      </h1>
    );

  const filterValue = searchParams.get("category") || "all";

  let filteredBlogs = blogs;
  if (filterValue === "tech")
    filteredBlogs = blogs.filter((blog) => blog.category === "tech");
  if (filterValue === "politics")
    filteredBlogs = blogs.filter((blog) => blog.category === "politics");
  if (filterValue === "sports")
    filteredBlogs = blogs.filter((blog) => blog.category === "sports");
  if (filterValue === "entertainment")
    filteredBlogs = blogs.filter((blog) => blog.category === "entertainment");

  return (
    <div className="my-20 text-black">
      <Filter />
      <BlogCard blogs={filteredBlogs} />
    </div>
  );
}

export default Blogs;
