import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = () => {
  function onLogout() {
    localStorage.setItem("session_user", null);
    localStorage.setItem("session_user_id", null);
    localStorage.setItem("sessionApp", false);
    window.location.href = "/";
  }
  return (
    <div className="side-bar">
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/videos">
              <i class="fa fa-file-video-o" /> <span>My videos</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-primary btn-xs text-white btn-create_video" to="/editor">
              <i class="fa fa-video-camera" aria-hidden="true" /> <span>Create Video</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/systems/config">
              <i class="fa fa-cog" aria-hidden="true" /> <span>Settings</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => onLogout()}>
              <i class="fa fa-sign-in" aria-hidden="true" /> <span>Log out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
