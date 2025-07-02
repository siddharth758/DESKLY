// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import SignupPage from "./pages/SignUpPage";
import MainPage from "./pages/main-page";
import Home from "./components/main-components/views/HOME.JSX";
import Management from "./components/main-components/views/mangagement";
import TaskList from "./components/main-components/views/task-list";
import Calendar from "./components/main-components/views/calendar";
import Files from "./components/main-components/views/files";

import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign" element={<SignupPage />} />
          {/* Main layout route with nested routes*/}
          <Route path="/main" element={<MainPage />} />
          <Route index element={<Home />} /> {/* /main */}
          <Route path="management" element={<Management />} />
          <Route path="tasklist" element={<TaskList />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="files" element={<Files />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
