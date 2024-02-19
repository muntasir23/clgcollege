import React, { useState } from "react";
import Bookdata from "../../data/data.json";
import "./Library.css";
import Librarypush from "./Librarypush";

export default function Library() {
  const [bookdata, setBookdata] = useState(Bookdata);
  const [state , setstate] = useState("Select Your Year")

  const filterproduct = (product, y) => {
    const update = Bookdata.filter((x) => {
      return x.cat === product;
    });
    setBookdata(update);
    setstate(y)
  };

  return (
    <div className="main-libray">
      {/* div For filter Property */}
      <div className="library-filter">
        <details>
          <summary className="data-summary">{state}</summary>

          <div className="data-details">
            <div>
              <p onClick={() => filterproduct("hons1" , "Hons 1st Year")}>Hons 1st Year</p>
            </div>
            <div>
              <p onClick={() => filterproduct("hons2" , "Hons 2nd Year")}>Hons 2nd Year </p>
            </div>
            <div>
              <p onClick={() => filterproduct("hons3" , "Hons 3rd Year")}>Hons 3rd Year </p>
            </div>
            <div>
              <p onClick={() => filterproduct("hons4" , "Hons 4th Year")}>Hons 4th Year </p>
            </div>
          </div>
        </details>
      </div>
      {/* div For Data Property */}
      <div className="library-data">
        {bookdata.map((value) => (
          <Librarypush value={value} />
        ))}
      </div>
    </div>
  );
}
