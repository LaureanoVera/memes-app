import React from "react";
import { DevContainer, Img, InfoBox } from "../components/DevElements";

const DevPage = ({ theme }) => {
  return (
    <DevContainer className={`${theme.bg} p-3`}>
      <Img className="me-3" src="logo.svg" alt="Developer Hero" />
      <InfoBox className="p-4">
        <h3
          className={`my-1 fs-4 ${
            // text-warning class in dark mode
            theme.bg === "bg-dark" ? `text-warning` : `${theme.text}`
          }`}
        >
          &copy;Laureano Vera
        </h3>
        <h2 className={`my-1 fs-2 text-uppercase ${theme.text}`}>
          Frontend Developer
        </h2>
        <p>
          <small className={`my-1 text-muted`}>And Music Producer</small>
        </p>
        <a className={`${theme.text}`} href="https://www.linkedin.com/in/laureano-vera-320086204/" target="blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </InfoBox>
    </DevContainer>
  );
};

export default DevPage;
