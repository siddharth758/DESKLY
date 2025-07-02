import "../main-components/main-com.css/main-sidebar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faListCheck,
  faCalendarDays,
  faFileLines,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function MainSidebar() {
  const [showNames, setShowNames] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setShowNames(false);
  };

  return (
    <>
      <div
        className="main-all"
        onMouseEnter={() => setShowNames(true)}
        // onMouseLeave={() => setShowNames(false)}
      >
        {/* Sidebar Icons */}
        <div className="main-sidebar">
          <div>
            <div>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div>
              <FontAwesomeIcon icon={faListCheck} />
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <div>
              <FontAwesomeIcon icon={faFileLines} />
            </div>
          </div>

          <div>
            <div className="main-setting-icon">
              <FontAwesomeIcon icon={faGear} />
            </div>
          </div>
        </div>

        {/* Sidebar Text Labels (Clickable) */}
        {showNames && (
          <div className="main-sidebar-names">
            <div>
              <ul>
                <li onClick={() => handleNavigate("/main")}>Home</li>
                <li onClick={() => handleNavigate("/main/management")}>
                  Management
                </li>
                <li onClick={() => handleNavigate("/main/tasklist")}>
                  Task list
                </li>
                <li onClick={() => handleNavigate("/main/calendar")}>
                  Calendar
                </li>
                <li onClick={() => handleNavigate("/main/files")}>Files</li>
              </ul>
            </div>
            <div>
              <div className="main-settings">
                <ul>
                  <li onClick={() => handleNavigate("/main/settings")}>
                    Settings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MainSidebar;
