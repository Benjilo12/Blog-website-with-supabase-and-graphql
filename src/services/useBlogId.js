import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "./apiBlogs";

export function useSingleBlog(id) {
  const {
    isLoading,
    data: blog,
    error,
  } = useQuery({
    queryKey: ["blog", id], // Ensure React Query fetches by ID
    queryFn: () => getBlogById(id),
    enabled: !!id, // Only run if ID is available
  });

  return { isLoading, blog, error };
}
