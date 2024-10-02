import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css"; // Create a separate CSS file for styles

const About = () => {
  const navigate = useNavigate();

  const containerStyle = {
    position: "relative",
    color: "#333",
    padding: "60px 20px",
    textAlign: "center",
    minHeight: "100vh",
    overflow: "hidden",
  };

  const backgroundStyle = {
    backgroundImage: `url('https://www.meedmashreqindustryinsight.com/wp-content/uploads/2024/05/shutterstock_591685676-scaled.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    filter: "blur(8px)",
    zIndex: -1,
  };

  const featureGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    marginTop: "40px",
  };

  const baseFeatureDivStyle = {
    backgroundColor: "#ffffff",
    color: "#000",
    borderRadius: "8px",
    border: "2px solid #007bff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    height: "150px",
    width: "150px",
    position: "relative",
  };

  const glowingFeatureStyle = {
    ...baseFeatureDivStyle,
    boxShadow: "0 0 30px rgba(0, 123, 255, 1)", // Enhanced glowing effect
    color: "#007bff",
  };

  const featureIconStyle = {
    fontSize: "36px",
    marginBottom: "10px",
  };

  const features = [
    { title: "Vehicle Tracking", icon: "🚗", route: "/vehicle-tracking" },
    { title: "Driver Behavior", icon: "👨‍✈️", route: "/driver-behavior" },
    {
      title: "Usage-Based Insurance (UBI)",
      icon: "💰",
      route: "/ubi",
      glowing: true,
    },
    { title: "Remote Diagnostics", icon: "🛠️", route: "/remote-diagnostics" },
    { title: "Fuel Management", icon: "⛽", route: "/fuel-management" },
    { title: "Telematics Data", icon: "📊", route: "/telematics-data" },
    { title: "Geofencing", icon: "📍", route: "/geofencing" },
    {
      title: "Stolen Vehicle Recovery",
      icon: "🕵️‍♂️",
      route: "/stolen-vehicle-recovery",
    },
    { title: "Crash Detection", icon: "🚨", route: "/crash-detection" },
    {
      title: "Maintenance Scheduling",
      icon: "📅",
      route: "/maintenance-scheduling",
    },
    {
      title: "Toll Collection",
      icon: "💳",
      route: "/toll-collection",
      glowing: true,
    },
    { title: "OTA Software Updates", icon: "🔄", route: "/ota-updates" },
    { title: "Eco-Driving Assistance", icon: "🌱", route: "/eco-driving" },
    { title: "In-Vehicle Wi-Fi", icon: "📶", route: "/in-vehicle-wifi" },
    {
      title: "Emergency Contact",
      icon: "📞",
      route: "/emergency-contact",
      glowing: true,
    },
    {
      title: "Biometric Authentication",
      icon: "🛡️",
      route: "/biometric-authentication",
      glowing: true,
    },
    {
      title: "Vehicle to Vehicle Alert",
      icon: "🚧",
      route: "/vehicle-distance-alert",
      glowing: true,
    },
    {
      title: "AI-Based Driver Analysis",
      icon: "🤖",
      route: "/ai-driver-analysis",
      glowing: true,
    },
  ];

  const handleFeatureClick = (route) => {
    navigate(route);
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle} />
      <h2 className="animated-heading">Telematics Features</h2>{" "}
      {/* Animated Heading */}
      <div style={featureGridStyle}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={feature.glowing ? glowingFeatureStyle : baseFeatureDivStyle}
            onClick={() => handleFeatureClick(feature.route)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)"; // Slightly increase size on hover
              e.currentTarget.style.boxShadow =
                "0 8px 40px rgba(0, 123, 255, 0.7)"; // Shadow on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"; // Reset size on leave
              e.currentTarget.style.boxShadow = "none"; // Reset shadow on leave
            }}
          >
            <span style={featureIconStyle}>{feature.icon}</span>
            <h3 style={{ margin: 0, fontSize: "1rem" }}>{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
