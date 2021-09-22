import styled from "styled-components";

export const DevContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`

export const Img = styled.img`
  width: 100%;
  max-width: 340px;
  filter: drop-shadow(2px 2px 4px #333);
`

export const InfoBox = styled.div`
  text-align: end;
`