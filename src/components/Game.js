import React from "react";
import { Link } from "react-router-dom";
//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//SmallImg
import { smallImage } from "../util";
//Animations
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  //Load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      onClick={loadDetailHandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <img src={smallImage(image, 640)} alt={name} />
        <div className="gameDesс">
          <h3>{name}</h3>
          <p>{released}</p>
        </div>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.7);
    .gameDesс {
      background: black;
    }
    h3 {
      color: #e9e9f4;
    }
    p {
      color: #828291;
    }
    img {
      transform: scale(1.1);
    }
  }
  h3 {
    color: #aeaebb;
    transition: color 0.3s ease-in-out;
  }
  p {
    font-size: 1rem;
    color: #5d6164;
    transition: color 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    border-radius: 0.5rem;
  }
  .gameDesс {
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 1rem 2rem;
    background: #13111e;
    transition: background 0.3s ease-in-out;
    @media (max-width: 576px) {
      padding: 1rem;
    }
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.3s ease;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  &:last-child {
    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  }
`;

export default Game;
