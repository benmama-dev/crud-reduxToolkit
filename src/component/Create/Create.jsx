import React, { useState } from "react";
import "./Create.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/slice/UserSlice";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(
      addUser({
        id,
        name,
        email,
      })
    );
    navigate("/");
  };

  return (
    <div className="container">
      <div className="area001">
        <div className="area-normal">
          <h1>Add New User</h1>
          <Link to="/" className="btn-black">
            Black
          </Link>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="from-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="from-control">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
