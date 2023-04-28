import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { getImagePath } from "../util";
import { motion, AnimatePresence } from "framer-motion";

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

const Box = styled(motion.div)<{bgPhoto:string}>`
  height: 200px;
  background-image: url(${props => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const dataOfMovie = data?.results[0];

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if(data){
      if (leaving) return;
      toggleLeaving();
      const totalMovies= data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / OFFSET) - 1;
      setIndex((prev) => prev === maxIndex ? 0 : prev + 1);
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

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

  const OFFSET = 6;

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
                    <Box key={item.id} bgPhoto={getImagePath(item.backdrop_path,"w500")}/>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
