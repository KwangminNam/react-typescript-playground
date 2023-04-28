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
  gap: 10px;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: blue;
  height: 200px;
`;

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const dataOfMovie = data?.results[0];

  const [index, setIndex] = useState(0);
  const increaseIndex = () => setIndex((prev) => prev + 1);

  const rowVar = {
    hidden: {
      x: window.outerWidth + 10,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.outerWidth - 10,
    }
  };

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
            <AnimatePresence>
              <Row
                variants={rowVar}
                initial="hidden"
                animate="visible"
                exit='exit'
                key={index}
                transition={{type:'tween',duration:1}}
              >
                {[1,2,3,4,5,6].map(item => <Box key={item}>{item}</Box>)}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
