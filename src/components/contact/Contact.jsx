import { useEffect, useState } from "react";
import developingFirstLogo from "../../assets/developing-first.svg";
import developingSecondLogo from "../../assets/developing-second.svg";
import "./Contact.css";
function Contact() {
  const [showFirst, setShowFirst] = useState(true); // Toggle between the two SVGs

  useEffect(() => {
    // Toggle the state between the two SVGs every 2 seconds (2000 ms)
    const intervalId = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="svg-container">
      <img
        className={`svg ${showFirst ? "first-svg" : ""}`}
        src={developingFirstLogo}
        alt="First SVG"
      />
      <img
        className={`svg ${!showFirst ? "second-svg" : ""}`}
        src={developingSecondLogo}
        alt="Second SVG"
      />

      <h2>Work in Progress</h2>
    </div>
  );
}

export default Contact;
