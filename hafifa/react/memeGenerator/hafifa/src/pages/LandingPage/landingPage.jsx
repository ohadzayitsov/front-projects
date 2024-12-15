import { useState } from "react";
import MemeDisplay from "../../components/MemeDisplay/MemeDisplay";
import "./LandingPage.css";
import { useEffect } from "react";
const LandingPage = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState("");
  const [allMemes, setAllMemes] = useState([]);

  const fetchAllMemes = async () => {
    const data = await (
      await fetch("https://api.imgflip.com/get_memes")
    ).json();

    if (data.success) {
      setAllMemes(data.data.memes);
    }
  };

  const getRandomMeme = () => {
    if (allMemes.length>0) {
      setImage(allMemes[Math.floor(Math.random() * allMemes.length)].url);
    }
  };

  useEffect(() => {
    fetchAllMemes();
  }, []);

  useEffect(() => {
    if (allMemes) {
      getRandomMeme()
    }
  }, [allMemes]);

  const handleChangeTopText = (event) => {
    setTopText(event.target.value);
  };
  const handleChangeBottomText = (event) => {
    setBottomText(event.target.value);
  };
  return (
    <div className="body">
      <div className="form">
        <div>
          <div>Top Text</div>
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={topText}
            onChange={handleChangeTopText}
          />
        </div>
        <div style={{ marginLeft: "15px" }}>
          <div>Bottom Text</div>
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={bottomText}
            onChange={handleChangeBottomText}
          />
        </div>
      </div>
      <button className="get-btn" onClick={getRandomMeme}>Get a new meme image 🖼</button>
      <MemeDisplay
        topText={topText}
        bottomText={bottomText}
        image={image}
      ></MemeDisplay>
    </div>
  );
};

export default LandingPage;
