import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//Inner page
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { fadeIn } from "../animations";
//Components
import Game from "../components/Game";

const Home = () => {
  //Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetail />}

      {searched.length ? (
        <div className="searched">
          <h2>Searched games</h2>
          <Games>
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}

      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Popular games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem 3rem;
  @media (max-width: 768px) {
    padding: 0rem 3rem 3rem;
  }
  @media (max-width: 576px) {
    padding: 0rem 2rem 3rem;
  }
  @media (max-width: 375px) {
    padding: 0rem 1rem 2rem;
  }
  h2 {
    color: #cee4ff;
    text-transform: uppercase;
    padding: 4rem 0rem;
    @media (max-width: 768px) {
      padding: 3rem 0rem;
    }
    @media (max-width: 576px) {
      padding: 2rem 0rem;
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 1300px) {
    grid-row-gap: 3rem;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export default Home;
