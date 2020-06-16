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
            <Link className="nav-link" to="/admin">
              <i class="fa fa-2x fa-tachometer" /> <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/store/apps">
              <i class="fa fa-2x fa-files-o" aria-hidden="true" /> <span>Invoices</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/store/apps">
              <i class="fa fa-2x fa-rocket" aria-hidden="true" /> <span>Storage products</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/store/apps">
              <i class="fa fa-2x fa-user-o" aria-hidden="true" /> <span>Customers</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/systems/appkeys">
              <i class="fa fa-2x fa-key" aria-hidden="true" /> <span>Permitions</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/systems/config">
              <i class="fa fa-2x fa-cog" aria-hidden="true" /> <span>Settings</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => onLogout()}>
              <i class="fa fa-2x fa-sign-in" aria-hidden="true" /> <span>Log out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
