import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "./apiBlogs";
export function useBlog() {
  const {
    isPending,
    data: blogs,
    error,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: getBlogs,
  });
  return { isPending, error, blogs };
}
