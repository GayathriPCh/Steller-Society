import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";
import { BiSolidChat } from "react-icons/bi";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/gradient-lo-fi-illustration_52683-83566.jpg?w=740&t=st=1713259084~exp=1713259684~hmac=4d3190ac7ce4ed0558ff2978ca5ca46f470a2680749b61aba69df4da2ab104dd"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Themes" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Chat"
          to="/favorites"
          icon={<BiSolidChat />
        }
        />
        <SidebarButton title="Library" to="/home" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
