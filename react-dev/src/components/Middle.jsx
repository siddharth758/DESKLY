import { useNavigate } from "react-router-dom";
import "../css/Middle.css";

function Middle() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/sign");
  };
  return (
    <>
      <div className="middle-div">
        <div className="tagline">
          <h1>Build, track, and deliver — faster.</h1>
          <p>An integrated task system for serious teams.</p>
        </div>
        <div className="btn">
          <button className="btn-box" onClick={handleGetStarted}>
            Get started
          </button>
        </div>
      </div>
    </>
  );
}
export default Middle;
