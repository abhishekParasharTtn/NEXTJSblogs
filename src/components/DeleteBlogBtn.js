"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

function DeleteBlogBtn({ blogId }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onDeleteBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/blogs/${blogId}`);
      toast.success(response.data.message);
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Loader />}
      <button className="btn-outlined" onClick={onDeleteBlog}>
        Delete
      </button>
    </>
  );
}

export default DeleteBlogBtn;
