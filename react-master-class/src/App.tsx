import React from 'react';
import styled from 'styled-components';


const App = () => {

  const Wrapper = styled.div`
    background-color: ${props => props.theme.bgColor};
    width: 100vw;
    height: 100vh;
  `
  const Text = styled.h1`
    color: ${props => props.theme.textColor};
  `

  return (
    <Wrapper>
      <Text>hello world</Text>
    </Wrapper>
  );
};

export default App;