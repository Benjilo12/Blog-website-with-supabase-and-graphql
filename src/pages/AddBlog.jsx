import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Datepicker } from "flowbite-react";
import { useForm } from "react-hook-form";
import { createBlog } from "../services/apiBlogs"; // Ensure this path is correct
import { useState } from "react";

function AddBlog() {
  const queryClient = useQueryClient();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { mutate, isPending } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      console.log("New blog added successfully");
      queryClient.invalidateQueries({ queryKey: ["blog"] });
      reset(); // Clear the form after successful submission
    },
    //
  });

  const { register, handleSubmit, reset } = useForm();

  // Handle form submission
  function onSubmit(data) {
    // Attach the date to the data object
    data.created_at = selectedDate.toISOString(); // Attach the date
    console.log(data);

    // Call mutate with the form data
    mutate(data);
  }

  return (
    <div className="h-auto">
      <div className="py-25 bg-slate-500 bg-gradient-to-b from-black/15 to-black/50 w-full text-center text-white px-4">
        <h1 className="text-6xl">Add New Blog</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center mt-15 mb-36"
      >
        {/* Title Field */}
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="mb-5 text-center text-2xl font-bold"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            placeholder="Title"
            className="w-2xl h-10 placeholder:text-gray-500 placeholder:ml-4 border-black-300 rounded shadow-sm focus:border-purple-400 focus:shadow-out text-gray-700 pl-2"
          />
        </div>

        {/* Content Field */}
        <div className="flex flex-col mt-7">
          <label
            htmlFor="content"
            className="mb-5 text-center text-2xl font-bold"
          >
            Content
          </label>
          <textarea
            id="content"
            {...register("content", { required: true })}
            rows="7"
            cols="90"
            placeholder="Enter your content"
            className="pl-2 text-gray-500 placeholder:font-bold"
          />
        </div>

        {/* Author Field */}
        <div className="flex flex-col mt-6">
          <label
            htmlFor="author"
            className="mb-5 text-center text-2xl font-bold"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            {...register("author", { required: true })}
            placeholder="Author"
            className="w-1xl h-10 placeholder:text-gray-500 placeholder:ml-4 border-black-300 rounded shadow-sm focus:border-purple-400 focus:shadow-out text-gray-700 pl-2"
          />
        </div>

        {/* Category Select */}
        <div className="flex flex-col mt-6">
          <label
            htmlFor="category"
            className="mb-5 text-center text-2xl font-bold"
          >
            Select a Category
          </label>
          <select
            id="category"
            {...register("category", { required: true })}
            className="w-3xs"
          >
            <option value="">Select Category</option>
            <option value="Tech">Tech</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        {/* Datepicker for Date */}
        <div className="mt-15">
          <Datepicker selected={selectedDate} onChange={setSelectedDate} />
        </div>

        {/* Image Upload */}
        <div className="mt-10 flex flex-col">
          <label
            htmlFor="image"
            className="mb-5 text-center text-2xl font-bold"
          >
            Select an Image
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
            className="ml-20"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-20 bg-blue-600 py-3 px-15 rounded cursor-pointer font-medium"
        >
          {isPending ? "Adding..." : "Add New Blog"}
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
