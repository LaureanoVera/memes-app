import styled from "styled-components";

export const ErrorContainer = styled.div`
  min-height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const H3 = styled.h3`
  text-shadow: 0 0 7px #AB7710;
  animation: loop 3s infinite;
  font-size: 3.1rem;
  @media screen and (min-width: 440px) {
    font-size: 4rem;
  }

  @keyframes loop {
    0% { transform: translateY(0px) }
    30% { transform: translateY(-14px) translateX(9px)}
    50% { transform: translateY(0px) translateX(-8px)}
    80% { transform: translateY(14px) translateX(17px)}
    100% { transform: translateY(0px) }
  }
`