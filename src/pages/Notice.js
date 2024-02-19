import React from "react";
import Notices from "../component/Blogs/Notices";
import Loading from "../component/Loading";
import useNotice from "../useContext/useNotice";
import useNoticePaginated from "../useContext/useNoticePaginated";

export default function Notice() {
  const { notice } = useNotice();

  const { articles, loading, handleLoadMore } = useNoticePaginated();

  return (
    <>
      <div>
        <div className="notice-card-holder">
          <h2 className="blog-H1">All Notices</h2>
          {loading && <Loading />}
          {!loading && articles.length === 0 ? <h1>No blog Found!</h1> : <></>}
          {articles.map((value, index) => (
            <Notices value={value} key={index} />
          ))}
        </div>
      </div>

      <div className="load-more-btn">
        {articles.length === notice.length ? (
          articles.length < 5 ? (
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
