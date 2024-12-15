import { useEffect } from "react";
import "./MemeDisplay.css";
const MemeDisplay = ({topText,bottomText,image}) => {

  
  return (
    <div id="body">
     <div className="image-container">
        <img src={image} />
        <span className="top">{topText}</span>
        <span className="bottom">{bottomText}</span>
      </div>
    </div>
  );
};

export default MemeDisplay;
