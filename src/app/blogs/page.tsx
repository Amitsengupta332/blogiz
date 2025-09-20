import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
    // next: {
    //   revalidate: 30,
    // },
  });
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="text-3xl font-bold text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center text-xl text-gray-500 w-2/4 mx-auto">
        <i>
          Driving into real world problems and solving them with the help of
          technology. We are here to help you.
        </i>
      </p>

      <div className="grid  grid-cols-3 gap-4 my-5">
        {blogs.map((blog :Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
