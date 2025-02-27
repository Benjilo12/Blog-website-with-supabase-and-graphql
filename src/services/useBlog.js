import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "./apiBlogs";

export function useBlog(page = 1, pageSize = 9) {
  const {
    isLoading: isPending, // React Query uses `isLoading` instead of `isPending`
    data: { data: blogs, count } = {},
    error,
  } = useQuery({
    queryKey: ["blog", page], // Add page as a key to trigger refetch when the page changes
    queryFn: () => getBlogs(page, pageSize), // Pass page and pageSize to the `getBlogs` function
    keepPreviousData: true, // Keeps the previous data while fetching new page data
  });

  return { isPending, error, blogs, count };
}
