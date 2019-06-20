import React from "react";
import { Menu } from "react-bulma-components/full";
import { NavLink } from "react-router-dom";

function TheNav(props) {
  let isLoggedIn =
    localStorage.getItem("username") &&
    localStorage.getItem("email") &&
    localStorage.getItem("token");
  return (
    <Menu className="sidebar">
      <Menu.List title="Navigation">
        <Menu.List.Item>
          <NavLink to="/">Home</NavLink>
        </Menu.List.Item>
        <Menu.List.Item>
          <NavLink to="/lists">Your lists</NavLink>
        </Menu.List.Item>
        {isLoggedIn ? (
          <Menu.List.Item>
            <NavLink to="/profile">Your profile</NavLink>
          </Menu.List.Item>
        ) : (
          ""
        )}
        <Menu.List.Item>
          {isLoggedIn ? (
            <NavLink to="/profile">Log out</NavLink>
          ) : (
            <NavLink to="/login">Log in</NavLink>
          )}
        </Menu.List.Item>
      </Menu.List>
    </Menu>
  );
}

export default TheNav;
