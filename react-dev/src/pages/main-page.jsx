import { useEffect } from "react";
import "../components/main-components/main-com.css/mainpage.css";
import MainHeader from "../components/main-components/main-header";
import MainSidebar from "../components/main-components/main-sidebar";
import { Outlet } from "react-router-dom";

function MainPage() {
  useEffect(() => {
    document.body.style.background = "#e5e5e5";

    return () => {
      document.body.style.background = "#121212";
    };
  }, []);

  return (
    <div className="main-wrapper">
      <MainHeader />
      <MainSidebar />
      <Outlet />
    </div>
  );
}

export default MainPage;
