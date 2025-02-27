import { useQuery } from "@tanstack/react-query";
import { fetchLatestBlog } from "./apiBlogs";

export function useLatestBlog() {
  const {
    isPending,
    data: latestblogs,
    error,
  } = useQuery({
    queryKey: ["latestBlog"],
    queryFn: fetchLatestBlog,
    staleTime: 1000 * 60 * 5,
  });
  return { isPending, error, latestblogs };
}

// export function useBlog() {
//   const {
//     isPending,
//     data: blogs,
//     error,
//   } = useQuery({
//     queryKey: ["blog"],
//     queryFn: getBlogs,
//   });
//   return { isPending, error, blogs };
// }
