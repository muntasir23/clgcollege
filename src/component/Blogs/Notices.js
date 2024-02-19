import React from "react";

import { useAuth } from "../../context/AuthContext";
import DeleteBlog from "./DeleteBlog";
import Share from './Share'

import './Blogs.css'

export default function Notices(props) {
  const { imgUrl, id, userId, title, createdAt, desc, cata, createdBy } =
    props.value;

  const { currentUser } = useAuth();

  return (
    <div className="blogs">
      <div className="flex-card">
        <h1> @{createdBy}</h1>
        {currentUser && currentUser.uid === userId ? (
          <div className="delete-icon">
            <DeleteBlog id={id} imgUrl={imgUrl} />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex-card">
        <h4>{title}</h4>
        <p>{createdAt.toDate().toDateString()}</p>
      </div>

      <div className="desc-cata">
        <p>{desc}</p>
        <div className="flex-like">
          <button>{cata}</button>
        </div>
      </div>

      <div>
        <Share />
      </div>

      <div>
        <img alt="" src={imgUrl} />
      </div>
    </div>
  );
}
