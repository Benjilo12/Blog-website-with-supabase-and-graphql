import { useSearchParams } from "react-router";
import BlogCard from "../component/BlogCard";
import Filter from "../component/Filter";
import { useBlog } from "../services/useBlog";
import SideBar from "../component/SideBar";
import Pagination, { PAGE_SIZE } from "../component/Pagination";
import Loader from "../component/Loader";

function Blogs() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { isPending, blogs, error, count } = useBlog(page, PAGE_SIZE); // Pass the page to useBlog

  if (isPending) return <Loader />;

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
      <div className="flex flex-col lg:flex-row gap-5">
        <BlogCard blogs={filteredBlogs} />
        <SideBar />
      </div>
      <Pagination count={count} />
    </div>
  );
}

export default Blogs;
