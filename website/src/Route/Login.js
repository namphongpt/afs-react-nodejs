import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "../assets/login.css";
import ggicons from "../assets/icons/google-btn.png";
import ccimg from "../assets/icons/characteristics.jpg";
import Moment from "moment";
import logo from "../assets/icons/logo.png";
const responseGoogle = response => {
  console.log(response);

  const today = new Date();

  let data = {
    givenname: response.profileObj.givenName,
    familyname: response.profileObj.familyName,
    username: `${response.profileObj.givenName}-${Moment(today).format(
      "YYMMDDhmmss"
    )}`,
    email: response.profileObj.email,
    img_uri: response.profileObj.imageUrl,
    creation_date: today,
  };

  const url = "http://localhost:3002/auth/login/";

  console.log(data);
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(json => {
      if (json[0].validated == true) {
        localStorage.setItem("session_user", json[0].username);
        localStorage.setItem("session_user_id", json[0].id_users);
        localStorage.setItem("session_user_img", json[0].img_uri);
        localStorage.setItem("sessionApp", true);
        console.log(json[0].id_users);
        window.location.href = "/admin";
      }
    });
};

const passencrypt = password => {
  let encode = new Buffer(password);
  return encode.toString("base64");
};

const onLogin = event => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  password = passencrypt(password);

  if (username && password) {
    fetch(
      `${process.env.REACT_APP_API_url_one}/users/${username}/${password}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => response.json())
      .then(json => {
        // console.log(json[0].validated);
        if (json[0].validated === "TRUE") {
          const mssg = document.getElementById("message");
          mssg.classList.add("alert-success");
          mssg.innerText = "welcome loading your session await please...";

          localStorage.setItem("session_user", json[0].username);
          localStorage.setItem("session_user_id", json[0].id_users);
          localStorage.setItem("session_user_img", json[0].img_uri);
          localStorage.setItem("sessionApp", true);

          setTimeout(() => {
            window.location.href = "/admin";
          }, 3000);
        } else {
          localStorage.setItem("session_user", null);
          localStorage.setItem("session_user_id", null);
          localStorage.setItem("session_user_img", null);
          localStorage.setItem("sessionApp", false);
          const mssg = document.getElementById("message");
          mssg.classList.add("alert-danger");
          mssg.innerText = "Username or Password incorrect!";
        }
      });
  } else {
    const mssg = document.getElementById("message");
    mssg.classList.add("alert-danger");
    mssg.innerText = "Username or Password incorrect or all inputs are empty!";
  }
};

const Login = props => {
  return (
    <div className="card login">
      <div className="card-body">
        <div className="row">
          <div className="div-frame-adviced col">
            <div /> <img src={ccimg} /> {" "}
          </div>{" "}
          {" "}
          <div className="div-frame-login col">
            <span className="logo">
              <img className="logo-image" src={logo} />
            </span>{" "}
            {" "}
            <form onSubmit={onLogin}>
              <div className="form-group">
                <label> Username </label> {" "}
                <input id="username" className="form-control" />
              </div>{" "}
              {" "}
              <div className="form-group">
                <label> Password </label> {" "}
                <input type="password" id="password" className="form-control" />
              </div>{" "}
              <div id="message" className="alert" /> {" "}
              <div className="form-group">
                <label>
                  {" "}<input type="checkbox" /> Remenber me{" "}
                </label>{" "}
                <br />
                <a href="#"> recovery my password ? </a>{" "}
              </div>{" "}
              <div className="form-group">
                <button className="btn btn-primary btn-block">
                  {" "} Sign in {" "}
                </button>{" "}
                <p> Or </p> {" "}
                <GoogleLogin
                  clientId="368908477176-71dsa4t0likfb6ku70g169iki23qr4hd.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  render={renderProps =>
                    <button
                      className="btn btn-light btn-block"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <img className="ggicons" src={ggicons} />Sign in with
                      Google {" "}
                    </button>}
                />
                <hr/>
                <a class="btn btn-outline-secondary btn-block" href="/"><i class="fa fa-angle-left" aria-hidden="true"></i> Return to frond</a>
              </div>{" "}
              {" "}
            </form>{" "}
            {" "}
          </div>{" "}
          {" "}
        </div>{" "}
        {" "}
        <div className="card-footer">
          <p className="text-white"> &copy;Adsforsocials 2020 </p> {" "}
        </div>{" "}
        {" "}
      </div>{" "}
      {" "}
    </div>
  );
};

export default Login;
