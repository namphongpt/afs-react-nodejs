import React from "react";
import { render } from "react-dom";
import logo from "../assets/icons/logo.png";
import { StickyContainer, Sticky } from "react-sticky";
import useSticky from "../Components/sticky";

export const MenuPub = () => {
  const { isSticky } = useSticky();
  return (
    <nav
      className={
        isSticky
          ? "navbar navbar-expand-lg navbar-light fixed-top"
          : "navbar navbar-expand-lg navbar-light"
      }
    >
      <a className="navbar-brand" href="#">
        <span className="logo">
          <img className="logo-image" src={logo} />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div className="navbar-nav collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Categories
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Prices
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Services
          </a>
        </li>
      </ul>
        <a
          href="/register"
          class="btn btn-outline-primary my-2 my-sm-0 btn-signup"
          type="submit"
        >
          Free Sign up
        </a>

        <a
          href="/login"
          class="btn btn-warning my-2 my-sm-0 btn-signin"
          type="submit"
        >
          Sign in
        </a>
      </div>
    </nav>
  );
};
