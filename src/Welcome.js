import React from "react";
import logoImage from "./camztrail.jpg"; // Adjust the path for the logo image
import "./Welcome.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

function Welcome() {
  const handleTelematicsClick = () => {
    navigate("/telematics"); // Navigate to the /telematics page
  };
  const navigate = useNavigate();
  return (
    <div className="welcome-page">
      {/* Header with logo */}
      {/* <header className="header">
        <img src={logoImage} alt="Camztrail Logo" className="logo" />
      </header> */}

      {/* Main content with blurred background and options */}
      <div className="content">
        <span style={{ fontSize: "60px" }}>Welcome to Camztrail Connect!</span>

        <div className="options">
          <div className="option-box" onClick={handleTelematicsClick}>
            <h2>Telematics</h2>
          </div>
          <div className="option-box">
            <h2>Navigation</h2>
          </div>
          <div className="option-box">
            <h2>Entertainment</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
