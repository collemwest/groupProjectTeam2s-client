import styled from "styled-components";

const HomeDiv = styled.div`
  background-color: blueviolet;
`;

const VideoWallDiv = styled.div`
  position: relative;
  min-height: 400px;
  max-height: 1000px;
  height: 40vw;
  background-color: #a5f1d2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const VideoWallInfo = styled.div`
  top: 40%;
  position: absolute;
  background-color: crimson;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    margin: 0;
  }
  & h2 {
    margin: 10px 0 20px 0;
    font-size: calc(26px + 6 * ((100vw - 320px) / 680));
  }

  & a {
    padding: 5px;
    border: 0;
    border-top: 1px solid black;
  }
`;

const Features = styled.div`
  background-color: cadetblue;
  margin: 0 auto;
  max-width: 1400px;
  overflow: hidden;
`;

const ComingUp = styled.div`
  background-color: fuchsia;
  padding: 10px 0;
`;

const Archive = styled.div`
  background-color: greenyellow;
  padding: 10px 0;
`;

const Typography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  text-align: center;
`;

const Card = styled.div`
  background-color: chocolate;
  margin: 0 auto;
  height: 25vw;
  min-height: 120px;
  max-height: 250px;

  width: 30vw;
  min-width: 250px;
  max-width: 400px;
  border: 1px solid #000;

  @media (max-width: 576px) {
    width: 93vw;
    height: 88vw;
  }
`;

const Promos = styled.div`
  background-color: royalblue;
  padding: 10px 0;
`;

const PromoCard = styled.div`
  background-color: green;
  margin: 10px auto 10px auto;

  height: 35vw;
  min-height: 120px;
  max-height: 500px;
  border: 1px solid #000;
  width: 42vw;
  min-width: 250px;
  max-width: 650px;

  @media (max-width: 576px) {
    width: 90vw;
    height: 85vw;
  }
`;

export {
  HomeDiv,
  VideoWallDiv,
  VideoWallInfo,
  Features,
  ComingUp,
  Archive,
  Typography,
  Card,
  Promos,
  PromoCard,
};