import styled from "styled-components";

export const MemeContainer = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 380px;
  display: flex;
  justify-content: center;
  background-color: rebeccapurple;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const TextLine = styled.span`
  user-select: none;
  position: absolute;
  width: 100%;
  left: 0;
  font-size: 1.636em;
  color: #fafefe;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;

  @media screen and (min-width: 425px) {
    font-size: 1.874em;
  }
`;
