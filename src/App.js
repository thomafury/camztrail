import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Add Font Awesome CSS
import fingerprintImage from "./fingerprint.jpg"; // adjust the path as needed
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Welcome from "./Welcome"; // Import the Welcome component
import About from "./About";

function Login() {
  const navigate = useNavigate(); // Hook for navigation

  // Handle the login button click
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    // Add any validation or API calls here if needed
    navigate("/welcome"); // Navigate to the welcome page
  };

  return (
    <div className="content">
      <h1 className="title">Camztrail Connect</h1>

      <div className="login-box">
        <video autoPlay muted loop id="background-video">
          <source
            src="https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/austral/reveal/videos/renault-austral-002-desktop.mp4.asset.mp4/f9d134600d.mp4#t=0.1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="last-four">Enter last 4 digits of vehicle:</label>
          <input type="text" id="last-four" maxLength="4" placeholder="1234" />

          <div className="or">OR</div>

          <button type="button" className="fingerprint-button">
            <img
              src={fingerprintImage}
              alt="Fingerprint"
              style={{ width: "100px", height: "100px" }}
            />
          </button>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/telematics" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
