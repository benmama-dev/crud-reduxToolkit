import React, { useState } from "react";
import "../Create/Create.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/slice/UserSlice";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="container">
      <div className="area001">
        <div className="area-normal">
          <h1>Update User</h1>
          <Link to="/" className="btn-black">
            Black
          </Link>
        </div>
        <form action="" onSubmit={handleUpdate}>
          <div className="from-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={uname}
            />
          </div>
          <div className="from-control">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={uemail}
            />
          </div>
          <button className="btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
