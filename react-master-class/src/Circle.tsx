import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  bgColor:string
  borderColor:string
}

const Wrapper = styled.div<WrapperProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border: 10px solid ${props => props.borderColor};
`

interface CircleProps {
  bgColor:string
  borderColor?:string
}
const Circle = ({bgColor,borderColor="red"}:CircleProps) => {
  return (
    <Wrapper
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    />
  );
};

export default Circle;