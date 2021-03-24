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
import Navbar from "./Components/Menu";
import Side from "./Components/Sidebar";
import "./styles.css";
import jokerlogo from "./joker.jpg";
import Advanced from "./Advanced.js";
import Main from "./Route/Main";
import Pos from "./Route/Pos";
import Appkeys from "./Route/AppKeys";
import ConfigPage from "./Route/Config";
import Login from "./Route/Login";
import Profile from "./Route/Profile";
import PrivateRoute from "./Route/Private";
import PublicRoute from "./Route/Public";
import { Home } from "./Route/HomePage";
import videosFile from "./Route/videosFile";
import Editor from "./Route/Editor";
//import {BASEURL, APIConectionOne} from "dotenv";

require("dotenv").config();

//const base_url = BASEURL;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      joke: null,
      tab: false,
      isFetchingJoke: false,
      current: "main",
      username: null,
      password: null,
      message: null,
      message_style: null,
      login: false,
    };

    this.onTelljoke = this.onTelljoke.bind(this);
    this.AdvanceTab = this.AdvanceTab.bind(this);
  }

  componentDidMount() {
    console.log(`hola esto esss: ${process.env.REACT_APP_BASE_URL}`);
  }

  passencrypt(password) {
    let encode = new Buffer(password);
    return encode.toString("base64");
  }

  renderRedirect = () => {
    return <Redirect to="/" />;
  };

  componentDidMount() {
    this.fecthjoke();
  }

  onRedirection(url = "/") {
    //return <Redirect to={url} />;
  }

  fecthjoke() {
    this.setState({ isFecthingJoke: true });
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          joke: json.joke,
          isFecthingJoke: false,
        });
      });
  }

  onTelljoke() {
    this.fecthjoke();
  }

  onChangestateCurrent(nw) {
    this.setState({ current: nw });
  }

  AdvanceTab() {
    if (this.state.tab) {
      this.setState({ tab: false });
    } else {
      this.setState({ tab: true });
    }
  }

  /*isLogin() {
    return this.state.login;
  }*/

  renderLoginPage(
    nLogin = this.onLogin,
    Userchange = this.onUserchange,
    PasswordChange = 0,
    message = this.state.message,
    message_style = this.state.message_style
  ) {
    return (
      <Login
        onLogin={nLogin}
        onUserchange={Userchange}
        onPasswordChange={PasswordChange}
        message={message}
        message_style={message_style}
      />
    );
  }

  render() {
    /*if (this.state.login == true) {
        console.log(`LOgin state is ${this.state.login}`);
        window.location.href = "/";
    }*/

    return (
      <Router>
        <Switch>
          <PublicRoute restricted={false} component={Login} path="/" exact />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/register"
            exact
          />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute component={videosFile} path="/videos" exact />
          <PrivateRoute component={Editor} path="/editor" exact />
          <PrivateRoute component={ConfigPage} path="/systems/config" exact />
          <PrivateRoute component={Profile} path="/account/profile" exact />
          <PrivateRoute component={Main} path="/admin" exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
