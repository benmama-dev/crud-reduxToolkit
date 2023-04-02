import { useState } from "react";
import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "./component/Create/Create";
import Update from "./component/Update/Update";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
