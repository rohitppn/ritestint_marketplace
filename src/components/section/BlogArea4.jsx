"use client";
import Image from "next/image";
import Comment1 from "../element/Comment1";
import ReviewForm1 from "../element/ReviewForm1";
import { useParams } from "next/navigation";
import { blog1 } from "@/data/blog";

export default function BlogArea4() {
  const param = useParams();

  const blogSingle = blog1.find((item) => item.id == param.id);
  return (
    <>
      <section className="our-blog pt40">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="100ms">
            <div className="col-lg-12">
              {blogSingle ? (
                <h2 className="blog-title">{blogSingle.title}</h2>
              ) : (
                <h2 className="blog-title">
                  Engendering a culture of professional development
                </h2>
              )}

              {blogSingle ? (
                <div className="blog-single-meta">
                  <div className="post-author d-sm-flex align-items-center">
                    <Image
                      height={40}
                      width={40}
                      className="mr10 object-fit-contain"
                      src={blogSingle?.author.img}
                      alt="img"
                    />
                    <a className="pr15 body-light-color">Leslie Alexander</a>
                    <a className="ml15 pr15 body-light-color">Business</a>
                    <a className="ml15 body-light-color">December 2, 2022</a>
                  </div>
                </div>
              ) : (
                <div className="blog-single-meta">
                  <div className="post-author d-sm-flex align-items-center">
                    <Image
                      height={40}
                      width={40}
                      className="mr10 object-fit-contain"
                      src="/images/blog/author-1.png"
                      alt="img"
                    />
                    <a className="pr15 body-light-color">Leslie Alexander</a>
                    <a className="ml15 pr15 body-light-color">Business</a>
                    <a className="ml15 body-light-color">December 2, 2022</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="mx-auto maxw1600 mt60 wow fadeInUp"
          data-wow-delay="300ms"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="large-thumb">
                {blogSingle ? (
                  <Image
                    height={530}
                    width={1501}
                    className="w-100 h-auto bdrs16 object-fit-cover"
                    src={blogSingle.img}
                    style={{
                      maxHeight: "476px",
                      objectPosition: "top",
                    }}
                    alt="single blog"
                  />
                ) : (
                  <Image
                    height={530}
                    width={1501}
                    className="w-100 h-100 bdrs16 object-fit-conver"
                    src="/images/blog/blog-single-1.jpg"
                    alt="single blog"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="roww wow fadeInUp" data-wow-delay="500ms">
            <div className="col-xl-8 offset-xl-2">
              <div className="ui-content mt45 mb60">
                <h5 className="mb20">
                  Bringing the culture of sharing to everyone
                </h5>
                <p className="mb25 ff-heading text">
                  Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan
                  nec. Quisque bibendum orci ac nibh facilisis, at malesuada
                  orci congue. Nullam tempus sollicitudin cursus. Ut et
                  adipiscing erat. Curabitur this is a text link libero tempus
                  congue.
                </p>
                <p className="ff-heading text">
                  Duis mattis laoreet neque, et ornare neque sollicitudin at.
                  Proin sagittis dolor sed mi elementum pretium. Donec et justo
                  ante. Vivamus egestas sodales est, eu rhoncus urna semper eu.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Integer tristique elit lobortis purus
                  bibendum, quis dictum metus mattis. Phasellus posuere felis
                  sed eros porttitor mattis. Curabitur massa magna, tempor in
                  blandit id, porta in ligula. Aliquam laoreet nisl massa, at
                  interdum mauris sollicitudin et.
                </p>
              </div>
              <div className="blockquote-style1 mb60">
                <blockquote className="blockquote">
                  <p className="fst-italic fz15 fw500 ff-heading dark-color">
                    Aliquam hendrerit sollicitudin purus, quis rutrum mi
                    accumsan nec. Quisque bibendum orci ac nibh facilisis, at
                    malesuada orci congue.
                  </p>
                  <h5 className="quote-title">Luis Pickford</h5>
                </blockquote>
              </div>
              <div className="ui-content">
                <h4 className="title mb25">What you'll learn</h4>
              </div>
              <div className="row">
                <div className="col-auto">
                  <div className="ui-content">
                    <div className="list-style1">
                      <ul>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Become a UI/UX designer.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          You will be able to start earning money Figma skills.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Build a UI project from beginning to end.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Work with colors &amp; fonts.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          You will create your own UI Kit.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-auto ms-xl-5">
                  <div className="ui-content">
                    <div className="list-style1">
                      <ul>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Build &amp; test a complete mobile app.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Learn to design mobile apps &amp; websites.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Design 3 different logos.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Create low-fidelity wireframe.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Downloadable exercise files.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt40">
                <Image
                  height={456}
                  width={937}
                  src="/images/blog/blog-single-2.jpg"
                  alt="blog-single"
                  className="bdrs4 post-img-2 w-100 h-100 object-fit-contain"
                />
              </div>
              <div className="ui-content mt40 mb30">
                <h4 className="mb20">Requirements</h4>
                <div className="custom_bsp_grid">
                  <ul className="list-style-type-bullet p-0 ml20">
                    <li>
                      We do not require any previous experience or pre-defined
                      skills to take this course. A great orientation
                      <br className="d-none d-lg-block" />
                      would be enough to master UI/UX design.
                    </li>
                    <li>A computer with a good internet connection.</li>
                    <li>Adobe Photoshop (OPTIONAL)</li>
                  </ul>
                </div>
              </div>
              <div className="bdrt1 bdrb1 d-block d-sm-flex justify-content-between pt50 pt30-sm pb50 pb30-sm">
                <div className="blog_post_share d-flex align-items-center mb10-sm">
                  <span className="me-2">Share this post</span>
                  <a>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a>
                    <i className="fab fa-twitter" />
                  </a>
                  <a>
                    <i className="fab fa-instagram" />
                  </a>
                  <a>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
                <div className="bsp_tags d-flex">
                  <a className="mr10">Figma</a>
                  <a className="mr10">Sketch</a>
                  <a>HTML5</a>
                </div>
              </div>
              <div className="bsp_comments bdrb1 d-block d-sm-flex justify-content-between pt30 pb45 pb30-sm">
                <div className="mbp_first d-flex">
                  <div className="flex-shrink-0">
                    <Image
                      height={70}
                      width={70}
                      src="/images/blog/comments-1.png"
                      className="mr-3"
                      alt="comments-1.png"
                    />
                  </div>
                  <div className="flex-grow-1 ml30">
                    <h5 className="mb0">Brooklyn Simmons</h5>
                    <div className="text fz14 mb20">Medical Assistant</div>
                    <p className="text">
                      Etiam vitae leo et diam pellentesque porta. Sed eleifend
                      ultricies risus, vel rutrum erat commodo ut. Praesent
                      finibus congue euismod. Nullam scelerisque massa vel augue
                      placerat, a tempor sem egestas. ,
                      <br />
                      Curabitur placerat finibus lacus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mbp_pagination_tab bdrb1">
                <div className="row justify-content-between pt45 pt30-sm pb45 pb30-sm">
                  <div className="col-md-6">
                    <div className="pag_prev">
                      <a>
                        <h5>
                          <span className="fas fa-chevron-left pe-2" />
                          Previous Post
                        </h5>
                        <p className="fz14 text mb-0">
                          Given Set was without from god divide rule Hath
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pag_next">
                      <a className="text-end">
                        <h5>
                          Next Post
                          <span className="fas fa-chevron-right ps-2" />
                        </h5>
                        <p className="fz14 text mb-0">
                          Tree earth fowl given moveth deep lesser After
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Comment1 />
              <ReviewForm1 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
