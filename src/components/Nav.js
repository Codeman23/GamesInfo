import React, { useState } from "react";
//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import logo from "../img/logo.svg";
//Redux and routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
//Animations
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <p>
          GAMES
          <br />
          INFO
        </p>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.nav)`
  padding: 1rem 5rem 0;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1rem 3rem 0;
  }
  @media (max-width: 576px) {
    padding: 1rem 2rem 0;
  }
  @media (max-width: 375px) {
    padding: 0.5rem 1rem 0;
  }

  input {
    display: inline-block;
    vertical-align: bottom;
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
    background: #cee4ff;
    outline: none;
    border-radius: 5px 0 0 5px;
    transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    @media (max-width: 1300px) {
      width: 60%;
    }
    @media (max-width: 576px) {
      width: 70%;
      padding: 0.88rem 0.5rem;
      font-size: 1.2rem;
    }
    &:active {
      background: white;
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.35);
    }
    &:focus {
      background: white;
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.35);
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #4dc530;
    color: white;
    border-radius: 0 5px 5px 0;
    transition: background 0.3s ease-in-out;
    @media (max-width: 576px) {
      padding: 1rem;
      font-size: 1rem;
    }
    &:hover {
      background: #44ac30;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 60px;
    height: auto;
    margin-right: 0.5rem;
    font-weight: bold;
    @media (max-width: 576px) {
      width: 50px;
    }
  }
  p {
    color: #5e6a8e;
    text-align: left;
    line-height: 1;
    font-size: 1.5rem;
    font-family: "Luckiest Guy", cursive;
    letter-spacing: 1.4px;
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }
`;
