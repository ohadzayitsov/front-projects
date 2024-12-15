import { useState } from "react";
import "./LandingPage.css";
const LandingPage = () => {
  const [facts, setFacts] = useState([
    "Was First Released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 200K stars on GitHub",
    "Is maintained by Meta",
    "Powers thousands of enterprise apps including mobile apps",
  ]);

  return (
    <div className="body">
      <h1>Fun Facts about React</h1>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
