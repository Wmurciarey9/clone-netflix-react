import "./app.scss";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { Profiles } from "./pages/profiles/Profiles";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </Router>
  );
};

export default App;
