import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>

        <IconButton  className="sidebar__inputButton">
          <RateReviewIcon />
        </IconButton>
      </div>
      <div className="sidebar__chat">
          
      </div>
    </div>
  );
}

export default Sidebar;
