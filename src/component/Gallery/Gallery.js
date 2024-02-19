import React from "react";
import useBlog from "../../useContext/useBlog";
import usePaginatedBlog from "../../useContext/useBlogPaginated";
import Loading from "../Loading";
import GalleryCompo from "./GalleryCompo";

export default function Gallery() {
  const { article } = useBlog();

  const { articles, loading, handleLoadMore } = usePaginatedBlog();

  return (
    <>
      <div className="blog-header">
        <h1>Our Gallery</h1>
      </div>

      {loading && <Loading />}
      {!loading && article.length === 0 ? <h1>No Image found...!</h1> : <></>}
      <div className="gallery-holder">
        {articles.map((value, index) => (
          <GalleryCompo value={value} key={index} loading={loading} />
        ))}
      </div>

      <div className="load-more-btn">
        {articles.length === article.length ? (
          articles.length < 10 ? (
            ""
          ) : (
            <button onClick={handleLoadMore}>
              {loading ? <Loading /> : "No More Blogs"}
            </button>
          )
        ) : (
          <button onClick={handleLoadMore}>
            {loading ? <Loading /> : "Watch More Blogs"}
          </button>
        )}
      </div>
    </>
  );
}
