import React from "react";
import "./Gallery.css";
import { useAuth } from "../../context/AuthContext";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import DeleteBlog from "../Blogs/DeleteBlog";
import { Link } from "react-router-dom";

export default function GalleryCompo(props) {
  const { cata, desc, imgUrl, createdAt, id, userId} = props.value;

  const { currentUser } = useAuth();

  console.log(cata, imgUrl, createdAt);

  return (
    <div className="gallerycard">
      <div className="img-holder">
        <img alt="" src={imgUrl} />
      </div>
      <div>
        <p className="p">{desc}</p>
        <div className="delete-visit">
          <p>{createdAt.toDate().toDateString()}</p>
          <div className="delete-visit">
            {currentUser && currentUser.uid === userId ? (
              <div className="delete-icon">
                <DeleteBlog id={id} imgUrl={imgUrl} />
              </div>
            ) : (
              <></>
            )}

            <Link to={`/singlearticle/${id}`} className="btn-view">
              <HiMiniViewfinderCircle />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
