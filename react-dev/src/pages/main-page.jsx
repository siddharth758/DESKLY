import MainSidebar from "../components/main-components/main-sidebar";
import Header from "../components/main-components/main-header";
import "../components/main-components/main-com.css/mainpage.css";

import { Outlet } from "react-router-dom"; // This shows dynamic content

function MainPage() {
  return (
    <div className="main-layout" style={{ display: "flex", height: "100vh" }}>
      <MainSidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
