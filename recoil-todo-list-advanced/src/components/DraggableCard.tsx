import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface DraggableCardProps {
  item:string;
  idx:number;
}

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 10px;
  margin-bottom: 5px;
`;


function DraggableCard({item,idx}:DraggableCardProps) {
  return (
    <Draggable draggableId={item} key={item} index={idx}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
