import axios from "axios";
import BlogForm from "../../../components/blogForm";

async function getBlog(id) {
  try {
    const response = await axios.get(`${process.env.domain}/api/blogs/${id}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

async function page({ params }) {
  const blog = await getBlog(params.blogid);
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-gray-800">Edit Blogs</h1>
      <hr />
      <BlogForm blogData={blog} />
    </div>
  );
}

export default page;
