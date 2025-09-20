
// interface BlogId {
//     params: {
//         blogId: string;
//     }

import BlogDetails from "@/components/ui/BlogDetails";
import { BlogId } from "@/types";

// }
const BlogDetailPage = async ({ params }: BlogId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
        cache: "no-store",
    });
    const blog = await res.json();
    // console.log(blog);
  return (
    <div className="my-10">
       <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailPage;
