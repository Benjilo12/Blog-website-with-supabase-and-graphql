import supabase from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function getBlogs(page = 1, pageSize = 9) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data, error, count } = await supabase
    .from("blogs")
    .select("*", { count: "exact" }) // Gets the exact count for pagination
    .range(start, end); // Fetch only the blogs for the current page

  if (error) {
    console.error(error);
    throw new Error("Blogs could not be loaded");
  }

  return { data, count };
}

//blog id
export async function getBlogById(id) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single(); // Ensures only one blog is returned

  if (error) {
    console.error(error);
    throw new Error("Blog not found");
  }

  return data;
}

//latest blog
export const fetchLatestBlog = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false }) // Order by newest first
    .limit(5); // Get only the latest blog post

  if (error) {
    throw new Error(error.message);
  }

  return data; // Return the latest blog post
};

// Generate a unique filename and upload the image
export async function uploadImage(file) {
  const uniqueId = uuidv4(); // Generate a unique ID
  const fileName = `${uniqueId}_${file.name}`;

  const { data, error } = await supabase.storage
    .from("blog-images")
    .upload(`blogs/${fileName}`, file, { upsert: true });

  if (error) {
    throw new Error("Image upload failed");
  }

  // Corrected way to get the public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from("blog-images").getPublicUrl(`blogs/${fileName}`);

  return { publicUrl, uniqueId }; // Return both public URL and ID
}

export async function createBlog(blogData) {
  const { image, ...otherData } = blogData;

  let imageUrl = null;
  if (image && image instanceof File) {
    // Ensure it's a file object
    try {
      const { publicUrl } = await uploadImage(image);
      imageUrl = publicUrl;
    } catch (err) {
      console.error("Image upload failed:", err);
      throw err;
    }
  }

  // Ensure uniqueness check
  const { data: existingBlog } = await supabase
    .from("blogs")
    .select("id")
    .eq("title", otherData.title)
    .single();

  if (existingBlog) {
    throw new Error("A blog with this title already exists");
  }

  // Insert blog data with image URL
  const { data, error } = await supabase
    .from("blogs")
    .insert([{ ...otherData, image: imageUrl }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
