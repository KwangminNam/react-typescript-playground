import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { getImagePath } from "../util";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll
} from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #ccc;
  overflow-x: hidden;
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  padding: 60px;
`;

const Title = styled.h2`
  font-size: 68px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 24px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  gap: 5px;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  h4 {
    font-size: 16px;
    text-align: center;
  }
`;

const OverLay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${props =>props.theme.black.lighter};
  overflow: hidden;
`;

const BigCover = styled.img`
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center center;
`;

const BigTitle = styled.h3`
  color: ${props => props.theme.white.lighter};
  font-weight: bold;
  padding: 20px;
  position: relative;
  top: -80px;
  font-size: 48px;
`;

const BigOverView = styled.p`
  color: ${props => props.theme.white.lighter};
`

const rowVar = {
  hidden: {
    x: window.outerWidth + 5
  },
  visible: {
    x: 0
  },
  exit: {
    x: -window.outerWidth - 5
  }
};

const boxVar = {
  normal: {
    scale: 1
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.5,
      type: "tween",
      duration: 0.5
    }
  }
};

const infoVar = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "tween",
      duration: 0.5
    }
  }
};

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const dataOfMovie = data?.results[0];

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / OFFSET) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const OFFSET = 6;
  const navgatie = useNavigate();

  const onBoxClick = (movieID: number) => {
    navgatie(`movies/${movieID}`);
  };

  const onOverlayClick = () => {
    history.back();
  };

  const movieIDMatch = useMatch("movies/:movieId");

  const { scrollY } = useScroll();

  const isMatch =
    movieIDMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === movieIDMatch.params.movieId
    );


  return (
    <Wrapper>
      {isLoading ? (
        <Loader>LOADING...</Loader>
      ) : (
        <>
          <Banner
            bgPhoto={getImagePath(dataOfMovie?.backdrop_path || "")}
            onClick={increaseIndex}
          >
            <Title>{dataOfMovie?.title}</Title>
            <Overview>{dataOfMovie?.overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence onExitComplete={toggleLeaving} initial={false}>
              <Row
                variants={rowVar}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={index}
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(1)
                  .slice(OFFSET * index, OFFSET * index + OFFSET)
                  .map((item) => (
                    <Box
                      layoutId={item.id + ""}
                      key={item.id}
                      bgPhoto={getImagePath(item.backdrop_path, "w500")}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVar}
                      transition={{ type: "tween" }}
                      onClick={() => {
                        onBoxClick(item.id);
                      }}
                    >
                      <Info variants={infoVar}>
                        <h4>{item.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieIDMatch && (
              <>
                <OverLay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <BigMovie
                    layoutId={movieIDMatch.params.movieId}
                    style={{ top: scrollY.get() + 100 }}
                  >
                    {isMatch && (
                      <>
                        <BigCover style={{backgroundImage:`url(${getImagePath(isMatch.backdrop_path,"w500")})`}} />
                        <BigTitle>{isMatch.title}</BigTitle>
                        <BigOverView>{isMatch.overview}</BigOverView>
                      </>
                    )}
                  </BigMovie>
                </OverLay>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
