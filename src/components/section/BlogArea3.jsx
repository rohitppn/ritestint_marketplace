import { blog1 } from "@/data/blog";
import Category1 from "../element/Category1";
import RecentPost1 from "../element/RecentPost1";
import Search1 from "../element/Search1";
import Tag1 from "../element/Tag1";
import Pagination1 from "./Pagination1";
import BlogCard4 from "../card/BlogCard4";

export default function BlogArea3() {
  const blogData = blog1.slice(16, 19);
  const lastIndex = blogData[blogData.length - 1]?.id;
  return (
    <>
      <section className="our-blog pt40">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-8">
              {blog1.slice(16, 19).map((item,i) => (
                <BlogCard4 key={ i } data={item} index={lastIndex} />
              ))}
              <Pagination1 />
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar ms-lg-auto">
                <Search1 />
                <Category1 />
                <RecentPost1 />
                <Tag1 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
