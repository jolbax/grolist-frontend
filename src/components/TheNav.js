import React from "react";
import { Menu } from "react-bulma-components/full";
import { NavLink } from "react-router-dom";

function TheNav(props) {
  return (
    <Menu className="sidebar">
      <Menu.List title="Navigation">
        <Menu.List.Item>
          <NavLink to="/">Home</NavLink>
        </Menu.List.Item>
        <Menu.List.Item>
          <NavLink to="/lists">Your lists</NavLink>
        </Menu.List.Item>
        <Menu.List.Item>
          <NavLink to="/profile">Your profile</NavLink>
        </Menu.List.Item>
      </Menu.List>
    </Menu>
  );
}

export default TheNav;
