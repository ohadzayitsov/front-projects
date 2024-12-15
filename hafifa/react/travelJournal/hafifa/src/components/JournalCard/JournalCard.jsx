import { useState } from "react";
import { LocationOn} from '@mui/icons-material'
import './JournalCard.css'
const JournalCard = ({landmark ,country,startDate,endDate,description,image}) => {
  const [googleLink] = useState(`https://www.google.com/maps/place/${landmark}+${country}`)
    return (

    
    <div className="container">
      <img className="landmark-img" src={image} alt="landmark" />
      <div className="content">
        <p className="location"><LocationOn sx={{color:'red'}}/> {country} <a href={googleLink} className="maps-link" target="_blank">View on Google maps</a></p>
        <h2 className="landmark">{landmark}</h2>
        <div className="dates">{startDate} - {endDate}</div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default JournalCard;
