import "./login.scss";
import { useContext, useState } from "react";
import { LinkToPages } from "../../components/linkToPages/LinkToPages";
// import { login } from "../../authContext/apiCalls";
// import { AuthContext } from "../../authContext/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const { dispatch } = useContext(AuthContext);

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     login({ email, password }, dispatch);
  //   };

  return (
    <div className="login">
      <LinkToPages />
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sing In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button className="loginButton" onClick={handleLogin}> */}
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sing Up Now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA ot ensyre you're not a robot.
            <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}
