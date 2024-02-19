import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loading from "../Loading";
import "./Students.css";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [cata, setCata] = useState("");
  const [session, setSession] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { currentUser } = useAuth();

  // useEffect(() =>{
  //   axios.get("https://studentsbackend-v1du.onrender.com/api/students")
  //   .then((result) =>{
  //      console.log(result.data);
  //      setStudents(result.data)
  //     }).catch(err => console.log(err))
  // },[])

  const handleFilerPage = async () => {
    setLoading(true);
    try {
      const appUrl = `https://studentsbackend-v1du.onrender.com/paginated?name=${name}&cata=${cata}&session=${session}&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(appUrl);
      if (!response.ok) {
        throw new Error("Network none");
      }

      const data = await response.json();
      //   setRow(data.row);
      console.log(data.rows);
      setStudents(data.rows);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDecrement = () => {
    setPage(page - 1);
  };
  const handleIncrement = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    handleFilerPage();
  }, [page, name, session, cata]);

  const handleDelete = (id) => {
    axios
      .delete("https://studentsbackend-v1du.onrender.com/api/students/" + id)
      .then((res) => {
        console.log(res);
        // window.location.reload();
        alert("Students deleted seccessfully...!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="searchbar-section">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="searchInputs"
          />
        </div>
        {/* <div>
        <label>Category:</label>
        <input
          type="text"
          value={cata}
          onChange={(e) => setCata(e.target.value)}
        />
      </div> */}
        <div>
          <select
            onChange={(e) => setCata(e.target.value)}
            className="searchInputs"
          >
            <option>Hons</option>
            <option>Masters</option>
            <option>Degree</option>
            <option>Inter</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            placeholder="Enter Your Session"
            className="searchInputs"
          />
        </div>
      </div>

      <div className="from-holder">
        <table className="table-container">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Registration</th>
              <th>Session</th>
              <th>Class Roll</th>
              <th>Present</th>
              <th>Catagory</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <div className="loading-divs">
                <Loading />
              </div>
            )}
            {students.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.reg}</td>
                <td>{value.session}</td>
                <td>{value.roll}</td>
                <td>{Math.ceil((value.attendence / value.days) * 100)}%</td>
                <td>{value.cata}</td>

                {currentUser ? (
                  <>
                    <td>
                      <button onClick={(e) => handleDelete(value._id)}>
                        <MdDelete />
                      </button>
                    </td>
                    <td>
                      <Link to={`/updatestudent/${value._id}`}>
                        <AiFillEdit />
                      </Link>
                    </td>
                  </>
                ) : (
                  <></>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        {!loading && students.length === 0 ? (
          <h1>No Students Data Found...!</h1>
        ) : (
          <></>
        )}
      </div>

      <div className="button-sections">
        <div>
          <button onClick={handleDecrement} disabled={page === 1}>
            Prev
          </button>
          <button onClick={handleIncrement}>Next</button>
        </div>
      </div>
    </>
  );
}
