import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { getImagePath } from "../util";

const Wrapper = styled.div`
  background-color: #ccc;
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
  background-image:linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,0.5)) , url(${(props) => props.bgPhoto});
  background-size:cover;
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

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  console.log(data, isLoading);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>LOADING...</Loader>
      ) : (
        <>
          <Banner bgPhoto={getImagePath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
