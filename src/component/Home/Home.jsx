import React from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../store/slice/UserSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelate = (id) => {
    dispatch(
      deleteUser({
        id: id,
      })
    );
  };
  return (
    <div className="container">
      <div className="area">
        <div className="area01">
          <h1>CRUD REDUX</h1>
          <Link to="/create" className="btn-create">
            Create
          </Link>
        </div>
        {users && users.length > 0 ? (
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
          <h2 style={{textAlign:"center", marginTop: "20px"}}>Data Not Found</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
