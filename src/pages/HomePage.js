// IMPORT UTILS AND COMPONENTS
import html2canvas from "html2canvas";
import { useState } from "react";
import "../App.css";
import Editor from "../components/Editor";
import { MemesApp, MemesContainer } from "../components/Styles";
import View from "../components/View";

// IMPORT ALL IMAGES
import fire from "../images/fire.jpg";
import futurama from "../images/futurama.jpg";
import history from "../images/history.jpg";
import matrix from "../images/matrix.jpg";
import philosoraptor from "../images/philosoraptor.jpg";
import smart from "../images/smart.jpg";
import burning from "../images/burning.jpg";
import trollface from "../images/trollface.jpg";

// OBJECT WITH ALL IMAGES
const listImages = {
  fire,
  futurama,
  history,
  matrix,
  philosoraptor,
  smart,
  burning,
  trollface,
};

// RENDER COMPONENT
function HomePage({ theme }) {
  const [firstLine, setFirstLine] = useState("Your Text");
  const [secondLine, setSecondLine] = useState("Here");
  const [image, setImage] = useState(fire);
  const [altImage, setAltImage] = useState("fire");

  const handleFirstLine = (evt) => {
    let { value } = evt.target;
    setFirstLine(value);
  };

  const handleSecondLine = (evt) => {
    let { value } = evt.target;
    setSecondLine(value);
  };

  const handleImage = (evt) => {
    let name = evt.target.value;
    let newImage = listImages[name];
    setAltImage(name);
    setImage(newImage);
  };

  const handleExport = () => {
    html2canvas(document.querySelector(".meme__container")).then((canvas) => {
      let image = canvas.toDataURL("image/jpg");
      const link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = image;
      link.click();
    });
  };

  return (
    <MemesApp className={`App ${theme.bg}`}>
      <MemesContainer className="container-md">
        <Editor
          handleFirstLine={handleFirstLine}
          handleSecondLine={handleSecondLine}
          handleImage={handleImage}
          handleExport={handleExport}
          theme={theme}
        />
        <View
          firstLine={firstLine}
          secondLine={secondLine}
          image={image}
          alt={altImage}
          theme={theme}
        />
      </MemesContainer>
    </MemesApp>
  );
}

// EXPORT COMPONENT
export default HomePage;
