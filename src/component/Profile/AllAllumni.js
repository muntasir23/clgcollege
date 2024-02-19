import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import Loading from "../Loading";
import "./Students.css";

export default function AllAllumni() {
  const [allumnis, setAllumni] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [session, setSession] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { currentUser } = useAuth();

  const handleFilerPage = async () => {
    setLoading(true)
    try {
      const appUrl = `https://studentsbackend-v1du.onrender.com/paginatedAllumni?name=${name}&phone=${phone}&session=${session}&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(appUrl);
      if (!response.ok) {
        throw new Error("Network none");
      }

      const data = await response.json();
      //   setRow(data.row);
      console.log(data.rows);
      setAllumni(data.rows);
      setLoading(false)
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
  }, [page, name, session, phone]);

  const handleDelete = (id) => {
    axios
      .delete("https://studentsbackend-v1du.onrender.com/api/allumni/" + id)
      .then((res) => {
        console.log(res);
        // window.location.reload();
        alert("Allumni deleted seccessfully...!");
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

        <div>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your Phone"
            className="searchInputs"
          />
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
              <th>Email</th>
              <th>Phone</th>
              <th>Company Name</th>
              <th>Designation</th>
              <th>Session</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && <Loading />}
            {allumnis.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.companyName}</td>
                <td>{value.designation}</td>
                <td>{value.session}</td>

                {currentUser ? (
                  <>
                    <td>
                      <button onClick={(e) => handleDelete(value._id)}>
                        <MdDelete />
                      </button>
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
        {!loading && allumnis.length === 0 ? (
          <h1>No Allumni Data Found...!</h1>
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
