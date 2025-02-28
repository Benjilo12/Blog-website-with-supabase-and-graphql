import { Link } from "react-router";
import { useLatestBlog } from "../services/useLatestBlog";

function Footer() {
  const { isPending, error, latestblogs } = useLatestBlog();

  if (!latestblogs || latestblogs.length === 0) {
    return <p className="text-center text-gray-500">No items found</p>;
  }

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const latestBlogsLimited = latestblogs?.slice(0, 4);
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid grid-cols-2 gap-7 lg:col-span-4 md:grid-cols-4 mb-5">
          <div>
            <div className="text-white">
              <p className="font-medium tracking-wide text-gray-300 underline underline-offset-6 mb-2">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    Tech
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    Politics
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    Sports
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    Entertainment
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-white">
              <p className="font-medium tracking-wide text-gray-300 underline underline-offset-6 mb-2">
                Useful Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    Advertising
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-white">
              <p className="font-medium tracking-wide text-gray-300 underline underline-offset-6 mb-2">
                Latest News
              </p>
              <ul className="mt-2 space-y-2">
                {latestBlogsLimited?.map((blog) => (
                  <Link to={`/blog/${blog.id}`} key={blog.id}>
                    <li className="text-gray-500 transition-colors duration-300 hover:text-white mb-2 hover:underline hover:underline-offset-4">
                      {blog.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="text-white md:ml-17">
              <p className="font-medium tracking-wide text-gray-300 underline underline-offset-6 mb-6">
                Subscription
              </p>
              <form className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-grow md:w-full w-[70%] h-8 px-4 mb-7 transition duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none focus:shadow-out text-gray-700 "
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-30 h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-600 md:mt-3 hover:bg-amber-500"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci iure omnis corporis blanditiis dolore? Tempora atque
                modi vero quis eum.
              </p>
            </div>
          </div>
        </div>
        <div className="text-gray-500 pt-3 pb-10 border-t border-gray-800">
          <p>©Copyright@2025 | All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
