import Image from "next/image";
import "./Navbar.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/Icon";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <img src="images/logo.png" alt="Furniro" />
          <span className="title">Furniro</span>
        </div>
        <div className="page-menu">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div className="user-menu">
          <Icon href="account" name="account-alert" />
          <Icon href="account" name="search" />
          <Icon href="account" name="heart" />
          <Icon href="account" name="cart" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
