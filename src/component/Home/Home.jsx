import React, { useState } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../store/slice/UserSlice";
import Swal from "sweetalert2";
import { Oval } from  'react-loader-spinner'

const Home = () => {
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleDelate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this! By ${id}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deleteUser({
            id: id,
          })
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="container">
      <div className="area">
        {loading ? (
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
        ) : (
          <>
            <div className="area01">
              <h1>CRUD REDUX</h1>
              <Link to="/create" className="btn-create">
                Create
              </Link>
            </div>
            {users.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link to={`/update/${item.id}`} className="btn-blue">
                          Edit
                        </Link>
                        <Link
                          onClick={() => handleDelate(item.id)}
                          className="btn-red"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h2 style={{ textAlign: "center", marginTop: "20px" }}>
                Data Not Found
              </h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
