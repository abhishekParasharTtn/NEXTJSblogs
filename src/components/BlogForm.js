"use client";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
function BlogForm({ blogData }) {
  const router = useRouter();
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (blogData) {
      setBlog(blogData);
    }
  }, [blogData]);
  const onSave = async () => {
    try {
      let response;
      if (blogData) {
        response = await axios.put(`/api/blogs/${blogData._id}`, blog);
        setLoader(true);
      } else {
        response = await axios.post(`/api/blogs`, blog);
        setLoader(true);
      }
      toast.success(response.data.message);
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="flex flex-col gap-8">
      {loader && <Loader />}
      <div>
        <label htmlFor="title" className="text-gray-600 text-sm">
          Title
        </label>
        <input
          id="title"
          type="input"
          placeholder="Enter the title"
          value={blog.title}
          onChange={(e) => {
            setBlog({ ...blog, title: e.target.value });
          }}
        />
      </div>

      <div>
        <label htmlFor="description" className="text-gray-600 text-sm">
          Description
        </label>
        <textarea
          id="description"
          type="input"
          placeholder="Enter the description"
          value={blog.description}
          onChange={(e) => {
            setBlog({ ...blog, description: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="image-url" className="text-gray-600 text-sm">
          Image URL
        </label>
        <input
          id="image-url"
          type="input"
          placeholder="Enter the image url"
          value={blog.image}
          onChange={(e) => {
            setBlog({ ...blog, image: e.target.value });
          }}
        />
      </div>

      <div className="flex justify-end gap-8">
        <button className="btn-outlined" onClick={() => router.push("/")}>
          Cancel
        </button>
        <button className="btn-contained" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default BlogForm;
