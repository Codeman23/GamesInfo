import React from "react";
//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//SmallImg
import { smallImage } from "../util";
//Imgs
import ps4 from "../img/ps4.svg";
import ps5 from "../img/ps5.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import ios from "../img/ios.svg";
import gamepad from "../img/gamepad.svg";
//Star imgs
import starEmpty from "../img/star-empty.svg";
import starFull from "../img/star-full.svg";

const GameDetail = () => {
  const history = useHistory();
  //Exit detail

  const overflowAuto = () => (document.body.style.overflow = "auto");

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      overflowAuto();
      history.push("/");
    }
  };
  onpopstate = function () {
    overflowAuto();
  };
  //Get star rating
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img alt="star" className="star" key={i} src={starFull}></img>
        );
      } else {
        stars.push(
          <img alt="star" className="star" key={i} src={starEmpty}></img>
        );
      }
    }
    return stars;
  };

  //Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return ps4;
      case "PlayStation 5":
        return ps5;
      case "Xbox Series S/X":
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "macOS":
        return apple;
      case "iOS":
        return ios;
      default:
        return gamepad;
    }
  };

  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <Platforms>
                  {game.platforms.map((data) => (
                    <div key={data.platform.id}>
                      <img
                        src={getPlatform(data.platform.name)}
                        alt={data.platform.name}
                      />
                      <p>{data.platform.name}</p>
                    </div>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={smallImage(game.background_image, 1280)} alt="game" />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt="game"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  padding: 20px 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #797d86;
  }
  &::-webkit-scrollbar-track {
    background: #1d2a3b;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  @media (max-width: 1300px) {
    padding: 2rem;
    width: 90%;
    left: 5%;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    width: 96%;
    left: 2%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .rating {
    margin-bottom: 10px;
  }
  .star {
    width: 1.2rem;
    height: 1.2rem;
    display: inline-block;
    margin-right: 0.1rem;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;

  div {
    margin-right: 0.8rem;
    margin-bottom: 0.4rem;
    &:last-child {
      margin-right: 0;
    }
  }
  img {
    width: 38px;
    margin: 0 auto 5px;
    @media (max-width: 576px) {
      width: 26px;
    }
  }
  p {
    font-size: 0.7rem;
    @media (max-width: 576px) {
      font-size: 0.6rem;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  @media (max-width: 576px) {
    margin-top: 1rem;
  }
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0;
  @media (max-width: 576px) {
    margin: 1rem 0;
  }
`;

export default GameDetail;
