import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../data/data";
let users = JSON.parse(localStorage.getItem("users")) || [];
const userSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    addUser: (state, action) => {
      users = action.payload;
      state.push(users);
      // console.log(action);
      localStorage.setItem("users", JSON.stringify(state));
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload || { id };
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload || {};
      const uu = state.find((user) => user.id == id);
      if (uu) {
        const filteredUsers = state.filter((f) => f.id !== id);
        localStorage.setItem("users", JSON.stringify(filteredUsers));
        return filteredUsers;
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
