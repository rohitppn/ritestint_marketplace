import { blog1 } from "@/data/blog";
import BlogCard3 from "../card/BlogCard3";
import Category1 from "../element/Category1";
import RecentPost1 from "../element/RecentPost1";
import Search1 from "../element/Search1";
import Tag1 from "../element/Tag1";
import Pagination1 from "./Pagination1";

export default function BlogArea2() {
  return (
    <>
      <section className="our-blog pt40">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-8">
              {blog1.slice(12, 15).map((item,i) => (
                <BlogCard3 key={ i } data={item} />
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
