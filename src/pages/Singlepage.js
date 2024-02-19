import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../component/Loading";
import { db } from "../firebaseConfigue";

export default function Singlepage() {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "Blog", id);
    onSnapshot(docRef, (snapshot) => {
      setSingleBlog({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
    });
  }, [id]);

  console.log("Rerender singlepage");

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="single-data">
          <img alt="" src={singleBlog.imgUrl} />
        </div>
      )}
    </>
  );
}
