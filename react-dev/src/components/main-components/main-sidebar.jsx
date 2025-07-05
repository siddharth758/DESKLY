import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  LayoutDashboard,
  ListTodo,
  CalendarDays,
  Folder,
} from "lucide-react";

function MainSidebar() {
  return (
    <div className="main-wrapper">
      <ul>
        <li>
          <Link to="home">
            <Home size={20} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="management">
            <LayoutDashboard size={20} />
            <span>Management</span>
          </Link>
        </li>
        <li>
          <Link to="taskList">
            <ListTodo size={20} />
            <span>Checklist</span>
          </Link>
        </li>
        <li>
          <Link to="calender">
            <CalendarDays size={20} />
            <span>Calendar</span>
          </Link>
        </li>
        <li>
          <Link to="folder">
            <Folder size={20} />
            <span>Folder</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MainSidebar;
