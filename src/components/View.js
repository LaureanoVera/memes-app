import React from "react";
import { Image, MemeContainer, TextLine } from "./ViewElements";

const View = ({ image, alt, firstLine, secondLine }) => {
  return (
    <MemeContainer className="meme__container">
      <TextLine className="one">{firstLine}</TextLine>
      <br />
      <TextLine className="two">{secondLine}</TextLine>
      <br />
      <Image src={image} alt={alt} />
    </MemeContainer>
  );
};

export default View;
